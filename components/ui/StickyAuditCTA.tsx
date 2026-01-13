"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, X } from "lucide-react";

export default function StickyAuditCTA() {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (100vh)
            const shouldShow = window.scrollY > window.innerHeight * 0.8;
            setIsVisible(shouldShow && !isDismissed);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
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
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-50 safe-bottom"
                >
                    <a href="/audit" className="block">
                        <motion.div
                            whileTap={{ scale: 0.98 }}
                            className="relative flex items-center justify-between gap-3 px-5 py-4 sm:px-6 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl shadow-[0_10px_40px_rgba(6,182,212,0.4)] touch-feedback"
                        >
                            {/* Content */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm sm:text-base">Free AI Audit</p>
                                    <p className="text-white/80 text-xs sm:text-sm hidden sm:block">Get your personalized analysis</p>
                                    <p className="text-white/80 text-xs sm:hidden">Personalized analysis</p>
                                </div>
                            </div>

                            {/* Dismiss button */}
                            <button
                                onClick={handleDismiss}
                                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:text-white active:bg-white/20 transition-colors flex-shrink-0 touch-feedback"
                                aria-label="Dismiss"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Subtle pulse ring */}
                            <div className="absolute inset-0 rounded-2xl animate-ping bg-cyan-500/20 -z-10" style={{ animationDuration: "3s" }} />
                        </motion.div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
