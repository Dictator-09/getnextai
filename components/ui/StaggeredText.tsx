"use client";

import { motion } from "framer-motion";

export function StaggeredText({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
    const characters = text.split("");

    return (
        <span className={`inline-block whitespace-nowrap overflow-hidden ${className}`}>
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ y: "100%", rotateX: -90, opacity: 0 }}
                    animate={{ y: 0, rotateX: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.2, 0.65, 0.3, 0.9],
                        delay: delay + index * 0.03, // Stagger effect
                    }}
                    className="inline-block origin-bottom"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
