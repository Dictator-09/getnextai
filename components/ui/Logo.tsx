"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    className?: string;
    showText?: boolean;
    size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Size configurations - icon height matches text height
    const sizes = {
        sm: { iconHeight: 20, iconWidth: 40, text: "text-lg" },
        md: { iconHeight: 24, iconWidth: 48, text: "text-xl" },
        lg: { iconHeight: 32, iconWidth: 64, text: "text-2xl" },
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle parallax tilt (no rotation)
        const rotX = ((y - centerY) / centerY) * -6;
        const rotY = ((x - centerX) / centerX) * 6;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <Link href="/" className={`flex items-center gap-2 ${className}`}>
            <motion.div
                className="relative flex items-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 800 }}
            >
                <motion.div
                    className="flex items-center gap-2"
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Infinity icon - inline with text */}
                    <Image
                        src="/logo.png"
                        alt="GetNextAI"
                        width={sizes[size].iconWidth}
                        height={sizes[size].iconHeight}
                        className=""
                        style={{ height: sizes[size].iconHeight, width: "auto" }}
                        priority
                    />

                    {showText && (
                        <div className="flex items-baseline">
                            <span className={`${sizes[size].text} font-bold bg-gradient-to-r from-[#FF6B35] via-[#C41E3A] to-[#00C9A7] bg-clip-text text-transparent tracking-tight`}>
                                GETNEXT
                            </span>
                            <span className={`${sizes[size].text} font-bold text-white tracking-tight`}>
                                AI
                            </span>
                        </div>
                    )}
                </motion.div>
            </motion.div>
        </Link>
    );
}

// Icon-only version
export function LogoIcon({ size = 24 }: { size?: number }) {
    return (
        <Image
            src="/logo.png"
            alt="GetNextAI"
            width={size * 2}
            height={size}
            className=""
            style={{ height: size, width: "auto" }}
        />
    );
}
