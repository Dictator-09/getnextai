"use client";

import { motion } from "framer-motion";
import { Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description: "We discuss your vision, goals, and requirements in detail",
        icon: <Lightbulb className="w-8 h-8" />,
        color: "cyan"
    },
    {
        number: "02",
        title: "Proposal & Planning",
        description: "Detailed project plan, timeline, and transparent pricing",
        icon: <Code className="w-8 h-8" />,
        color: "purple"
    },
    {
        number: "03",
        title: "Development",
        description: "Regular updates and previews as I build your solution",
        icon: <Rocket className="w-8 h-8" />,
        color: "green"
    },
    {
        number: "04",
        title: "Launch & Support",
        description: "Deployment, training, and ongoing support included",
        icon: <CheckCircle className="w-8 h-8" />,
        color: "yellow"
    }
];

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
                        Simple, Transparent Process
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        From idea to launch, I'll guide you through every step
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                            <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm border border-black/5 dark:border-white/10 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 shadow-lg dark:shadow-none">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-${step.color}-500/20 to-${step.color}-500/5 mb-6`}>
                                    <div className={`text-${step.color}-600 dark:text-${step.color}-400`}>
                                        {step.icon}
                                    </div>
                                </div>
                                <div className="text-6xl font-black text-black/5 dark:text-white/10 mb-4">{step.number}</div>
                                <h3 className="text-xl font-bold text-black dark:text-white mb-3">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
