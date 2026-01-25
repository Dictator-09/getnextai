"use client";

import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";
import { styles } from "./styles/SpotlightCard.styles";

export default function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(0, 201, 167, 0.15)",
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                styles.container,
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Noise texture overlay */}
            <div
                className={styles.noise}
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Spotlight gradient */}
            <motion.div
                className={styles.spotlight}
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            ${spotlightColor},
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Inner border glow */}
            <div className={styles.innerBorder} />

            <div className={styles.content}>{children}</div>
        </div>
    );
}
