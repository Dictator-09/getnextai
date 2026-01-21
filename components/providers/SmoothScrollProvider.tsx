"use client";

import { useLayoutEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const lenisInstance = new Lenis({
            duration: 1.5, // Slower, heavier feel (Junoon style)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease out
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1.2, // Slightly reduced to prevent jumpiness with high duration
            touchMultiplier: 2,
        });

        // Sync Lenis with GSAP ScrollTrigger
        lenisInstance.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenisInstance.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenisInstance.destroy();
            gsap.ticker.remove((time) => lenisInstance.raf(time * 1000));
        };
    }, []);

    return <>{children}</>;
}
