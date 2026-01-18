"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/CustomCursor";
import Link from "next/link";

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
                <div className="relative px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-[#B8FF00] to-[#8BC34A] overflow-hidden">
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
// HERO CTA COMPONENT
// ============================================

export default function HeroCTA() {
    return (
        <div className="flex flex-col items-center gap-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
                <HeroCTAButton href="/audit">
                    Book a Strategy Call
                </HeroCTAButton>
            </motion.div>

            <motion.span
                className="text-[#6B6B73] text-sm font-sans"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                15 minutes · No sales pitch
            </motion.span>
        </div>
    );
}
