"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, Variants, useScroll, useTransform } from "framer-motion";

// ============================================
// SECTION TRANSITION - AWWWARDS LEVEL
// ============================================

interface SectionTransitionProps {
    children: ReactNode;
    depth?: "shallow" | "medium" | "deep";
    overlap?: boolean;
    delay?: number;
    className?: string;
}

export default function SectionTransition({
    children,
    depth = "medium",
    overlap = false,
    delay = 0,
    className = "",
}: SectionTransitionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: overlap ? "-100px" : "0px",
    });

    const variants: Record<string, Variants> = {
        shallow: {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    delay,
                    ease: [0.43, 0.13, 0.23, 0.96],
                },
            },
        },
        medium: {
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.43, 0.13, 0.23, 0.96],
                },
            },
        },
        deep: {
            hidden: { opacity: 0, y: 80, scale: 0.9 },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: 1,
                    delay,
                    ease: [0.43, 0.13, 0.23, 0.96],
                    staggerChildren: 0.1,
                },
            },
        },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants[depth]}
            className={className}
        >
            {children}
        </motion.section>
    );
}

// ============================================
// STAGGER CHILDREN WRAPPER
// ============================================

export function StaggerChildren({ children, className = "" }: { children: ReactNode; className?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={className}
        >
            {Array.isArray(children)
                ? children.map((child, i) => (
                    <motion.div key={i} variants={itemVariants}>
                        {child}
                    </motion.div>
                ))
                : children}
        </motion.div>
    );
}

// ============================================
// PARALLAX SECTION
// ============================================

export function ParallaxSection({
    children,
    speed = 0.5,
    className = "",
}: {
    children: ReactNode;
    speed?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y }}>{children}</motion.div>
        </div>
    );
}

// ============================================
// REVEAL ON SCROLL
// ============================================

export function RevealOnScroll({
    children,
    direction = "up",
    delay = 0,
    className = "",
}: {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directionVariants = {
        up: { y: 60 },
        down: { y: -60 },
        left: { x: 60 },
        right: { x: -60 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directionVariants[direction],
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        transition: {
                            duration: 0.8,
                            delay,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        },
                    }
                    : {}
            }
            className={className}
        >
            {children}
        </motion.div>
    );
}

// ============================================
// SCALE ON SCROLL
// ============================================

export function ScaleOnScroll({
    children,
    scale = 0.8,
    className = "",
}: {
    children: ReactNode;
    scale?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        transition: {
                            duration: 0.6,
                            ease: [0.43, 0.13, 0.23, 0.96],
                        },
                    }
                    : {}
            }
            className={className}
        >
            {children}
        </motion.div>
    );
}
