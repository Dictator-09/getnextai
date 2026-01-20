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
// SIMPLE PERFORMANT CURSOR
// ============================================

export function CustomCursor() {
    const [variant, setVariant] = useState<CursorVariant>("default");
    const [isVisible, setIsVisible] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return;

        const moveCursor = (e: MouseEvent) => {
            if (cursorRef.current && dotRef.current) {
                // Use direct transform for 60fps performance
                cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
                dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
            }
            if (!isVisible) setIsVisible(true);
        };

        const hideCursor = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
        };
    }, [isVisible]);

    const cursorSize = variant === "button" ? 50 : variant === "hover" ? 40 : 32;
    const cursorColor = variant === "button" || variant === "default" ? "#00C9A7" : "#FF6B35";

    return (
        <CursorContext.Provider value={{ variant, setVariant }}>
            {/* Simple Cursor Ring */}
            <div
                ref={cursorRef}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: cursorSize,
                    height: cursorSize,
                    border: `2px solid ${cursorColor}`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 9999,
                    opacity: isVisible ? 0.6 : 0,
                    transition: "width 0.15s, height 0.15s, opacity 0.15s, border-color 0.15s",
                    willChange: "transform",
                }}
            />

            {/* Center Dot */}
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 6,
                    height: 6,
                    backgroundColor: cursorColor,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 10000,
                    opacity: isVisible ? 1 : 0,
                    transition: "opacity 0.15s, background-color 0.15s",
                    willChange: "transform",
                }}
            />

            {/* Hide default cursor */}
            <style jsx global>{`
                @media (pointer: fine) {
                    * {
                        cursor: none !important;
                    }
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
