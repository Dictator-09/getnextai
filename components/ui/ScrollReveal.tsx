"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "word-reveal" | "line-mask";
    delay?: number;
    duration?: number;
}

export default function ScrollReveal({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    duration = 0.8,
}: ScrollRevealProps) {
    const el = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (animation === "fade-up") {
                gsap.fromTo(
                    el.current,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration,
                        delay,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el.current,
                            start: "top 85%", // Trigger when top of element hits 85% of viewport
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }
        }, el);

        return () => ctx.revert();
    }, [animation, delay, duration]);

    return (
        <div ref={el} className={cn(className, "will-change-transform")}>
            {children}
        </div>
    );
}
