"use client";

import { motion } from "framer-motion";
import { Lightbulb, Video, Code, Rocket, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Free AI Audit",
        description: "Submit your info and receive a personalized Loom video analyzing your AI opportunities",
        icon: <Lightbulb className="w-8 h-8" />,
        color: "cyan"
    },
    {
        number: "02",
        title: "Strategy Call",
        description: "30-minute deep dive into your business goals, timeline, and budget",
        icon: <Video className="w-8 h-8" />,
        color: "purple"
    },
    {
        number: "03",
        title: "Development",
        description: "We build your AI solution with regular updates and preview demos",
        icon: <Code className="w-8 h-8" />,
        color: "green"
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "Deployment, training, and ongoing support to ensure your success",
        icon: <Rocket className="w-8 h-8" />,
        color: "yellow"
    }
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    cyan: { bg: "bg-cyan-500/20", border: "border-cyan-500/30", text: "text-cyan-400" },
    purple: { bg: "bg-purple-500/20", border: "border-purple-500/30", text: "text-purple-400" },
    green: { bg: "bg-green-500/20", border: "border-green-500/30", text: "text-green-400" },
    yellow: { bg: "bg-yellow-500/20", border: "border-yellow-500/30", text: "text-yellow-400" }
};

export default function ProcessSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-600 dark:text-cyan-400 text-sm uppercase tracking-widest mb-4">How We Work</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-black dark:text-white mb-4">
                        Simple, Transparent{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            Process
                        </span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        From initial audit to launch, we keep you informed every step of the way
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => {
                        const colors = colorClasses[step.color];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative group"
                            >
                                {/* Connector line */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/10 to-transparent" />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                                <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 shadow-lg dark:shadow-none h-full flex flex-col">
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} border ${colors.border} mb-6`}>
                                        <div className={colors.text}>
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="text-5xl font-black text-black/5 dark:text-white/10 mb-4">{step.number}</div>
                                    <h3 className="text-xl font-bold text-black dark:text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow">{step.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a href="#audit">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-transparent border-2 border-cyan-500/30 text-cyan-600 dark:text-cyan-400 font-bold rounded-full text-lg hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            Start with a Free Audit
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
