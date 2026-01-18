"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

    // Depth-based configuration
    const depthConfig = {
        shallow: { scale: [0.98, 1], y: [30, 0], opacity: [0.8, 1] },
        medium: { scale: [0.95, 1], y: [60, 0], opacity: [0.6, 1] },
        deep: { scale: [0.9, 1], y: [100, 0], opacity: [0.4, 1] },
    };

    const config = depthConfig[depth];

    // Transform values based on scroll
    const scale = useTransform(scrollYProgress, [0, 0.3], config.scale);
    const y = useTransform(scrollYProgress, [0, 0.3], config.y);
    const opacity = useTransform(scrollYProgress, [0, 0.25], config.opacity);

    // Perspective tilt for depth effect
    const rotateX = useTransform(scrollYProgress, [0, 0.3], [3, 0]);

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
                className="relative"
            >
                {/* Edge blur effect for depth */}
                <div
                    className="absolute inset-x-0 top-0 h-32 pointer-events-none z-10"
                    style={{
                        background: "linear-gradient(to bottom, rgba(5, 5, 8, 1) 0%, transparent 100%)",
                    }}
                />

                {children}
            </motion.div>
        </motion.section>
    );
}
