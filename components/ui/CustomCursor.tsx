"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

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
// OPTIMIZED CURSOR (NO LAG!)
// ============================================

export function CustomCursor() {
    const [variant, setVariant] = useState<CursorVariant>("default");
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Use RAF for smooth 60fps animation
    const requestRef = useRef<number | null>(null);
    const previousTimeRef = useRef<number | null>(null);
    const targetPosition = useRef({ x: 0, y: 0 });
    const currentPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        // Only show on desktop
        const isFinePointer = window.matchMedia("(pointer: fine)").matches;
        if (!isFinePointer) return;

        const moveCursor = (e: MouseEvent) => {
            targetPosition.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const hideCursor = () => setIsVisible(false);

        // Smooth animation using RAF
        const animate = (time: number) => {
            if (previousTimeRef.current !== undefined) {
                // Lerp for smooth following
                const lerp = 0.15;

                currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * lerp;
                currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * lerp;

                setPosition({
                    x: currentPosition.current.x,
                    y: currentPosition.current.y,
                });
            }

            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", hideCursor);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [isVisible]);

    // Cursor styles based on variant (acid green theme)
    const cursorStyles = {
        default: {
            width: 40,
            height: 40,
            border: "2px solid rgba(184, 255, 0, 0.6)",
            backgroundColor: "rgba(184, 255, 0, 0.1)",
        },
        hover: {
            width: 60,
            height: 60,
            border: "2px solid rgba(184, 255, 0, 0.8)",
            backgroundColor: "rgba(184, 255, 0, 0.15)",
        },
        button: {
            width: 80,
            height: 80,
            border: "3px solid rgba(184, 255, 0, 1)",
            backgroundColor: "rgba(184, 255, 0, 0.2)",
        },
    };

    return (
        <CursorContext.Provider value={{ variant, setVariant }}>
            {/* Main Cursor Ring */}
            <motion.div
                className="cursor-ring"
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    pointerEvents: "none",
                    zIndex: 9999,
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                    opacity: isVisible ? 1 : 0,
                    ...cursorStyles[variant],
                    borderRadius: "50%",
                    mixBlendMode: "screen",
                    transition: "width 0.3s ease, height 0.3s ease, border 0.3s ease, background-color 0.3s ease",
                }}
            />

            {/* Center Dot */}
            <div
                className="cursor-dot"
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    width: 6,
                    height: 6,
                    backgroundColor: "#B8FF00",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 10000,
                    transform: `translate(${targetPosition.current.x}px, ${targetPosition.current.y}px) translate(-50%, -50%)`,
                    opacity: isVisible ? 1 : 0,
                }}
            />

            {/* Hide default cursor */}
            <style jsx global>{`
                * {
                    cursor: none !important;
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
// MAGNETIC BUTTON (OPTIMIZED)
// ============================================

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    strength?: number;
}

export function MagneticButton({
    children,
    className = "",
    onClick,
    strength = 0.2,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const { setVariant } = useCursor();
    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const animationRef = useRef<number | null>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        const animate = () => {
            setOffset((prev) => ({
                x: prev.x + (distanceX * strength - prev.x) * 0.15,
                y: prev.y + (distanceY * strength - prev.y) * 0.15,
            }));
        };

        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
        animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
        setOffset({ x: 0, y: 0 });
        setVariant("default");
    };

    const handleMouseEnter = () => {
        setVariant("button");
    };

    return (
        <button
            ref={ref}
            className={`magnetic-button ${className}`}
            style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onClick={onClick}
        >
            {children}
        </button>
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
