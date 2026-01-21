"use client";

import { useRef, useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

interface UseScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
}

/**
 * Custom hook for scroll-triggered reveal animations using IntersectionObserver.
 * More performant than scroll event listeners.
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
    const { threshold = 0.3, rootMargin = "0px", triggerOnce = true } = options;

    const ref = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [isInView, setIsInView] = useState(false);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (triggerOnce && hasAnimated.current) return;

                    controls.start({
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                        },
                    });
                    hasAnimated.current = true;
                    setIsInView(true);
                } else if (!triggerOnce) {
                    controls.start({
                        opacity: 0,
                        y: 30,
                    });
                    setIsInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [controls, threshold, rootMargin, triggerOnce]);

    return {
        ref,
        controls,
        isInView, // Now returning state, safe to use in render
    };
}

export default useScrollReveal;
