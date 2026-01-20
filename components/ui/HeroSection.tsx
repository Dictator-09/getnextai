"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/CustomCursor";
import ScrambleText from "@/components/ui/ScrambleText";

// ============================================
// HERO CTA BUTTON - AURORA THEME
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
                {/* Main button with aurora gradient */}
                <div className="relative px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#0D5C63] overflow-hidden">
                    {/* Animated shine effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ["-200%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Button text */}
                    <span className="relative z-10 font-bold text-white text-base md:text-lg flex items-center gap-2">
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

                {/* Glow effect */}
                <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                    style={{ boxShadow: "0 0 60px 20px rgba(0, 201, 167, 0.5), 0 0 100px 40px rgba(0, 201, 167, 0.2)" }}
                />

                {/* Pulsing ring */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#00C9A7] -z-10"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
            </motion.div>
        </MagneticButton>
    );
}

// ============================================
// AURORA HERO SECTION
// ============================================

export default function HeroSection() {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050508]">
            {/* Aurora gradient background */}
            <div className="absolute inset-0">
                {/* Left warm glow */}
                <div
                    className="absolute -left-1/4 top-0 w-1/2 h-full"
                    style={{
                        background: "radial-gradient(ellipse at left, rgba(255, 107, 53, 0.15) 0%, transparent 60%)",
                    }}
                />
                {/* Center red/dark */}
                <div
                    className="absolute left-1/4 top-0 w-1/2 h-full"
                    style={{
                        background: "radial-gradient(ellipse at center, rgba(196, 30, 58, 0.1) 0%, transparent 50%)",
                    }}
                />
                {/* Right teal glow */}
                <div
                    className="absolute -right-1/4 top-0 w-1/2 h-full"
                    style={{
                        background: "radial-gradient(ellipse at right, rgba(0, 201, 167, 0.15) 0%, transparent 60%)",
                    }}
                />
            </div>

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

            {/* Floating aurora orbs - optimized with CSS transforms */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: "layout paint" }}>
                {[
                    { color: "rgba(255, 107, 53, 0.10)", x: "15%", y: "25%" },
                    { color: "rgba(0, 201, 167, 0.10)", x: "75%", y: "35%" },
                    { color: "rgba(196, 30, 58, 0.06)", x: "50%", y: "70%" },
                ].map((orb, i) => (
                    <div
                        key={i}
                        className="absolute w-80 h-80 rounded-full animate-float-slow"
                        style={{
                            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
                            left: orb.x,
                            top: orb.y,
                            filter: "blur(60px)",
                            willChange: "transform",
                            animationDelay: `${i * 2}s`,
                        }}
                    />
                ))}
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
                        <ScrambleText text="Your Business." delay={0.2} />
                    </span>
                    <span className="block text-[clamp(2.5rem,10vw,7rem)] text-[#E8E8ED]">
                        Running on{" "}
                        <span
                            className="bg-gradient-to-r from-[#FF6B35] via-[#00C9A7] to-[#0D5C63] bg-clip-text text-transparent"
                            style={{ textShadow: "0 0 40px rgba(0, 201, 167, 0.4)" }}
                        >
                            <ScrambleText text="Intelligence." delay={0.8} />
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
                    className="w-2 h-2 rounded-full bg-[#00C9A7]"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
