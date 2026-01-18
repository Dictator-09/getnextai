"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// ============================================
// CURSOR CONTEXT
// ============================================

type CursorVariant = "default" | "hover" | "text" | "button" | "hidden";

interface CursorContextType {
    variant: CursorVariant;
    setVariant: (variant: CursorVariant) => void;
}

const CursorContext = createContext<CursorContextType>({
    variant: "default",
    setVariant: () => { },
});

export const useCursor = () => useContext(CursorContext);

// ============================================
// CURSOR PROVIDER
// ============================================

interface CursorProviderProps {
    children: ReactNode;
}

export function CursorProvider({ children }: CursorProviderProps) {
    const [variant, setVariant] = useState<CursorVariant>("default");
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    // Motion values for smooth cursor movement
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 400 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    // Cursor sizes based on variant
    const cursorSizes = {
        default: 12,
        hover: 48,
        text: 4,
        button: 64,
        hidden: 0,
    };

    useEffect(() => {
        // Only show custom cursor on devices with fine pointers (desktop)
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return;

        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY]);

    // Hide on touch devices
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
        return <CursorContext.Provider value={{ variant, setVariant }}>{children}</CursorContext.Provider>;
    }

    return (
        <CursorContext.Provider value={{ variant, setVariant }}>
            {/* Hide default cursor globally */}
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
            `}</style>

            {children}

            {/* Custom cursor */}
            {isVisible && (
                <>
                    {/* Outer ring */}
                    <motion.div
                        ref={cursorRef}
                        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                        style={{
                            x: smoothX,
                            y: smoothY,
                        }}
                    >
                        <motion.div
                            className="rounded-full border border-[#B8FF00] flex items-center justify-center"
                            animate={{
                                width: cursorSizes[variant],
                                height: cursorSizes[variant],
                                x: -cursorSizes[variant] / 2,
                                y: -cursorSizes[variant] / 2,
                                opacity: variant === "hidden" ? 0 : 1,
                            }}
                            transition={{
                                type: "spring",
                                damping: 20,
                                stiffness: 300,
                            }}
                        >
                            {/* Inner dot */}
                            {variant !== "button" && variant !== "hidden" && (
                                <motion.div
                                    className="rounded-full bg-[#B8FF00]"
                                    animate={{
                                        width: variant === "text" ? 2 : 4,
                                        height: variant === "text" ? 2 : 4,
                                    }}
                                />
                            )}

                            {/* Button state label */}
                            {variant === "button" && (
                                <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-[#B8FF00] text-[10px] font-mono uppercase tracking-wider"
                                >
                                    Click
                                </motion.span>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </CursorContext.Provider>
    );
}

// ============================================
// CURSOR TRIGGER COMPONENT
// ============================================

interface CursorTriggerProps {
    variant: CursorVariant;
    children: ReactNode;
    className?: string;
}

export function CursorTrigger({ variant, children, className }: CursorTriggerProps) {
    const { setVariant } = useCursor();

    return (
        <div
            className={className}
            onMouseEnter={() => setVariant(variant)}
            onMouseLeave={() => setVariant("default")}
        >
            {children}
        </div>
    );
}

export default CursorProvider;
