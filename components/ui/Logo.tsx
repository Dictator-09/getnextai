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

    // Smart size configurations - optimized for the horizontal logo aspect ratio
    // The logo is approximately 3:1 aspect ratio (icon + text)
    const sizes = {
        sm: { height: 36, containerWidth: 160 },  // Navbar scrolled
        md: { height: 44, containerWidth: 200 },  // Navbar default
        lg: { height: 56, containerWidth: 260 },  // Footer/hero
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle parallax tilt
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
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 1000 }}
            >
                {/* Glow effect behind logo */}
                {showGlow && (
                    <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse at center, rgba(0,201,167,0.2) 0%, rgba(255,107,53,0.1) 60%, transparent 80%)",
                            filter: "blur(16px)",
                            transform: "scale(1.4)",
                        }}
                        animate={{
                            opacity: isHovered ? 0.9 : 0.5,
                            scale: isHovered ? 1.6 : 1.4,
                        }}
                        transition={{ duration: 0.3 }}
                    />
                )}

                <motion.div
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                    className="relative z-10"
                >
                    <Image
                        src="/logo.png"
                        alt="GetNextAI - AI Solutions Agency"
                        width={currentSize.containerWidth}
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
