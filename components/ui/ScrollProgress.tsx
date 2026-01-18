"use client";

import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [percentage, setPercentage] = useState(0);

    // Add spring physics for smooth animation
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Update percentage
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => {
            setPercentage(Math.round(v * 100));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <>
            {/* Top Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-[#B8FF00] transform origin-left z-[9999]"
                style={{ scaleX }}
            />

            {/* Circular Progress - bottom left */}
            <motion.div
                className="fixed bottom-8 left-8 w-14 h-14 z-50 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke="rgba(184, 255, 0, 0.1)"
                        strokeWidth="2"
                        fill="none"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                        cx="28"
                        cy="28"
                        r="24"
                        stroke="#B8FF00"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        style={{
                            pathLength: scrollYProgress,
                        }}
                    />
                </svg>

                {/* Percentage Text */}
                <div className="absolute inset-0 flex items-center justify-center text-[#B8FF00] text-xs font-mono font-bold">
                    {percentage}%
                </div>
            </motion.div>
        </>
    );
}

// ============================================
// ALTERNATIVE: Minimal Progress Bar Only
// ============================================

export function MinimalScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-[#B8FF00] transform origin-left z-[9999]"
            style={{ scaleX }}
        />
    );
}
