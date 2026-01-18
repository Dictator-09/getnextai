"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// ============================================
// CURSOR CONTEXT
// ============================================

type CursorVariant = "default" | "hover" | "text" | "button";

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
// CUSTOM CURSOR COMPONENT
// ============================================

export function CustomCursor({ children }: { children: ReactNode }) {
    const [variant, setVariant] = useState<CursorVariant>("default");
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Mouse position with spring physics
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        setIsMounted(true);

        // Only show custom cursor on devices with fine pointers
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return;

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const hideCursor = () => setIsVisible(false);
        const showCursor = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", hideCursor);
        window.addEventListener("mouseenter", showCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
            window.removeEventListener("mouseenter", showCursor);
        };
    }, [cursorX, cursorY, isVisible]);

    // Cursor size and colors based on variant (acid green theme)
    const cursorVariants = {
        default: {
            scale: 1,
            backgroundColor: "rgba(184, 255, 0, 0.1)",
            border: "2px solid rgba(184, 255, 0, 0.6)",
            mixBlendMode: "normal" as const,
        },
        hover: {
            scale: 1.5,
            backgroundColor: "rgba(184, 255, 0, 0.2)",
            border: "2px solid rgba(184, 255, 0, 1)",
            mixBlendMode: "difference" as const,
        },
        text: {
            scale: 0.5,
            backgroundColor: "rgba(184, 255, 0, 0.3)",
            border: "2px solid rgba(184, 255, 0, 1)",
            mixBlendMode: "normal" as const,
        },
        button: {
            scale: 2,
            backgroundColor: "rgba(184, 255, 0, 0.1)",
            border: "2px solid rgba(184, 255, 0, 1)",
            mixBlendMode: "difference" as const,
        },
    };

    // Don't render cursor elements on touch devices or before mount
    const showCursor = isMounted && typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

    return (
        <CursorContext.Provider value={{ variant, setVariant }}>
            {children}

            {showCursor && (
                <>
                    {/* Main Cursor */}
                    <motion.div
                        className="cursor-main"
                        style={{
                            left: cursorXSpring,
                            top: cursorYSpring,
                            position: "fixed",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            pointerEvents: "none",
                            zIndex: 9999,
                            x: "-50%",
                            y: "-50%",
                            opacity: isVisible ? 1 : 0,
                        }}
                        animate={cursorVariants[variant]}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    {/* Cursor Trail/Dot */}
                    <motion.div
                        className="cursor-dot"
                        style={{
                            left: cursorXSpring,
                            top: cursorYSpring,
                            position: "fixed",
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#B8FF00",
                            pointerEvents: "none",
                            zIndex: 10000,
                            x: "-50%",
                            y: "-50%",
                            opacity: isVisible ? 1 : 0,
                        }}
                        animate={{
                            scale: variant === "button" ? 0 : 1,
                        }}
                    />

                    {/* Hide default cursor on body */}
                    <style jsx global>{`
                        * {
                            cursor: none !important;
                        }
                    `}</style>
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

// ============================================
// MAGNETIC BUTTON COMPONENT
// ============================================

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
}

export function MagneticButton({
    children,
    className = "",
    onClick,
    strength = 0.3,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const { setVariant } = useCursor();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        // Magnetic effect - pull towards cursor
        x.set(distanceX * strength);
        y.set(distanceY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setVariant("default");
    };

    const handleMouseEnter = () => {
        setVariant("button");
    };

    return (
        <motion.button
            ref={ref}
            className={`magnetic-button ${className}`}
            style={{
                x: xSpring,
                y: ySpring,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}

// ============================================
// CURSOR PROVIDER (WRAPPER)
// ============================================

export function CursorProvider({ children }: { children: React.ReactNode }) {
    return (
        <CustomCursor>
            {children}
        </CustomCursor>
    );
}

export default CustomCursor;
