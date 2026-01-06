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

    // Calculate color based on scroll progress
    const getOverlayColor = (progress: number) => {
        if (progress < 0.2) {
            // Hero: Cyan
            return 'rgba(0, 245, 255, 0.15)';
        } else if (progress < 0.4) {
            // Websites: Purple
            return 'rgba(189, 0, 255, 0.15)';
        } else if (progress < 0.6) {
            // Voice: Pink
            return 'rgba(255, 0, 110, 0.15)';
        } else if (progress < 0.8) {
            // WhatsApp: Green
            return 'rgba(37, 211, 102, 0.15)';
        } else {
            // Contact: White/Blue
            return 'rgba(100, 200, 255, 0.1)';
        }
    };

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

    return (
        <>
            {/* Spline Container */}
            <div
                className="fixed top-0 left-0 w-full h-screen pointer-events-none"
                style={{ zIndex: 1 }}
            >
                <Spline
                    scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                    onLoad={onLoad}
                />

                {/* Color Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none transition-colors duration-500"
                    style={{
                        backgroundColor: getOverlayColor(scrollProgress),
                        mixBlendMode: 'screen'
                    }}
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
