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

    const sizes = {
        sm: { icon: 32, text: "text-lg" },
        md: { icon: 40, text: "text-xl" },
        lg: { icon: 56, text: "text-2xl" },
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Parallax tilt effect (no rotation, just subtle 3D tilt)
        const rotX = ((y - centerY) / centerY) * -8;
        const rotY = ((x - centerX) / centerX) * 8;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <Link href="/" className={`flex items-center gap-3 ${className}`}>
            <motion.div
                className="relative"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ perspective: 800 }}
            >
                <motion.div
                    animate={{ rotateX, rotateY }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Glow effect behind logo */}
                    <div
                        className="absolute inset-0 blur-xl opacity-50"
                        style={{
                            background: "radial-gradient(circle, rgba(0,201,167,0.4) 0%, rgba(255,107,53,0.2) 50%, transparent 70%)",
                            transform: "scale(1.5)",
                        }}
                    />

                    {/* Logo image */}
                    <Image
                        src="/logo.png"
                        alt="GetNextAI Logo"
                        width={sizes[size].icon}
                        height={sizes[size].icon}
                        className="relative z-10 drop-shadow-[0_0_8px_rgba(0,201,167,0.6)]"
                        priority
                    />
                </motion.div>
            </motion.div>

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
        </Link>
    );
}

// Icon-only version for favicon/small uses
export function LogoIcon({ size = 40 }: { size?: number }) {
    return (
        <Image
            src="/logo.png"
            alt="GetNextAI"
            width={size}
            height={size}
            className="drop-shadow-[0_0_8px_rgba(0,201,167,0.6)]"
        />
    );
}
