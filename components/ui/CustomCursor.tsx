"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ============================================
// CURSOR CONTEXT
// ============================================

type CursorVariant = "default" | "hover" | "button";

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
// INSTANT CURSOR - NO LAG
// ============================================

export function CustomCursor() {
    const [variant, setVariant] = useState<CursorVariant>("default");
    const [isVisible, setIsVisible] = useState(false);

    // Instant dot position
    const dotX = useMotionValue(0);
    const dotY = useMotionValue(0);

    // Ring follows with MINIMAL delay using spring
    const ringX = useSpring(dotX, { stiffness: 500, damping: 28 });
    const ringY = useSpring(dotY, { stiffness: 500, damping: 28 });

    useEffect(() => {
        // Only show on desktop
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return;

        const moveCursor = (e: MouseEvent) => {
            dotX.set(e.clientX);
            dotY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const hideCursor = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
        };
    }, [dotX, dotY, isVisible]);

    // Cursor sizes
    const cursorSize = {
        default: 40,
        hover: 60,
        button: 70,
    };

    // Cursor colors (acid green theme)
    const cursorColors = {
        default: {
            ring: "rgba(184, 255, 0, 0.5)",
            fill: "rgba(184, 255, 0, 0.1)",
            glow: "0 0 20px rgba(184, 255, 0, 0.3)",
            dot: "#B8FF00",
        },
        hover: {
            ring: "rgba(184, 255, 0, 0.8)",
            fill: "rgba(184, 255, 0, 0.15)",
            glow: "0 0 30px rgba(184, 255, 0, 0.5)",
            dot: "#B8FF00",
        },
        button: {
            ring: "rgba(184, 255, 0, 1)",
            fill: "rgba(184, 255, 0, 0.2)",
            glow: "0 0 40px rgba(184, 255, 0, 0.7)",
            dot: "#B8FF00",
        },
    };

    return (
        <CursorContext.Provider value={{ variant, setVariant }}>
            {/* Main Cursor Ring */}
            <motion.div
                className="cursor-ring"
                style={{
                    position: "fixed",
                    left: ringX,
                    top: ringY,
                    width: cursorSize[variant],
                    height: cursorSize[variant],
                    border: `2px solid ${cursorColors[variant].ring}`,
                    backgroundColor: cursorColors[variant].fill,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999,
                    x: "-50%",
                    y: "-50%",
                    mixBlendMode: "screen",
                    boxShadow: cursorColors[variant].glow,
                    opacity: isVisible ? 1 : 0,
                    transition: "width 0.2s ease, height 0.2s ease, border 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
                }}
            />

            {/* Center Dot - Instant response */}
            <motion.div
                className="cursor-dot"
                style={{
                    position: "fixed",
                    left: dotX,
                    top: dotY,
                    width: 6,
                    height: 6,
                    backgroundColor: cursorColors[variant].dot,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 10000,
                    x: "-50%",
                    y: "-50%",
                    opacity: isVisible ? 1 : 0,
                    boxShadow: "0 0 10px rgba(184, 255, 0, 0.8)",
                }}
            />

            {/* Hide default cursor */}
            <style jsx global>{`
                * {
                    cursor: none !important;
                }
                ::selection {
                    background: rgba(184, 255, 0, 0.2);
                }
            `}</style>
        </CursorContext.Provider>
    );
}

// ============================================
// CURSOR PROVIDER
// ============================================

export function CursorProvider({ children }: { children: ReactNode }) {
    return (
        <>
            <CustomCursor />
            {children}
        </>
    );
}

// ============================================
// MAGNETIC BUTTON
// ============================================

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export function MagneticButton({
    children,
    className = "",
    onClick,
    href,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
    const { setVariant } = useCursor();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 300, damping: 20 });
    const springY = useSpring(y, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        x.set((e.clientX - centerX) * 0.2);
        y.set((e.clientY - centerY) * 0.2);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setVariant("default");
    };

    const handleMouseEnter = () => {
        setVariant("button");
    };

    const Component = href ? motion.a : motion.button;

    return (
        <Component
            ref={ref}
            href={href}
            className={className}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </Component>
    );
}

// ============================================
// CURSOR TEXT
// ============================================

export function CursorText({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    const { setVariant } = useCursor();

    return (
        <span
            className={className}
            onMouseEnter={() => setVariant("hover")}
            onMouseLeave={() => setVariant("default")}
        >
            {children}
        </span>
    );
}
