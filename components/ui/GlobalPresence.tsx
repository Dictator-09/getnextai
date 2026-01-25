"use client";

import { motion } from "framer-motion";
import { Globe, CreditCard, FileText, Clock, Headphones } from "lucide-react";

const trustFeatures = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Delivery",
        description: "Serving clients across time zones"
    },
    {
        icon: <CreditCard className="w-6 h-6" />,
        title: "Secure Payments",
        description: "Stripe, PayPal, Wire Transfer"
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "NDA Available",
        description: "Your data and ideas protected"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Hours",
        description: "Available when you need us"
    },

    {
        icon: <Headphones className="w-6 h-6" />,
        title: "Dedicated Support",
        description: "Direct line to your team"
    }
];
// ... (omitting middle lines, targeting start and end)

// I will do two separate replaces if I can only target contiguous blocks. 
// Wait, replace_file_content is for single contiguous block.
// I have essentially two changes: Imports (top) and Grid Class (bottom).
// They are far apart. I should use multi_replace_file_content or two separate calls. 
// I'll use separate calls to be safe and simple.


const regions = [
    { name: "United States", code: "US", x: 22, y: 35 },
    { name: "United Kingdom", code: "UK", x: 47, y: 28 },
    { name: "UAE", code: "UAE", x: 60, y: 42 },
    { name: "Australia", code: "AU", x: 82, y: 65 },
    { name: "Europe", code: "EU", x: 52, y: 32 },
];

export default function GlobalPresence() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-black to-[#030308]">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
                        Global Reach
                    </p>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">
                        Built for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Global Businesses
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We work with businesses across time zones, delivering world-class AI solutions
                        with the reliability and professionalism you expect.
                    </p>
                </motion.div>

                {/* World Map Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative w-full max-w-4xl mx-auto mb-16 aspect-[2/1]"
                >
                    {/* Stylized world map background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl overflow-hidden">
                        {/* Grid pattern */}
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }} />

                        {/* Region indicators */}
                        {regions.map((region, index) => (
                            <motion.div
                                key={region.code}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                className="absolute"
                                style={{ left: `${region.x}%`, top: `${region.y}%` }}
                            >
                                {/* Pulse effect */}
                                <div className="relative">
                                    <span className="absolute inline-flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 opacity-20 animate-ping" />
                                    <span className="relative inline-flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                                </div>

                                {/* Label */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                    <span className="px-2 py-1 bg-black/80 border border-white/10 rounded text-cyan-400 text-xs font-medium">
                                        {region.code}
                                    </span>
                                </div>
                            </motion.div>
                        ))}

                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ opacity: 0.1 }}>
                            <defs>
                                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Lines connecting regions - using numeric coordinates with viewBox */}
                            <path
                                d="M 22 35 Q 35 20 47 28"
                                stroke="url(#line-gradient)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                            <path
                                d="M 47 28 Q 55 35 60 42"
                                stroke="url(#line-gradient)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                            <path
                                d="M 60 42 Q 70 55 82 65"
                                stroke="url(#line-gradient)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* Trust Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {trustFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-4 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                            <p className="text-gray-500 text-xs">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
