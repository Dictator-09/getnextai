"use client";

import { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function MorphingModel() {
    const splineRef = useRef<any>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [colorProgress, setColorProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;

            // For color shifting: use full scroll range (0-1)
            const fullProgress = Math.min(scrolled / scrollHeight, 1);
            setColorProgress(fullProgress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Aggressive watermark hiding
    useEffect(() => {
        const hideSplineLogo = () => {
            // Method 1: Shadow DOM injection
            const viewer = document.querySelector('spline-viewer');
            if (viewer?.shadowRoot) {
                // Remove existing logo styles first
                const existingStyles = viewer.shadowRoot.querySelectorAll('style[data-logo-hide]');
                existingStyles.forEach(s => s.remove());

                // Inject new style
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

            // Method 2: Direct DOM manipulation
            const logos = document.querySelectorAll('a[href*="spline.design"], #logo, .logo');
            logos.forEach(logo => {
                (logo as HTMLElement).style.display = 'none';
            });
        };

        // Run multiple times to catch the logo
        const intervals = [0, 100, 300, 500, 1000, 2000, 3000];
        const timers = intervals.map(delay => setTimeout(hideSplineLogo, delay));

        // Also run on interval
        const interval = setInterval(hideSplineLogo, 1000);

        return () => {
            timers.forEach(clearTimeout);
            clearInterval(interval);
        };
    }, []);

    const onLoad = (spline: any) => {
        splineRef.current = spline;

        // Hide logo immediately when Spline loads
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

    return (
        <>
            <div
                ref={containerRef}
                className="fixed top-0 left-0 w-full h-screen pointer-events-none"
                style={{
                    zIndex: 1,
                    filter: `hue-rotate(${colorProgress * 360}deg)` // Full 360deg rotation
                }}
            >
                <Spline
                    scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                    onLoad={onLoad}
                />
            </div>

            {/* Global CSS to hide any Spline branding */}
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
