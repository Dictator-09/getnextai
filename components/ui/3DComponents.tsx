"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// ============================================
// 3D ANIMATED LOGO
// ============================================

export function Logo3D() {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotX = ((y - centerY) / centerY) * -10;
        const rotY = ((x - centerX) / centerX) * 10;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className="logo-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
        >
            <motion.div
                className="logo-3d"
                animate={{ rotateX, rotateY }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Logo Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00C9A7]/20 to-[#00C9A7]/5 blur-xl" />

                {/* Logo Icon */}
                <div className="relative flex items-center gap-2 p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-[#00C9A7]/30">
                    {/* Hexagon Icon */}
                    <div className="relative">
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            className="drop-shadow-[0_0_12px_rgba(0,201,167,0.8)]"
                        >
                            <path
                                d="M16 2L28 9V23L16 30L4 23V9L16 2Z"
                                fill="rgba(184, 255, 0, 0.2)"
                                stroke="#00C9A7"
                                strokeWidth="2"
                            />
                            <circle cx="16" cy="16" r="6" fill="rgba(184, 255, 0, 0.4)" />
                            <circle cx="16" cy="16" r="4" fill="#00C9A7" />
                        </svg>

                        {/* Floating particles */}
                        <motion.div
                            className="absolute -top-1 -right-1 w-2 h-2 bg-[#00C9A7] rounded-full"
                            animate={{ y: [-2, 2, -2], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Text */}
                    <div className="relative">
                        <span className="text-2xl font-bold text-[#00C9A7] drop-shadow-[0_0_8px_rgba(0,201,167,0.5)]">
                            GETNEXT
                        </span>
                        <span className="text-2xl font-bold text-white">AI</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

// ============================================
// 3D BUTTON WITH GLOW
// ============================================

export function Button3D({
    children,
    onClick,
    variant = "primary",
    className = "",
}: {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    className?: string;
}) {
    const [isHovered, setIsHovered] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setRotateX(((y - centerY) / centerY) * -5);
        setRotateY(((x - centerX) / centerX) * 5);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    const variants = {
        primary: {
            background: "linear-gradient(135deg, #00C9A7 0%, #8BC34A 100%)",
            glow: "0 0 40px rgba(184, 255, 0, 0.6), 0 0 80px rgba(184, 255, 0, 0.3)",
            border: "2px solid rgba(184, 255, 0, 0.5)",
            color: "#000",
        },
        secondary: {
            background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
            glow: "0 0 40px rgba(184, 255, 0, 0.3)",
            border: "2px solid rgba(184, 255, 0, 0.5)",
            color: "#00C9A7",
        },
    };

    return (
        <motion.button
            className={`button-3d relative overflow-hidden ${className}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ rotateX, rotateY }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                transformStyle: "preserve-3d",
                perspective: 1000,
                background: variants[variant].background,
                border: variants[variant].border,
                boxShadow: isHovered ? variants[variant].glow : "none",
                padding: "16px 32px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "16px",
                color: variants[variant].color,
                transition: "box-shadow 0.3s ease",
            }}
        >
            <span className="relative z-10 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-pulse">
                    <path d="M10 2L12 8L18 10L12 12L10 18L8 12L2 10L8 8L10 2Z" fill="currentColor" />
                </svg>
                {children}
            </span>
        </motion.button>
    );
}

// ============================================
// FLOATING ELEMENTS
// ============================================

export function FloatingElements() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-64 h-64 rounded-full blur-3xl"
                    style={{
                        background: "radial-gradient(circle, rgba(0,201,167,0.1) 0%, transparent 70%)",
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 20}%`,
                    }}
                    animate={{
                        x: [0, 50 - i * 10, 0],
                        y: [0, 30 + i * 5, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 2,
                    }}
                />
            ))}
        </div>
    );
}
