"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinished }: { onFinished: () => void }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // 2 seconds total load time approx

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                onFinished();
            }, 500);
        }
    }, [progress, onFinished]);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
                <div className="relative">
                    {/* Glowing Ring */}
                    <div className="absolute -inset-4 rounded-full border border-cyan-500/20 blur-md animate-pulse" />

                    <div className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                        GETNEXT<span className="text-white">AI</span>
                    </div>
                </div>

                <div className="mt-8 flex flex-col items-center">
                    <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            className="h-full bg-cyan-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="mt-2 font-mono text-sm text-cyan-500/80">
                        INITIALIZING... {progress}%
                    </span>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
