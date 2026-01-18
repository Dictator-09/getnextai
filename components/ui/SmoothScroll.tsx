"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis smooth scroll
        lenisRef.current = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo easing
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 2,
        });

        // RAF loop for Lenis
        function raf(time: number) {
            lenisRef.current?.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenisRef.current?.destroy();
        };
    }, []);

    return <>{children}</>;
}

// Hook to access Lenis instance
export function useLenis() {
    return null; // Will be enhanced with context if needed
}
