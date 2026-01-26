"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/ui/CustomCursor";

// ============================================
// CYBER-NOIR HERO SECTION
// ============================================

const styles = {
    section: "relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#030303]",
    grid: {
        wrapper: "absolute inset-0 pointer-events-none opacity-[0.4] mix-blend-color-dodge",
        pattern: "w-full h-full",
    },
    lighting: {
        spotlight: "absolute top-[-50%] left-[-20%] w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(204,255,0,0.08)_0%,transparent_60%)] blur-[120px] pointer-events-none",
        accent: "absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(112,0,255,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none"
    },
    content: {
        wrapper: "relative z-10 text-center px-6 max-w-7xl mx-auto flex flex-col items-center",
        label: "font-mono text-acid-lime text-xs sm:text-sm tracking-[0.2em] mb-8 uppercase opacity-0 animate-reveal",
        headline: {
            wrapper: "font-display font-extrabold tracking-tighter leading-[0.85] mb-8 relative",
            row: "block overflow-hidden",
            text: "inline-block transform-gpu"
        },
        subheadline: "text-[#A1A1AA] font-sans text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-reveal [animation-delay:400ms]",
        cta: {
            wrapper: "flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-reveal [animation-delay:600ms]",
            button: "group relative px-8 py-4 bg-acid-lime text-black font-sans font-bold text-lg hover:bg-[#b3e600] transition-colors duration-300 flex items-center gap-3",
            secondary: "text-white/60 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors border-b border-transparent hover:border-acid-lime/50 pb-1"
        }
    }
};

export default function HeroSection() {
    return (
        <section className={styles.section}>
            {/* Background Grid */}
            <div className={styles.grid.wrapper}>
                <div
                    className={styles.grid.pattern}
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: "80px 80px",
                        maskImage: "radial-gradient(circle at center, black 40%, transparent 100%)"
                    }}
                />
            </div>

            {/* Atmospheric Lighting */}
            <div className={styles.lighting.spotlight} />
            <div className={styles.lighting.accent} />

            {/* Main Content */}
            <div className={styles.content.wrapper}>
                {/* Micro Label */}
                <div className={styles.content.label}>
                    System Status: Online
                </div>

                {/* Headline */}
                <h1 className={styles.content.headline.wrapper}>
                    <span className={styles.content.headline.row}>
                        <motion.span
                            className={`${styles.content.headline.text} text-white text-[clamp(2.5rem,11vw,9rem)]`}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        >
                            INTELLIGENCE
                        </motion.span>
                    </span>
                    <span className={styles.content.headline.row}>
                        <motion.span
                            className={`${styles.content.headline.text} text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 text-[clamp(2.5rem,11vw,9rem)]`}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            ARCHITECTS
                        </motion.span>
                    </span>
                </h1>

                {/* Subheadline */}
                <p className={styles.content.subheadline}>
                    We build autonomous systems that replace manual labor,
                    <span className="text-white"> compress timelines</span>, and
                    <span className="text-white"> accelerate scale</span>.
                </p>

                {/* CTA Actions */}
                <div className={styles.content.cta.wrapper}>
                    <MagneticButton>
                        <a href="/audit" className={styles.content.cta.button}>
                            INITIALIZE AUDIT
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </MagneticButton>

                    <a href="#work" className={styles.content.cta.secondary}>
                        View Protocols
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-acid-lime to-transparent opacity-50" />
            </motion.div>
        </section>
    );
}
