"use client";

import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function MorphingModel() {
    const splineRef = useRef<any>(null);
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

    return (
        <div
            className="fixed top-0 left-0 w-full h-screen pointer-events-none"
            style={{
                zIndex: 1,
                filter: `hue-rotate(${scrollProgress * 180}deg)` // Color shift with scroll
            }}
        >
            <Spline
                scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                onLoad={onLoad}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            />

            {/* Hide Spline watermark */}
            <style jsx global>{`
                #spline-watermark,
                [id*="spline"],
                [class*="spline-watermark"],
                a[href*="spline.design"] {
                    display: none !important;
                    opacity: 0 !important;
                    visibility: hidden !important;
                }
            `}</style>
        </div>
    );
}
