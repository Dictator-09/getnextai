"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X } from "lucide-react";

export default function StickyAuditCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero section (roughly 100vh)
            const scrolled = window.scrollY > window.innerHeight * 0.8;
            setIsVisible(scrolled && !isDismissed);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isDismissed]);

    const handleDismiss = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDismissed(true);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 right-6 z-50"
                >
                    <a href="#audit" className="group relative block">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

                        {/* Button */}
                        <div className="relative flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl text-white font-bold shadow-2xl">
                            <Zap className="w-5 h-5" />
                            <span className="hidden sm:inline">Get Free AI Audit</span>
                            <span className="sm:hidden">Free Audit</span>

                            {/* Dismiss button */}
                            <button
                                onClick={handleDismiss}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-black border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                                aria-label="Dismiss"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>
                    </a>

                    {/* Pulse animation */}
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
