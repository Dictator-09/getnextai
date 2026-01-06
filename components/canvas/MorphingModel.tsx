"use client";

import { useRef, useEffect, useCallback } from "react";
import Spline from "@splinetool/react-spline";

export default function MorphingModel() {
    const splineRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollProgressRef = useRef(0);
    const currentProgressRef = useRef(0);
    const rafIdRef = useRef<number | null>(null);

    // Smooth lerp function
    const lerp = (start: number, end: number, factor: number) => {
        return start + (end - start) * factor;
    };

    // Animation loop using requestAnimationFrame
    const animate = useCallback(() => {
        // Smooth interpolation (higher = faster, 0.08-0.12 feels smooth)
        const smoothFactor = 0.1;
        currentProgressRef.current = lerp(
            currentProgressRef.current,
            scrollProgressRef.current,
            smoothFactor
        );

        // Apply transform directly to DOM (no React re-render)
        if (containerRef.current) {
            const translateY = currentProgressRef.current * -100;
            containerRef.current.style.transform = `translateY(${translateY}vh)`;
        }

        // Update Spline rotation
        if (splineRef.current) {
            const spline = splineRef.current;
            const rotation = currentProgressRef.current * Math.PI * 4;

            try {
                if (spline.findObjectByName) {
                    const wheelObjects = ['Sphere', 'Circle', 'Wheel', 'Torus', 'Group', 'Icosahedron'];
                    wheelObjects.forEach(name => {
                        const obj = spline.findObjectByName(name);
                        if (obj && obj.rotation) {
                            obj.rotation.y = rotation;
                        }
                    });
                }

                if (spline.scene && spline.scene.rotation) {
                    spline.scene.rotation.y = rotation;
                }
            } catch {
                // Silent fail
            }
        }

        rafIdRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            scrollProgressRef.current = Math.min(scrolled / scrollHeight, 1);
        };

        // Start animation loop
        rafIdRef.current = requestAnimationFrame(animate);

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafIdRef.current) {
                cancelAnimationFrame(rafIdRef.current);
            }
        };
    }, [animate]);

    const onLoad = (spline: any) => {
        splineRef.current = spline;
    };

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-screen pointer-events-none"
            style={{ zIndex: 1 }}
        >
            <Spline
                scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                onLoad={onLoad}
            />
        </div>
    );
}
