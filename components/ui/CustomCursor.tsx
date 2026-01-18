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
// CURSOR-AWARE TEXT COMPONENT
// ============================================

export function CursorText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const { setVariant } = useCursor();

    return (
        <span
            className={className}
            onMouseEnter={() => setVariant("text")}
            onMouseLeave={() => setVariant("default")}
        >
            {children}
        </span>
    );
}

// ============================================
// MAGNETIC CARD COMPONENT
// ============================================

interface MagneticCardProps {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export function MagneticCard({ children, className = "", strength = 0.05 }: MagneticCardProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { setVariant } = useCursor();

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);
    const rotateXSpring = useSpring(rotateX, springConfig);
    const rotateYSpring = useSpring(rotateY, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * strength);
        y.set(distanceY * strength);
        rotateX.set(distanceY * -0.1);
        rotateY.set(distanceX * 0.1);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
        setVariant("default");
    };

    return (
        <motion.div
            ref={ref}
            className={`magnetic-card ${className}`}
            style={{
                x: xSpring,
                y: ySpring,
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setVariant("hover")}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// CURSOR DEMO COMPONENT
// ============================================

export function CursorDemo() {
    return (
        <div className="min-h-screen bg-black text-white p-12">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Hero Section */}
                <div className="text-center space-y-6">
                    <h1 className="text-6xl font-bold">
                        <CursorText>Custom Cursor Magic</CursorText>
                    </h1>
                    <p className="text-xl text-gray-400">
                        Move your mouse around to see the custom cursor in action
                    </p>
                </div>

                {/* Magnetic Buttons */}
                <div className="flex gap-6 justify-center flex-wrap">
                    <MagneticButton className="px-8 py-4 bg-[#B8FF00] text-black rounded-full font-semibold hover:bg-[#a8ef00] transition-colors">
                        Magnetic Button
                    </MagneticButton>

                    <MagneticButton
                        className="px-8 py-4 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-500 transition-colors"
                        strength={0.5}
                    >
                        Strong Magnet
                    </MagneticButton>

                    <MagneticButton className="px-8 py-4 border-2 border-[#B8FF00] text-[#B8FF00] rounded-full font-semibold hover:bg-[#B8FF00]/10 transition-colors">
                        Outline Style
                    </MagneticButton>
                </div>

                {/* Magnetic Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <MagneticCard
                            key={i}
                            className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8 rounded-2xl border border-[#B8FF00]/20 backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-bold mb-4">Card {i}</h3>
                            <p className="text-gray-300">
                                Hover over me to see the 3D tilt effect and custom cursor
                            </p>
                        </MagneticCard>
                    ))}
                </div>

                {/* Text with cursor effect */}
                <div className="text-center space-y-4">
                    <p className="text-lg text-gray-400">
                        <CursorText>Hover over this text to see the cursor shrink</CursorText>
                    </p>
                    <p className="text-2xl">
                        Regular text doesn&apos;t affect the cursor, but{" "}
                        <CursorText className="text-[#B8FF00] font-bold">
                            this highlighted text
                        </CursorText>{" "}
                        does!
                    </p>
                </div>
            </div>
        </div>
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
