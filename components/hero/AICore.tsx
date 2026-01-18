"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ShardProps {
    className?: string;
    delay?: number;
    duration?: number;
    style?: React.CSSProperties;
    depth?: "foreground" | "mid" | "background";
}

function GeometricShard({ className = "", delay = 0, duration = 12, style, depth = "mid" }: ShardProps) {
    const depthConfig = {
        foreground: { blur: 0, opacity: 0.8, scale: 1 },
        mid: { blur: 1, opacity: 0.6, scale: 0.85 },
        background: { blur: 3, opacity: 0.3, scale: 0.6 },
    };

    const config = depthConfig[depth];

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                opacity: config.opacity,
                scale: config.scale,
                rotate: 360,
            }}
            transition={{
                opacity: { duration: 0.8, delay },
                scale: { duration: 0.8, delay },
                rotate: { duration, repeat: Infinity, ease: "linear" },
            }}
            className={`absolute ${className}`}
            style={{
                filter: `blur(${config.blur}px)`,
                ...style,
            }}
        />
    );
}

export default function AICore() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse position for parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Transform for different depth layers (max 8px movement)
    const foregroundX = useTransform(smoothX, [-1, 1], [-8, 8]);
    const foregroundY = useTransform(smoothY, [-1, 1], [-8, 8]);
    const midX = useTransform(smoothX, [-1, 1], [-5, 5]);
    const midY = useTransform(smoothY, [-1, 1], [-5, 5]);
    const backgroundX = useTransform(smoothX, [-1, 1], [-2, 2]);
    const backgroundY = useTransform(smoothY, [-1, 1], [-2, 2]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Normalize to -1 to 1
            mouseX.set((clientX / innerWidth - 0.5) * 2);
            mouseY.set((clientY / innerHeight - 0.5) * 2);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [isMobile, mouseX, mouseY]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full flex items-center justify-center"
        >
            {/* Background layer - slowest */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={!isMobile ? { x: backgroundX, y: backgroundY } : undefined}
            >
                {/* Large blurred plane */}
                <GeometricShard
                    depth="background"
                    duration={20}
                    delay={0.2}
                    className="w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
                    style={{
                        background: "linear-gradient(135deg, rgba(184, 255, 0, 0.08) 0%, transparent 50%)",
                        clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                    }}
                />

                {/* Large rotating ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-[#B8FF00]/5"
                />
            </motion.div>

            {/* Mid layer */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={!isMobile ? { x: midX, y: midY } : undefined}
            >
                {/* Primary core element with glow */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="relative"
                >
                    {/* Inner glow */}
                    <div
                        className="absolute inset-0 rounded-full blur-xl"
                        style={{
                            background: "radial-gradient(circle, rgba(184, 255, 0, 0.15) 0%, transparent 70%)",
                            width: "200px",
                            height: "200px",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    />

                    {/* Geometric core */}
                    <div
                        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                        style={{
                            background: "linear-gradient(135deg, rgba(184, 255, 0, 0.2) 0%, rgba(184, 255, 0, 0.05) 100%)",
                            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
                            boxShadow: "inset 0 0 40px rgba(184, 255, 0, 0.1)",
                        }}
                    />
                </motion.div>

                {/* Orbiting shards */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
                >
                    <GeometricShard
                        depth="mid"
                        duration={0}
                        delay={0.4}
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-12 md:w-8 md:h-16"
                        style={{
                            background: "linear-gradient(180deg, rgba(184, 255, 0, 0.4) 0%, transparent 100%)",
                            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        }}
                    />
                    <GeometricShard
                        depth="mid"
                        duration={0}
                        delay={0.5}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-12 md:w-8 md:h-16 rotate-180"
                        style={{
                            background: "linear-gradient(180deg, rgba(184, 255, 0, 0.3) 0%, transparent 100%)",
                            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        }}
                    />
                    <GeometricShard
                        depth="mid"
                        duration={0}
                        delay={0.6}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-6 md:w-16 md:h-8"
                        style={{
                            background: "linear-gradient(90deg, rgba(184, 255, 0, 0.35) 0%, transparent 100%)",
                            clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
                        }}
                    />
                    <GeometricShard
                        depth="mid"
                        duration={0}
                        delay={0.7}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-6 md:w-16 md:h-8 rotate-180"
                        style={{
                            background: "linear-gradient(90deg, rgba(184, 255, 0, 0.25) 0%, transparent 100%)",
                            clipPath: "polygon(0% 50%, 100% 0%, 100% 100%)",
                        }}
                    />
                </motion.div>

                {/* Rotating ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-[#B8FF00]/10"
                    style={{
                        boxShadow: "0 0 20px rgba(184, 255, 0, 0.05)",
                    }}
                />
            </motion.div>

            {/* Foreground layer - fastest parallax */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={!isMobile ? { x: foregroundX, y: foregroundY } : undefined}
            >
                {/* Sharp accent shards */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px]"
                >
                    <GeometricShard
                        depth="foreground"
                        duration={0}
                        delay={0.3}
                        className="absolute top-4 right-4 w-3 h-8 md:w-4 md:h-12"
                        style={{
                            background: "linear-gradient(180deg, #B8FF00 0%, transparent 100%)",
                            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                        }}
                    />
                    <GeometricShard
                        depth="foreground"
                        duration={0}
                        delay={0.35}
                        className="absolute bottom-4 left-4 w-3 h-8 md:w-4 md:h-12"
                        style={{
                            background: "linear-gradient(0deg, #B8FF00 0%, transparent 100%)",
                            clipPath: "polygon(50% 100%, 100% 0%, 0% 0%)",
                        }}
                    />
                </motion.div>

                {/* Floating diamond accents */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
                >
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#B8FF00] rotate-45"
                        style={{ boxShadow: "0 0 10px #B8FF00" }}
                    />
                    <div
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 bg-[#B8FF00]/60 rotate-45"
                        style={{ boxShadow: "0 0 8px rgba(184, 255, 0, 0.6)" }}
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}
