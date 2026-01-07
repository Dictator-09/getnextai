"use client";

import { motion } from "framer-motion";

const clients = [
    "OpenAI",
    "Microsoft",
    "Google",
    "Meta",
    "Amazon",
    "Apple",
    "Tesla",
    "SpaceX",
    "Netflix",
    "Stripe",
];

export default function MarqueeBanner() {
    return (
        <section className="py-12 bg-gradient-to-r from-black via-gray-900 to-black border-y border-white/5 overflow-hidden">
            <div className="relative">
                {/* Gradient fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

                {/* First marquee */}
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...clients, ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-gray-600 hover:text-white transition-colors duration-300"
                        >
                            <span className="text-cyan-500">✦</span>
                            <span>{client}</span>
                        </div>
                    ))}
                </motion.div>

                {/* Second marquee (reverse direction) */}
                <motion.div
                    className="flex gap-16 whitespace-nowrap mt-8"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...clients.reverse(), ...clients].map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 text-xl md:text-2xl font-medium text-gray-700 hover:text-cyan-400 transition-colors duration-300"
                        >
                            <span className="text-purple-500">◆</span>
                            <span>{client}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
