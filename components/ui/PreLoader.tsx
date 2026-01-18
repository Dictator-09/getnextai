"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PreLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 300);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        // Fallback: hide after 2s max
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[9999] bg-[#050508] flex flex-col items-center justify-center"
                >
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <span className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                            GETNEXT<span className="text-[#00C9A7]">AI</span>
                        </span>
                    </motion.div>

                    {/* Progress bar */}
                    <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-[#00C9A7]"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ duration: 0.1 }}
                        />
                    </div>

                    {/* Progress text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-[#6B6B73] text-sm font-mono"
                    >
                        {Math.min(Math.round(progress), 100)}%
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
