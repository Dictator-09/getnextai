"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
}

export function TextReveal({ text, className }: TextRevealProps) {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0.1, 0.5], [20, 0]);

    return (
        <motion.div
            ref={targetRef}
            style={{ opacity, y }}
            className={cn(
                "relative mx-auto max-w-5xl px-4 text-center text-4xl font-bold leading-tight tracking-tight text-white/90 md:text-5xl lg:text-7xl",
                className
            )}
        >
            {text}
        </motion.div>
    );
}
