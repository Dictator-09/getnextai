"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

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
                            className="relative flex items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4 bg-[#0a0a0a]/90 backdrop-blur-md border border-[#B8FF00]/40 rounded-full touch-feedback group hover:border-[#B8FF00]/80 transition-all duration-300"
                        >
                            {/* Content */}
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-[#B8FF00] animate-pulse" />
                                <p className="text-[#E8E8ED] font-semibold text-sm sm:text-base">
                                    Free AI Audit
                                </p>
                            </div>

                            {/* Arrow + Dismiss */}
                            <div className="flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 text-[#B8FF00] group-hover:translate-x-1 transition-transform" />

                                <button
                                    onClick={handleDismiss}
                                    className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[#6B6B73] hover:text-[#B8FF00] hover:bg-white/10 transition-colors ml-2"
                                    aria-label="Dismiss"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        </motion.div>
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
