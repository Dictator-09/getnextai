"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    scrambleSpeed?: number;
    revealSpeed?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export default function ScrambleText({
    text,
    className = "",
    delay = 0,
    duration = 1.5,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let interval: NodeJS.Timeout;
        const startTime = Date.now();
        // const endTime = startTime + duration * 1000; // Removed unused variable

        // Initial delay
        const timeout = setTimeout(() => {
            interval = setInterval(() => {
                const now = Date.now();
                const progress = Math.min((now - startTime - delay * 1000) / (duration * 1000), 1);

                if (progress <= 0) {
                    // Before start time
                    return;
                }

                if (progress >= 1) {
                    setDisplayText(text);
                    clearInterval(interval);
                    return;
                }

                // Scramble logic
                // unused variable 'scrambled' removed

                // Let's stick to the classic "Matrix" style:
                // Randomly replacing unrevealed characters.
                const revealIndex = Math.floor(text.length * progress);
                const nextText = text
                    .split("")
                    .map((char, i) => {
                        if (i <= revealIndex) return char;
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("");

                setDisplayText(nextText);

            }, 30);
        }, delay * 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [isInView, text, delay, duration]);

    // Ensure we don't use Math.random() during render for the fallback
    // Use an empty string or the full text to avoid hydration mismatch
    return (
        <span ref={ref} className={className}>
            {displayText || text}
        </span>
    );
}
