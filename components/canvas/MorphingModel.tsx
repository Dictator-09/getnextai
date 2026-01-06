"use client";

import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function MorphingModel() {
    const splineRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = Math.min(scrolled / scrollHeight, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onLoad = (spline: any) => {
        splineRef.current = spline;
    };

    // Update Spline rotation based on scroll
    useEffect(() => {
        if (splineRef.current) {
            const spline = splineRef.current;

            // Rotation based on scroll progress (4 full rotations)
            const rotation = scrollProgress * Math.PI * 4;

            try {
                // Try to rotate objects in the scene
                if (spline.findObjectByName) {
                    const wheelObjects = ['Sphere', 'Circle', 'Wheel', 'Torus', 'Group', 'Icosahedron'];

                    wheelObjects.forEach(name => {
                        const obj = spline.findObjectByName(name);
                        if (obj && obj.rotation) {
                            obj.rotation.y = rotation;
                        }
                    });
                }

                // Fallback: rotate entire scene
                if (spline.scene && spline.scene.rotation) {
                    spline.scene.rotation.y = rotation;
                }
            } catch (error) {
                // Silent fail - Spline API may vary
            }
        }
    }, [scrollProgress]);

    // Calculate vertical position: starts at center (0vh), moves to top (-100vh)
    const translateY = scrollProgress * -100;

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-screen pointer-events-none"
            style={{
                zIndex: 1,
                transform: `translateY(${translateY}vh)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            <Spline
                scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                onLoad={onLoad}
            />
        </div>
    );
}
