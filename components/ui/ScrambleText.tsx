"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
        const endTime = startTime + duration * 1000;

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
                const scrambled = text
                    .split("")
                    .map((char, index) => {
                        // Reveal characters progressively
                        if (index < text.length * progress) {
                            return index <= Math.floor(text.length * progress) ? char : CHARS[Math.floor(Math.random() * CHARS.length)];
                        }
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("");

                // Show only Revealed part + partial scramble for better effect? 
                // A better algorithm:
                // Calculate how many chars should be revealed: floor(length * progress)
                // The rest: scrambled or hidden? Scramble text usually fills the whole length first.

                const currentLength = Math.floor(text.length * progress);
                let result = text.substring(0, currentLength);

                if (currentLength < text.length) {
                    result += CHARS[Math.floor(Math.random() * CHARS.length)];
                    result += CHARS[Math.floor(Math.random() * CHARS.length)];
                }

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

    return (
        <span ref={ref} className={className}>
            {displayText || text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')}
        </span>
    );
}
