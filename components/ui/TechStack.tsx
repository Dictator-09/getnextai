"use client";

import { motion } from "framer-motion";

// Tech stack logos as simple styled components (no external images needed)
const techStack = [
    { name: "OpenAI", color: "#10A37F" },
    { name: "Claude", color: "#D97757" },
    { name: "Google Cloud", color: "#4285F4" },
    { name: "AWS", color: "#FF9900" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "React", color: "#61DAFB" },
    { name: "Stripe", color: "#635BFF" },
    { name: "Make", color: "#6D4AFF" },
    { name: "Zapier", color: "#FF4A00" },
    { name: "Vercel", color: "#FFFFFF" },
    { name: "n8n", color: "#FF6D5A" },
    { name: "WhatsApp", color: "#25D366" }
];

export default function TechStack() {
    return (
        <section className="py-16 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <p className="text-gray-500 text-sm uppercase tracking-widest">
                        Powered by Industry-Leading Technology
                    </p>
                </motion.div>

                {/* Logo Marquee */}
                <div className="relative overflow-hidden">
                    {/* Gradient masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

                    {/* Scrolling logos */}
                    <motion.div
                        className="flex gap-12 items-center"
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear"
                            }
                        }}
                    >
                        {/* Double the items for seamless loop */}
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-white/20 transition-colors"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: tech.color }}
                                />
                                <span className="text-gray-400 text-sm font-medium whitespace-nowrap">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-600 text-xs mt-8"
                >
                    We leverage the best tools to deliver exceptional results
                </motion.p>
            </div>
        </section>
    );
}
