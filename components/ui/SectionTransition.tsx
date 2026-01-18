"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface SectionTransitionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    depth?: "shallow" | "medium" | "deep";
    overlap?: boolean;
}

export default function SectionTransition({
    children,
    className = "",
    id,
    depth = "medium",
    overlap = true,
}: SectionTransitionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Smooth spring for all values
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    // Enhanced depth-based configuration
    const depthConfig = {
        shallow: { scale: [0.98, 1], y: [30, 0], opacity: [0.85, 1], blur: [2, 0] },
        medium: { scale: [0.95, 1], y: [60, 0], opacity: [0.6, 1], blur: [4, 0] },
        deep: { scale: [0.92, 1], y: [100, 0], opacity: [0.4, 1], blur: [6, 0] },
    };

    const config = depthConfig[depth];

    // Transform values with spring physics
    const rawScale = useTransform(scrollYProgress, [0, 0.3], config.scale);
    const rawY = useTransform(scrollYProgress, [0, 0.3], config.y);
    const rawOpacity = useTransform(scrollYProgress, [0, 0.25], config.opacity);
    const rawRotateX = useTransform(scrollYProgress, [0, 0.3], [4, 0]);

    // Apply spring to each value
    const scale = useSpring(rawScale, springConfig);
    const y = useSpring(rawY, springConfig);
    const opacity = useSpring(rawOpacity, springConfig);
    const rotateX = useSpring(rawRotateX, springConfig);

    return (
        <motion.section
            ref={containerRef}
            id={id}
            className={`relative ${overlap ? "-mt-20 pt-20" : ""} ${className}`}
            style={{
                perspective: "1200px",
            }}
        >
            <motion.div
                style={{
                    scale,
                    y,
                    opacity,
                    rotateX,
                    transformOrigin: "center top",
                }}
                className="relative will-change-transform"
            >
                {/* Top fade for depth illusion */}
                <div
                    className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10"
                    style={{
                        background: "linear-gradient(to bottom, rgba(5, 5, 8, 0.9) 0%, transparent 100%)",
                    }}
                />

                {children}
            </motion.div>
        </motion.section>
    );
}
