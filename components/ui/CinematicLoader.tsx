"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { styles } from "./styles/CinematicLoader.styles";

const WORDS = ["INTELLIGENCE", "SYSTEMS", "NEURAL", "OPTIMIZATION", "SCALE", "GETNEXTAI"];

export default function CinematicLoader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(() => setIsComplete(true), 500);
            }
        });

        // Initial set
        gsap.set(containerRef.current, { yPercent: 0 });

        // Text scramble effect simulation
        let wordIndex = 0;
        const interval = setInterval(() => {
            if (textRef.current && wordIndex < WORDS.length) {
                textRef.current.innerText = WORDS[wordIndex];
                wordIndex++;
            } else {
                clearInterval(interval);
            }
        }, 300);

        // Progress line animation
        tl.to(progressRef.current, {
            width: "100%",
            duration: 2,
            ease: "expo.inOut"
        })
            .to(textRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: -0.5
            })
            .to(containerRef.current, {
                yPercent: -100,
                duration: 1.2,
                ease: "power4.inOut",
                delay: 0.2
            });

        return () => clearInterval(interval);
    }, []);

    if (isComplete) return null;

    return (
        <div
            ref={containerRef}
            className={styles.container}
        >
            <div className={styles.content.wrapper}>
                <div ref={textRef} className={styles.content.text}>
                    INITIALIZING
                </div>

                {/* Progress Bar */}
                <div className={styles.progress.track}>
                    <div
                        ref={progressRef}
                        className={styles.progress.bar}
                    />
                </div>

                {/* Decorative tech elements */}
                <div className={styles.decoration.container}>
                    <div className={styles.decoration.lineTop} />
                    <div className={styles.decoration.lineBottom} />
                </div>
            </div>
        </div>
    );
}
