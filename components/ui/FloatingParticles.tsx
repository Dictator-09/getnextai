"use client";

import { useEffect, useRef, useState } from "react";

export default function FloatingParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLowPowerMode, setIsLowPowerMode] = useState(false);
    const animationRef = useRef<number | null>(null);
    const isVisibleRef = useRef(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Check device capabilities
        const isMobile = window.innerWidth < 768;
        const isLowEnd = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency <= 4;

        // Disable on very low-end devices
        if (isMobile && isLowEnd) {
            setIsLowPowerMode(true);
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
        }> = [];

        // Fewer particles on mobile for battery efficiency
        const particleCount = isMobile ? 12 : 35;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * (isMobile ? 1.2 : 1.8) + 0.3,
                speedX: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
                speedY: (Math.random() - 0.5) * (isMobile ? 0.15 : 0.3),
                opacity: Math.random() * 0.4 + 0.1
            });
        }

        // Throttle animation on mobile (30fps instead of 60fps)
        let lastTime = 0;
        const frameInterval = isMobile ? 33 : 16; // ~30fps on mobile, ~60fps on desktop

        function animate(currentTime: number) {
            if (!ctx || !canvas || !isVisibleRef.current) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            // Throttle frame rate
            if (currentTime - lastTime < frameInterval) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }
            lastTime = currentTime;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();

                particle.x += particle.speedX;
                particle.y += particle.speedY;

                if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
            });

            animationRef.current = requestAnimationFrame(animate);
        }

        animationRef.current = requestAnimationFrame(animate);

        // Pause animation when tab is not visible (battery saver)
        const handleVisibilityChange = () => {
            isVisibleRef.current = document.visibilityState === "visible";
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Pause when scrolled far down (performance optimization)
        const handleScroll = () => {
            isVisibleRef.current = window.scrollY < window.innerHeight * 2;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize, { passive: true });

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Don't render on low power devices
    if (isLowPowerMode) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-20 sm:opacity-30"
            aria-hidden="true"
        />
    );
}
