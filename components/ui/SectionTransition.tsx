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

    // Refined depth-based configuration for smoother transitions
    const depthConfig = {
        shallow: { scale: [0.99, 1], y: [20, 0], opacity: [0.9, 1] },
        medium: { scale: [0.97, 1], y: [40, 0], opacity: [0.7, 1] },
        deep: { scale: [0.95, 1], y: [60, 0], opacity: [0.5, 1] },
    };

    const config = depthConfig[depth];

    // Smoother transform with earlier completion point
    const scale = useTransform(scrollYProgress, [0, 0.25], config.scale);
    const y = useTransform(scrollYProgress, [0, 0.25], config.y);
    const opacity = useTransform(scrollYProgress, [0, 0.2], config.opacity);

    // Subtle perspective tilt
    const rotateX = useTransform(scrollYProgress, [0, 0.25], [2, 0]);

    return (
        <motion.section
            ref={containerRef}
            id={id}
            className={`relative ${overlap ? "-mt-16 pt-16" : ""} ${className}`}
            style={{
                perspective: "1000px",
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
                {/* Softer edge fade for depth */}
                <div
                    className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
                    style={{
                        background: "linear-gradient(to bottom, rgba(3, 3, 5, 0.8) 0%, transparent 100%)",
                    }}
                />

                {children}
            </motion.div>
        </motion.section>
    );
}
