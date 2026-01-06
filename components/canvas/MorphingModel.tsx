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

    // Calculate vertical position: starts at center (0vh), moves up as you scroll
    const translateY = -(scrollProgress * 100); // 0vh to -100vh (moves upward)

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-screen pointer-events-none"
            style={{
                zIndex: 1,
                transform: `translateY(${translateY}vh)`,
                transition: 'transform 0.1s linear'
            }}
        >
            <Spline
                scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                onLoad={onLoad}
            />
        </div>
    );
}
