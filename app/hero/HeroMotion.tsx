"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

// Custom easing matching specs
const heroEasing = [0.16, 1, 0.3, 1] as const;

// Debounced requestAnimationFrame wrapper
function useRAFThrottle(callback: (e: MouseEvent) => void) {
    const rafId = useRef<number | null>(null);

    return (e: MouseEvent) => {
        if (rafId.current !== null) return;

        rafId.current = requestAnimationFrame(() => {
            callback(e);
            rafId.current = null;
        });
    };
}

export default function HeroMotion() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    // Mouse position for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for parallax
    const springConfig = { damping: 50, stiffness: 100 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Scroll-based depth
    const { scrollY } = useScroll();
    const coreY = useTransform(scrollY, [0, 800], [0, 200]);
    const coreScale = useTransform(scrollY, [0, 400], [1, 0.8]);
    const coreOpacity = useTransform(scrollY, [0, 400], [1, 0]);

    // Autonomous rotation with RAF
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let animationId: number;
        let lastTime = 0;

        const animate = (time: number) => {
            if (lastTime) {
                const delta = (time - lastTime) / 1000;
                setRotation((prev) => prev + delta * 10); // 10 degrees per second
            }
            lastTime = time;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, []);

    // Debounced mouse move handler for parallax (≤8px)
    const handleMouseMove = useRAFThrottle((e: MouseEvent) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const x = ((clientX - centerX) / centerX) * 8;
        const y = ((clientY - centerY) / centerY) * 8;
        mouseX.set(x);
        mouseY.set(y);
    });

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [handleMouseMove]);

    if (!isMounted) return null;

    return (
        <motion.div
            ref={containerRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            style={{
                y: coreY,
                scale: coreScale,
                opacity: coreOpacity,
            }}
        >
            {/* Abstract AI Core - Layered geometric shapes */}
            <motion.div
                className="relative"
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
            >
                {/* Outer ring */}
                <motion.div
                    className="absolute -inset-32 md:-inset-48 rounded-full border border-[#B8FF00]/10"
                    style={{
                        rotate: rotation,
                    }}
                />

                {/* Middle ring with glow */}
                <motion.div
                    className="absolute -inset-20 md:-inset-32 rounded-full border border-[#B8FF00]/20"
                    style={{
                        rotate: -rotation * 0.7,
                        boxShadow: "0 0 60px rgba(184, 255, 0, 0.05)",
                    }}
                />

                {/* Inner ring */}
                <motion.div
                    className="absolute -inset-12 md:-inset-20 rounded-full border border-[#B8FF00]/30"
                    style={{
                        rotate: rotation * 0.5,
                    }}
                />

                {/* Core hexagon */}
                <motion.div
                    className="w-24 h-24 md:w-32 md:h-32 relative"
                    style={{
                        rotate: rotation * 0.3,
                    }}
                >
                    <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full"
                        fill="none"
                        stroke="currentColor"
                    >
                        {/* Outer hexagon */}
                        <polygon
                            points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
                            className="stroke-[#B8FF00]/40"
                            strokeWidth="0.5"
                        />
                        {/* Inner hexagon */}
                        <polygon
                            points="50,20 78,35 78,65 50,80 22,65 22,35"
                            className="stroke-[#B8FF00]/60"
                            strokeWidth="0.5"
                        />
                        {/* Core */}
                        <circle
                            cx="50"
                            cy="50"
                            r="8"
                            className="fill-[#B8FF00]/80"
                        />
                        {/* Pulse ring */}
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="12"
                            className="stroke-[#B8FF00]/40"
                            strokeWidth="0.5"
                            fill="none"
                            animate={{
                                r: [12, 20, 12],
                                opacity: [0.4, 0, 0.4],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: heroEasing,
                            }}
                        />
                    </svg>
                </motion.div>

                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#B8FF00]/50 rounded-full"
                        style={{
                            left: `${Math.cos((i * Math.PI * 2) / 6) * 150 + 50}%`,
                            top: `${Math.sin((i * Math.PI * 2) / 6) * 150 + 50}%`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3,
                            delay: i * 0.5,
                            repeat: Infinity,
                            ease: heroEasing,
                        }}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}
