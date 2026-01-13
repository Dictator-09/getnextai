"use client";

import { useEffect, useRef } from "react";

export default function AnimatedOrb() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Animation variables
        let time = 0;
        const centerX = () => canvas.width / 2;
        const centerY = () => canvas.height / 2;

        // Morphing blob parameters
        const numPoints = 8;
        const baseRadius = Math.min(canvas.width, canvas.height) * 0.25;

        const animate = () => {
            time += 0.008;

            // Clear with subtle fade for trail effect
            ctx.fillStyle = "rgba(3, 7, 18, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cx = centerX();
            const cy = centerY();
            const radius = Math.min(canvas.width, canvas.height) * 0.25;

            // Draw multiple morphing layers for depth
            for (let layer = 3; layer >= 0; layer--) {
                const layerOffset = layer * 0.3;
                const layerScale = 1 - layer * 0.15;
                const layerAlpha = 0.4 - layer * 0.08;

                ctx.beginPath();

                for (let i = 0; i <= numPoints * 10; i++) {
                    const angle = (i / (numPoints * 10)) * Math.PI * 2;

                    // Create organic morphing effect with multiple sine waves
                    const noise1 = Math.sin(angle * 3 + time * 1.2 + layerOffset) * 0.15;
                    const noise2 = Math.sin(angle * 5 - time * 0.8 + layerOffset) * 0.1;
                    const noise3 = Math.cos(angle * 2 + time * 0.5 + layerOffset) * 0.12;
                    const noise4 = Math.sin(angle * 7 + time * 1.5) * 0.05;

                    const morphFactor = 1 + noise1 + noise2 + noise3 + noise4;
                    const r = radius * layerScale * morphFactor;

                    const x = cx + Math.cos(angle) * r;
                    const y = cy + Math.sin(angle) * r;

                    if (i === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }

                ctx.closePath();

                // Create gradient for each layer
                const gradient = ctx.createRadialGradient(
                    cx - radius * 0.3,
                    cy - radius * 0.3,
                    0,
                    cx,
                    cy,
                    radius * layerScale * 1.5
                );

                // Animated color cycling
                const hue1 = (180 + Math.sin(time * 0.5) * 30 + layer * 20) % 360; // Cyan range
                const hue2 = (270 + Math.cos(time * 0.3) * 40 + layer * 15) % 360; // Purple range
                const hue3 = (320 + Math.sin(time * 0.7) * 30) % 360; // Pink range

                gradient.addColorStop(0, `hsla(${hue1}, 80%, 60%, ${layerAlpha + 0.2})`);
                gradient.addColorStop(0.4, `hsla(${hue2}, 70%, 50%, ${layerAlpha})`);
                gradient.addColorStop(0.7, `hsla(${hue3}, 60%, 40%, ${layerAlpha * 0.6})`);
                gradient.addColorStop(1, `hsla(${hue2}, 50%, 20%, 0)`);

                ctx.fillStyle = gradient;
                ctx.fill();

                // Add glow effect to outer layer
                if (layer === 0) {
                    ctx.shadowColor = `hsla(${hue1}, 100%, 60%, 0.5)`;
                    ctx.shadowBlur = 60;
                    ctx.fill();
                    ctx.shadowBlur = 0;
                }
            }

            // Add floating particles around the orb
            const particleCount = 30;
            for (let i = 0; i < particleCount; i++) {
                const particleAngle = (i / particleCount) * Math.PI * 2 + time * 0.3;
                const particleRadius = radius * (1.3 + Math.sin(time * 2 + i) * 0.3);
                const px = cx + Math.cos(particleAngle) * particleRadius;
                const py = cy + Math.sin(particleAngle) * particleRadius;
                const particleSize = 2 + Math.sin(time * 3 + i * 0.5) * 1.5;

                const particleGradient = ctx.createRadialGradient(px, py, 0, px, py, particleSize * 2);
                const particleHue = (200 + i * 5) % 360;
                particleGradient.addColorStop(0, `hsla(${particleHue}, 100%, 70%, 0.8)`);
                particleGradient.addColorStop(1, `hsla(${particleHue}, 100%, 50%, 0)`);

                ctx.beginPath();
                ctx.arc(px, py, particleSize, 0, Math.PI * 2);
                ctx.fillStyle = particleGradient;
                ctx.fill();
            }

            // Add inner glow/highlight
            const innerGradient = ctx.createRadialGradient(
                cx - radius * 0.2,
                cy - radius * 0.2,
                0,
                cx,
                cy,
                radius * 0.6
            );
            innerGradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
            innerGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.05)");
            innerGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.6, 0, Math.PI * 2);
            ctx.fillStyle = innerGradient;
            ctx.fill();

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-[1]"
            style={{ background: "transparent" }}
        />
    );
}
