"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 500);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 right-6 z-50 p-3 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#B8FF00]/30 rounded-full hover:border-[#B8FF00]/60 hover:bg-[#B8FF00]/10 transition-all duration-300 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5 text-[#B8FF00] group-hover:translate-y-[-2px] transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
