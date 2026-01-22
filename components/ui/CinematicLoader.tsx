"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

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
            className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative w-full max-w-md px-6">
                <div ref={textRef} className="text-4xl md:text-6xl font-bold font-mono text-[#00C9A7] mb-8 text-center tracking-tighter">
                    INITIALIZING
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                        ref={progressRef}
                        className="h-full bg-gradient-to-r from-[#00C9A7] to-[#FF6B35] w-0"
                    />
                </div>

                {/* Decorative tech elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                    <div className="absolute top-[-20%] left-[10%] w-[1px] h-[40px] bg-[#00C9A7] animate-pulse" />
                    <div className="absolute bottom-[-20%] right-[10%] w-[1px] h-[40px] bg-[#FF6B35] animate-pulse" />
                </div>
            </div>
        </div>
    );
}
