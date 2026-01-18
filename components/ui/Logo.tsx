"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
    className?: string;
    size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    // Size configurations
    const sizes = {
        sm: { height: 28, width: 140 },
        md: { height: 36, width: 180 },
        lg: { height: 48, width: 240 },
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Subtle parallax tilt
        const rotX = ((y - centerY) / centerY) * -4;
        const rotY = ((x - centerX) / centerX) * 4;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <Link href="/" className={`inline-block ${className}`}>
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
                    <Image
                        src="/logo.png"
                        alt="GetNextAI"
                        width={sizes[size].width}
                        height={sizes[size].height}
                        style={{ height: sizes[size].height, width: "auto" }}
                        priority
                    />
                </motion.div>
            </motion.div>
        </Link>
    );
}

// Icon-only version for favicon/small uses
export function LogoIcon({ size = 32 }: { size?: number }) {
    return (
        <Image
            src="/logo.png"
            alt="GetNextAI"
            width={size * 3}
            height={size}
            style={{ height: size, width: "auto" }}
        />
    );
}
