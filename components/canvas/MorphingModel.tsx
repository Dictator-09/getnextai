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
            const progress = Math.min(scrolled / scrollHeight, 0.8); // Clamp to 80% to stop color changes after Contact
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Hide Spline watermark by injecting CSS into Shadow DOM
    useEffect(() => {
        const hideLogo = () => {
            const viewer = document.querySelector('spline-viewer');
            if (viewer && viewer.shadowRoot) {
                const style = document.createElement('style');
                style.textContent = '#logo { display: none !important; }';
                viewer.shadowRoot.appendChild(style);
            }
        };

        // Try immediately and after delays to ensure Spline has loaded
        hideLogo();
        const timer1 = setTimeout(hideLogo, 500);
        const timer2 = setTimeout(hideLogo, 1500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    const onLoad = (spline: any) => {
        splineRef.current = spline;

        // Also try to hide logo when Spline loads
        setTimeout(() => {
            const viewer = document.querySelector('spline-viewer');
            if (viewer && viewer.shadowRoot) {
                const style = document.createElement('style');
                style.textContent = '#logo { display: none !important; }';
                viewer.shadowRoot.appendChild(style);
            }
        }, 100);
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
        </div>
    );
}
