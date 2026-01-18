"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

// ============================================
// SCROLL PROGRESS - AURORA THEME
// ============================================

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            setScrollPercentage(Math.round(latest * 100));
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <>
            {/* Top Progress Bar - Aurora gradient */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B35] via-[#C41E3A] to-[#00C9A7] origin-left z-[100]"
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "0%",
                }}
            />

            {/* Circular Progress Indicator (bottom left) */}
            <motion.div
                className="fixed bottom-8 left-8 z-50 hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="relative w-14 h-14">
                    {/* Background circle */}
                    <svg className="w-full h-full -rotate-90">
                        <circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="rgba(0, 201, 167, 0.1)"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>

                    {/* Progress circle */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <defs>
                            <linearGradient id="aurora-progress" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#FF6B35" />
                                <stop offset="50%" stopColor="#C41E3A" />
                                <stop offset="100%" stopColor="#00C9A7" />
                            </linearGradient>
                        </defs>
                        <motion.circle
                            cx="28"
                            cy="28"
                            r="24"
                            stroke="url(#aurora-progress)"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={151}
                            strokeDashoffset={useTransform(scrollYProgress, [0, 1], [151, 0])}
                        />
                    </svg>

                    {/* Percentage text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-mono font-bold text-[#00C9A7]">
                            {scrollPercentage}%
                        </span>
                    </div>

                    {/* Glow effect */}
                    <motion.div
                        className="absolute inset-0 rounded-full blur-xl -z-10"
                        style={{
                            background: "radial-gradient(circle, rgba(0,201,167,0.2) 0%, transparent 70%)",
                            opacity: useTransform(scrollYProgress, [0, 1], [0, 0.8]),
                        }}
                    />
                </div>
            </motion.div>
        </>
    );
}

// ============================================
// MINIMAL TOP BAR ONLY
// ============================================

export function MinimalProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FF6B35] to-[#00C9A7] origin-left z-[100]"
            style={{ scaleX: scrollYProgress }}
        />
    );
}

// ============================================
// SIDE PROGRESS BAR
// ============================================

export function SideProgress() {
    const { scrollYProgress } = useScroll();
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        return scrollYProgress.on("change", (v) => setPercentage(Math.round(v * 100)));
    }, [scrollYProgress]);

    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            {/* Vertical line */}
            <div className="relative w-[2px] h-48 bg-[#00C9A7]/10 rounded-full overflow-hidden">
                <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#FF6B35] via-[#C41E3A] to-[#00C9A7]"
                    style={{
                        height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                    }}
                />
            </div>

            {/* Percentage indicator */}
            <motion.div
                className="absolute right-4 text-xs font-mono text-[#00C9A7]"
                style={{
                    top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                    y: "-50%",
                }}
            >
                {percentage}%
            </motion.div>
        </div>
    );
}

export default ScrollProgress;
