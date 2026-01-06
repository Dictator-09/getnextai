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

    // Aggressive watermark hiding
    useEffect(() => {
        const hideSplineLogo = () => {
            const viewer = document.querySelector('spline-viewer');
            if (viewer?.shadowRoot) {
                const existingStyles = viewer.shadowRoot.querySelectorAll('style[data-logo-hide]');
                existingStyles.forEach(s => s.remove());

                const style = document.createElement('style');
                style.setAttribute('data-logo-hide', 'true');
                style.textContent = `
          #logo,
          .logo,
          [id*="logo"],
          [class*="logo"],
          a[href*="spline"],
          a[href*="spline.design"] {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
          }
        `;
                viewer.shadowRoot.appendChild(style);
            }

            const logos = document.querySelectorAll('a[href*="spline.design"], #logo, .logo');
            logos.forEach(logo => {
                (logo as HTMLElement).style.display = 'none';
            });
        };

        const intervals = [0, 100, 300, 500, 1000, 2000, 3000];
        const timers = intervals.map(delay => setTimeout(hideSplineLogo, delay));
        const interval = setInterval(hideSplineLogo, 1000);

        return () => {
            timers.forEach(clearTimeout);
            clearInterval(interval);
        };
    }, []);

    const onLoad = (spline: any) => {
        splineRef.current = spline;

        setTimeout(() => {
            const viewer = document.querySelector('spline-viewer');
            if (viewer?.shadowRoot) {
                const style = document.createElement('style');
                style.setAttribute('data-logo-hide', 'true');
                style.textContent = '#logo { display: none !important; }';
                viewer.shadowRoot.appendChild(style);
            }
        }, 50);
    };

    // Calculate vertical position: starts at center (0vh), moves up as you scroll
    const translateY = -(scrollProgress * 100); // 0vh to -100vh (moves upward)

    return (
        <>
            {/* Spline Container */}
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

            {/* Global CSS */}
            <style jsx global>{`
        spline-viewer::part(logo),
        #logo,
        .logo,
        a[href*="spline.design"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
      `}</style>
        </>
    );
}
