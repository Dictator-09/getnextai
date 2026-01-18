"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import HeroBackground from "./HeroBackground";
import AICore from "./AICore";

// Custom easing matching specs
const heroEasing = [0.16, 1, 0.3, 1] as const;

export default function CinematicHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Scroll-based parallax
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 800], [0, 160]);
    const coreY = useTransform(scrollY, [0, 800], [0, 400]);
    const contentY = useTransform(scrollY, [0, 800], [0, 600]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Entry animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const backgroundVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.8, ease: heroEasing },
        },
    };

    const coreVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: heroEasing },
        },
    };

    const headlineVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: heroEasing },
        },
    };

    const ctaVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: heroEasing, delay: 0.6 },
        },
    };

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] w-full overflow-hidden"
        >
            <AnimatePresence>
                {isMounted && (
                    <motion.div
                        className="absolute inset-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Background layer - slowest parallax */}
                        <motion.div
                            className="absolute inset-0"
                            style={{ y: backgroundY }}
                            variants={backgroundVariants}
                        >
                            <HeroBackground />
                        </motion.div>

                        {/* AI Core - medium parallax */}
                        <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ y: coreY, opacity }}
                            variants={coreVariants}
                        >
                            <div className="w-full h-full max-w-[600px] max-h-[600px] md:max-w-[800px] md:max-h-[800px]">
                                <AICore />
                            </div>
                        </motion.div>

                        {/* Content layer - fastest (natural scroll) */}
                        <motion.div
                            className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 z-10"
                            style={{ y: contentY, opacity }}
                        >
                            <div className="text-center max-w-5xl mx-auto">
                                {/* Headline */}
                                <motion.h1
                                    variants={headlineVariants}
                                    className="font-display font-bold tracking-tighter leading-[0.95] mb-6"
                                >
                                    <span className="block text-[clamp(2.5rem,12vw,8rem)] text-[#E8E8ED]">
                                        Your Business.
                                    </span>
                                    <span className="block text-[clamp(2.5rem,12vw,8rem)] text-[#E8E8ED]">
                                        Running on{" "}
                                        <span className="text-[#B8FF00]">Intelligence.</span>
                                    </span>
                                </motion.h1>

                                {/* Subheadline */}
                                <motion.p
                                    variants={headlineVariants}
                                    className="text-[clamp(1rem,2.5vw,1.375rem)] text-[#A0A0A8] font-sans font-light max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed"
                                >
                                    We design and deploy AI systems that replace manual work,
                                    <br className="hidden sm:block" />
                                    compress decision time, and scale without friction.
                                </motion.p>

                                {/* CTA */}
                                <motion.div
                                    variants={ctaVariants}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <a href="/audit">
                                        <motion.button
                                            onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="relative px-8 py-4 md:px-10 md:py-5 bg-[#B8FF00] text-[#050508] font-display font-bold text-base md:text-lg rounded-full transition-all duration-300 overflow-hidden group"
                                            style={{
                                                boxShadow: isHovered
                                                    ? "0 0 40px rgba(184, 255, 0, 0.5), 0 0 80px rgba(184, 255, 0, 0.25)"
                                                    : "0 0 20px rgba(184, 255, 0, 0.3)",
                                            }}
                                        >
                                            {/* Hover shine effect */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                                                animate={isHovered ? { x: "200%" } : { x: "-100%" }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                            />
                                            <span className="relative z-10">Book a Strategy Call</span>
                                        </motion.button>
                                    </a>

                                    {/* Microcopy */}
                                    <span className="text-[#6B6B73] text-sm font-sans">
                                        15 minutes · No sales pitch
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                        >
                            <span className="text-[#6B6B73] text-xs font-sans tracking-widest uppercase">
                                Scroll
                            </span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-px h-8 bg-gradient-to-b from-[#6B6B73] to-transparent"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
