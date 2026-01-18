"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/CustomCursor";

// ============================================
// HERO CTA BUTTON
// ============================================

export function HeroCTAButton({ children, href = "/audit" }: { children: React.ReactNode; href?: string }) {
    return (
        <MagneticButton className="relative group" href={href}>
            <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                {/* Main button */}
                <div className="relative px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-[#B8FF00] to-[#84cc16] overflow-hidden">
                    {/* Animated shine effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Button text */}
                    <span className="relative z-10 font-bold text-[#050508] text-base md:text-lg flex items-center gap-2">
                        {children}

                        {/* Arrow icon */}
                        <motion.svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                    </span>
                </div>

                {/* Massive glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ boxShadow: "0 0 60px 20px rgba(184, 255, 0, 0.5), 0 0 100px 40px rgba(184, 255, 0, 0.2)" }}
                />

                {/* Pulsing ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#B8FF00] -z-10"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
            </motion.div>
        </MagneticButton>
    );
}

// ============================================
// COMPLETE HERO SECTION
// ============================================

export default function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050508]">
            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            {/* Floating gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[
                    { color: "rgba(184, 255, 0, 0.15)", delay: 0, x: "20%", y: "30%" },
                    { color: "rgba(184, 255, 0, 0.1)", delay: 2, x: "80%", y: "60%" },
                    { color: "rgba(184, 255, 0, 0.08)", delay: 4, x: "50%", y: "80%" },
                ].map((orb, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-96 h-96 rounded-full blur-3xl"
                        style={{
                            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                            left: orb.x,
                            top: orb.y,
                        }}
                        animate={{ x: [0, 50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
                    />
                ))}

                {/* Main radial glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
                    style={{
                        background: "radial-gradient(circle, rgba(184, 255, 0, 0.15) 0%, transparent 60%)",
                        filter: "blur(80px)",
                    }}
                />
            </div>

            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl">
                {/* Main headline */}
                <motion.h1
                    className="font-heading font-bold tracking-tighter leading-[0.9] mb-6 md:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <span className="block text-[clamp(2.5rem,10vw,7rem)] text-[#E8E8ED]">
                        Your Business.
                    </span>
                    <span className="block text-[clamp(2.5rem,10vw,7rem)] text-[#E8E8ED]">
                        Running on{" "}
                        <span
                            className="text-[#B8FF00]"
                            style={{ textShadow: "0 0 40px rgba(184, 255, 0, 0.5), 0 0 80px rgba(184, 255, 0, 0.3)" }}
                        >
                            Intelligence.
                        </span>
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="text-[clamp(1rem,2.5vw,1.375rem)] text-[#A0A0A8] font-sans font-light max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    We design and deploy AI systems that replace manual work,
                    <br className="hidden sm:block" />
                    compress decision time, and scale without friction.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <HeroCTAButton href="/audit">
                        Book a Strategy Call
                    </HeroCTAButton>
                    <span className="text-[#6B6B73] text-sm font-sans">
                        15 minutes · No sales pitch
                    </span>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <span className="text-[#6B6B73] text-xs font-sans tracking-widest uppercase">
                    Scroll
                </span>
                <motion.div
                    className="w-px h-8 bg-gradient-to-b from-[#6B6B73] to-transparent"
                    animate={{ scaleY: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="w-2 h-2 rounded-full bg-[#B8FF00]"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
