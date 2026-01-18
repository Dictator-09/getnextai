"use client";

import { motion } from "framer-motion";
import { Lightbulb, Video, Code, Rocket, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Free AI Audit",
        description: "Submit your info and receive a personalized Loom video analyzing your AI opportunities.",
        icon: <Lightbulb className="w-6 h-6" />,
        status: "INITIATED"
    },
    {
        number: "02",
        title: "Strategy Calibration",
        description: "30-minute deep dive into your business goals, timeline, and budget parameters.",
        icon: <Video className="w-6 h-6" />,
        status: "PENDING"
    },
    {
        number: "03",
        title: "System Development",
        description: "We build your AI solution with regular updates and preview demos.",
        icon: <Code className="w-6 h-6" />,
        status: "LOCKED"
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "Deployment, training, and ongoing support to ensure your success.",
        icon: <Rocket className="w-6 h-6" />,
        status: "LOCKED"
    }
];

export default function ProcessSection() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#030305]" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(184, 255, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(184, 255, 0, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-[#00C9A7] tracking-widest uppercase">
                            Operational Workflow
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        Execution <span className="text-white/40">Protocol</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto font-light">
                        From initial audit to deployment, we maintain total transparency.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-[120%] h-px bg-gradient-to-r from-[#00C9A7]/30 to-transparent z-0" />
                            )}

                            <div className="relative bg-[#050508]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-[#00C9A7]/30 transition-all duration-300 h-full flex flex-col z-10">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-[#00C9A7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                                <div className="relative">
                                    {/* Icon Box */}
                                    <div className="w-12 h-12 rounded-lg bg-[#00C9A7]/10 border border-[#00C9A7]/30 flex items-center justify-center text-[#00C9A7] mb-6 mb-8 group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>

                                    <div className="absolute top-0 right-0 font-mono text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                        {step.number}
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#00C9A7] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-white/40 text-sm leading-relaxed mb-6">
                                        {step.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-[#00C9A7]/70 uppercase tracking-wider">
                                            {step.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <a href="/audit">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border border-[#00C9A7]/30 text-[#00C9A7] font-display font-bold rounded-full text-lg hover:bg-[#00C9A7]/10 transition-all duration-300 flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(0,201,167,0.1)]"
                        >
                            Initialize Sequence
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
