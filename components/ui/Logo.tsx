"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Infinity } from "lucide-react"; // Changed from Cpu to Infinity to match description

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    showGlow?: boolean;
}

import { styles } from "./styles/Logo.styles";

export default function Logo({ className = "", size = "md", showGlow = true }: LogoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Text sizes
    const textSizes = {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-4xl"
    };

    // Icon sizes
    const iconSizes = {
        sm: "w-6 h-6",
        md: "w-8 h-8",
        lg: "w-12 h-12"
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotX = ((y - centerY) / centerY) * -3;
        const rotY = ((x - centerX) / centerX) * 3;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setIsHovered(false);
    };

    return (
        <Link href="/" className={`${styles.link} ${className}`}>
            <motion.div
                className={styles.container}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
            >
                {/* Glow effect behind logo - Reduced on mobile */}
                {showGlow && (
                    <motion.div
                        className={styles.glow}
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(255,107,53,0.15) 0%, rgba(0,201,167,0.08) 50%, transparent 70%)", // Updated glow colors
                            filter: "blur(8px) md:blur(14px)",
                        }}
                        animate={{
                            opacity: isHovered ? 0.9 : 0.3,
                            scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                )}

                <motion.div
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className={styles.content}
                >
                    {/* Icon */}
                    <div className={`${styles.icon.wrapper} ${iconSizes[size]}`}>
                        {/* Applying gradient to SVG requires a mask or different technique, usually text-transparent bg-clip-text works if it's a font icon, but for SVG it's tricky.
                            However, we can use <stop> elements if we had full control, but for Lucide we can try specific classes or just a solid color if gradient is hard.
                            Wait, simple 'text-transparent bg-clip-text' doesn't work on SVGs strokes easily.
                            For now, let's use the Primary brand color for the icon, or try to hack the gradient.
                            Actually, 'stroke="url(#gradient)"' is needed for SVG gradients.
                            Let's insert a simpler svg definition:
                         */}
                        <svg width="0" height="0">
                            <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop stopColor="#FF6B35" offset="0%" />
                                <stop stopColor="#00C9A7" offset="100%" />
                            </linearGradient>
                        </svg>
                        <Infinity className="w-full h-full" style={{ stroke: "url(#logo-gradient)" }} strokeWidth={2.5} />
                    </div>

                    {/* Text */}
                    <span className={`${styles.logoText} ${textSizes[size]}`}>
                        GetNext<span className={styles.highlight}>AI</span>
                    </span>
                </motion.div>
            </motion.div>
        </Link>
    );
}

// Icon-only version for favicon/small uses
export function LogoIcon({ size = 40 }: { size?: number }) {
    return (
        <div className={styles.icon.wrapper} style={{ width: size, height: size }}>
            <svg width="0" height="0">
                <linearGradient id="logo-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop stopColor="#FF6B35" offset="0%" />
                    <stop stopColor="#00C9A7" offset="100%" />
                </linearGradient>
            </svg>
            <Infinity className="w-full h-full" style={{ stroke: "url(#logo-icon-gradient)" }} strokeWidth={2.5} />
        </div>
    );
}
