"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroMotion() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll-based depth
    const { scrollY } = useScroll();
    const coreY = useTransform(scrollY, [0, 800], [0, 200]);
    const coreScale = useTransform(scrollY, [0, 400], [1, 0.8]);
    const coreOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    // Ensure client side mounting for hydration safety
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    if (!isMounted) return null;

    return (
        <motion.div
            ref={containerRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            style={{
                y: coreY,
                scale: coreScale,
                opacity: coreOpacity,
            }}
        >
            {/* Abstract AI Core - Layered geometric shapes */}
            <div className="relative">
                {/* Outer ring */}
                <motion.div
                    className="absolute -inset-32 md:-inset-48 rounded-full border border-[#B8FF00]/10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle ring with glow */}
                <motion.div
                    className="absolute -inset-20 md:-inset-32 rounded-full border border-[#B8FF00]/20"
                    style={{
                        boxShadow: "0 0 60px rgba(184, 255, 0, 0.05)",
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner ring */}
                <motion.div
                    className="absolute -inset-12 md:-inset-20 rounded-full border border-[#B8FF00]/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Core hexagon */}
                <motion.div
                    className="w-24 h-24 md:w-32 md:h-32 relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        fill="none"
                        stroke="currentColor"
                    >
                        {/* Outer hexagon */}
                        <polygon
                            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                            className="stroke-[#B8FF00]/40"
                            strokeWidth="0.5"
                        />
                        {/* Inner hexagon */}
                        <polygon
                            points="50,20 78,35 78,65 50,80 22,65 22,35"
                            className="stroke-[#B8FF00]/60"
                            strokeWidth="0.5"
                        />
                        {/* Core */}
                        <circle
                            cx="50"
                            cy="50"
                            r="8"
                            className="fill-[#B8FF00]/80"
                        />
                        {/* Pulse ring */}
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="12"
                            className="stroke-[#B8FF00]/40"
                            strokeWidth="0.5"
                            fill="none"
                            animate={{
                                r: [12, 20, 12],
                                opacity: [0.4, 0, 0.4],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </svg>
                </motion.div>

                {/* Floating particles - Simplified */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#B8FF00]/50 rounded-full"
                        style={{
                            left: `${Math.cos((i * Math.PI * 2) / 6) * 150 + 50}%`,
                            top: `${Math.sin((i * Math.PI * 2) / 6) * 150 + 50}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
