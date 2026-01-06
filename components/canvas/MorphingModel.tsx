"use client";

import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function MorphingModel() {
    const splineRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate scroll progress (0 to 1)
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = Math.min(scrolled / scrollHeight, 1);

            setScrollOffset(progress);

            if (containerRef.current) {
                // Move the Spline model down as user scrolls
                const translateY = progress * 150; // Move down 150vh total
                containerRef.current.style.transform = `translateY(${translateY}vh) scale(${1 - progress * 0.2})`;
            }
        };

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const onLoad = (spline: any) => {
        splineRef.current = spline;
        console.log('Spline scene loaded');
    };

    return (
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full h-screen pointer-events-none transition-transform duration-100 ease-linear"
            style={{
                zIndex: 1,
                willChange: 'transform'
            }}
        >
            <Spline
                scene="https://prod.spline.design/orb-wmw23cg9rHJjJiXzQ0GbMNE0/scene.splinecode"
                onLoad={onLoad}
                style={{
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none'
                }}
            />
        </div>
    );
}
