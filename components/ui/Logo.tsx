"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    showGlow?: boolean;
}

export default function Logo({ className = "", size = "md", showGlow = true }: LogoProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Very large size configurations for maximum impact
    // Logo contains both icon and text
    const sizes = {
        sm: { height: 120 },  // Navbar scrolled
        md: { height: 140 },  // Navbar default
        lg: { height: 180 },  // Footer/hero
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

    const currentSize = sizes[size];

    return (
        <Link href="/" className={`inline-flex items-center ${className}`}>
            <motion.div
                className="relative flex items-center"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
            >
                {/* Glow effect behind logo */}
                {showGlow && (
                    <motion.div
                        className="absolute -inset-3 rounded-xl pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(0,201,167,0.2) 0%, rgba(255,107,53,0.12) 50%, transparent 70%)",
                            filter: "blur(14px)",
                        }}
                        animate={{
                            opacity: isHovered ? 0.9 : 0.5,
                            scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                )}

                <motion.div
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative z-10 flex items-center"
                >
                    <Image
                        src="/logo.png"
                        alt="GetNextAI - AI Solutions Agency"
                        width={currentSize.height * 4}
                        height={currentSize.height}
                        style={{
                            height: currentSize.height,
                            width: "auto",
                            objectFit: "contain",
                        }}
                        priority
                        quality={100}
                    />
                </motion.div>
            </motion.div>
        </Link>
    );
}

// Icon-only version for favicon/small uses
export function LogoIcon({ size = 40 }: { size?: number }) {
    return (
        <div className="relative inline-flex items-center justify-center">
            <Image
                src="/logo.png"
                alt="GetNextAI"
                width={size * 4}
                height={size}
                style={{
                    height: size,
                    width: "auto",
                    objectFit: "contain",
                }}
                quality={100}
            />
        </div>
    );
}
