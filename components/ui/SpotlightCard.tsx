"use client";

import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

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
                "group relative border border-white/10 overflow-hidden rounded-xl bg-white/5",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
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
            <div className="relative h-full">{children}</div>
        </div>
    );
}
