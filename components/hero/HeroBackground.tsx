"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Grid configuration
    const gridConfig = useMemo(() => ({
        lineColor: "rgba(184, 255, 0, 0.03)",
        glowColor: "rgba(184, 255, 0, 0.08)",
        spacing: 60,
        lineWidth: 0.5,
    }), []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let time = 0;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };

        const drawGrid = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const { spacing, lineColor, glowColor, lineWidth } = gridConfig;

            ctx.clearRect(0, 0, width, height);

            // Draw vertical lines
            for (let x = 0; x < width; x += spacing) {
                const opacity = 0.03 + Math.sin(time * 0.001 + x * 0.01) * 0.02;
                ctx.strokeStyle = `rgba(184, 255, 0, ${opacity})`;
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Draw horizontal lines
            for (let y = 0; y < height; y += spacing) {
                const opacity = 0.03 + Math.sin(time * 0.001 + y * 0.01) * 0.02;
                ctx.strokeStyle = `rgba(184, 255, 0, ${opacity})`;
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Draw intersection glow points
            for (let x = 0; x < width; x += spacing) {
                for (let y = 0; y < height; y += spacing) {
                    const pulse = Math.sin(time * 0.002 + x * 0.005 + y * 0.005);
                    if (pulse > 0.7) {
                        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 4);
                        gradient.addColorStop(0, glowColor);
                        gradient.addColorStop(1, "transparent");
                        ctx.fillStyle = gradient;
                        ctx.beginPath();
                        ctx.arc(x, y, 4, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
            }

            time++;
            animationId = requestAnimationFrame(drawGrid);
        };

        resize();
        drawGrid();

        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, [gridConfig]);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Base gradient - near black */}
            <div className="absolute inset-0 bg-[#050508]" />

            {/* Procedural grid canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 opacity-100"
            />

            {/* Depth layers */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                {/* Far background glow */}
                <div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
                    style={{
                        background: "radial-gradient(circle, rgba(184, 255, 0, 0.05) 0%, transparent 70%)",
                        filter: "blur(80px)",
                    }}
                />

                {/* Secondary depth glow */}
                <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] opacity-30"
                    style={{
                        background: "radial-gradient(ellipse, rgba(184, 255, 0, 0.03) 0%, transparent 60%)",
                        filter: "blur(60px)",
                    }}
                />
            </motion.div>

            {/* Grain overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
