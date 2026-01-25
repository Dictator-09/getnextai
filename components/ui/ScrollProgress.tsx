"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "./styles/ScrollProgress.styles";

// ============================================
// SCROLL PROGRESS - AURORA THEME
// ============================================

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            {/* Top Progress Bar - Aurora gradient */}
            <motion.div
                className={styles.progress.bar}
                style={{
                    scaleX: scrollYProgress,
                    transformOrigin: "0%",
                }}
            />

            {/* Circular Progress Indicator (bottom left) */}
            <motion.div
                className={styles.progress.indicator.wrapper}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
            >
                <div className={styles.progress.indicator.container}>
                    {/* Background circle */}
                    <svg className={styles.progress.indicator.bgCircle}>
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
                    <svg className={styles.progress.indicator.progressSvg}>
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
                            strokeDasharray="151"
                            strokeDashoffset={useTransform(scrollYProgress, [0, 1], [151, 0])}
                        />
                    </svg>

                    {/* Glow effect */}
                    <motion.div
                        className={styles.progress.indicator.glow}
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
            className={styles.minimal.bar}
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
        <div className={styles.side.wrapper}>
            {/* Vertical line */}
            <div className={styles.side.line.container}>
                <motion.div
                    className={styles.side.line.fill}
                    style={{
                        height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                    }}
                />
            </div>

            {/* Percentage indicator */}
            <motion.div
                className={styles.side.text}
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
