"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { FileSearch, Video, Lightbulb, CheckCircle } from "lucide-react";
import AuditForm from "./AuditForm";
import SpotlightCard from "./SpotlightCard";

const processSteps = [
    {
        number: "01",
        icon: <FileSearch className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Submit Your Info",
        description: "Share your website and business details"
    },
    {
        number: "02",
        icon: <Video className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Receive Loom Video",
        description: "Get a personalized video audit within 48hrs"
    },
    {
        number: "03",
        icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Get Your AI Plan",
        description: "Actionable roadmap tailored to your business"
    }
];

const auditIncludes = [
    "Website Performance Analysis",
    "Automation Opportunity Scan",
    "AI Chatbot Recommendations",
    "Implementation Roadmap",
    "ROI Assessment",
    "Competitor Analysis"
];

export default function AIAuditSection() {
    return (
        <section id="audit" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-black via-[#050510] to-black">
            {/* Background effects - reduced on mobile */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 sm:from-cyan-900/20 via-transparent to-transparent" />
            <div className="hidden sm:block absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="hidden sm:block absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Limited Spots Available
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 sm:mb-6 px-2">
                        Get Your Free{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            AI Audit
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                        Discover exactly how AI can transform your business with a personalized action plan.
                    </p>
                </motion.div>

                {/* 3-Step Process - Horizontal scroll on mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mb-12 sm:mb-16"
                >
                    <div className="flex overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-3 gap-4 sm:gap-6 pb-4 sm:pb-0 snap-x-mandatory no-scrollbar">
                        {processSteps.map((step, index) => (
                            <div key={index} className="relative min-w-[260px] sm:min-w-0 snap-center h-full">
                                {/* Connector line - desktop only */}
                                {index < processSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent z-0" />
                                )}

                                <SpotlightCard className="h-full p-5 sm:p-6 backdrop-blur-sm rounded-2xl hover:border-cyan-500/30 transition-colors duration-300">
                                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                            {step.icon}
                                        </div>
                                        <span className="text-3xl sm:text-4xl font-black text-white/10">{step.number}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{step.title}</h3>
                                    <p className="text-gray-400 text-sm">{step.description}</p>
                                </SpotlightCard>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
                    {/* Left: What's Included */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <ScrollReveal>
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-[1.1]">
                                <span className="text-white">Your current stack is</span>{" "}
                                <span className="bg-gradient-to-r from-[#FF6B35] to-[#C41E3A] bg-clip-text text-transparent">
                                    bleeding revenue.
                                </span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-[#A0A0A8] text-lg mb-8 leading-relaxed max-w-xl">
                                Manual workflows are the silent killer of scale. We deconstruct your
                                operations, identify the friction, and deploy autonomous agents that
                                execute faster than your best employee.
                            </p>
                        </ScrollReveal>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                            {auditIncludes.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Testimonial - Hidden on mobile for space */}
                        <div className="hidden sm:block mt-8 p-5 sm:p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                            <p className="text-gray-300 italic mb-4 text-sm sm:text-base">
                                &quot;The audit revealed opportunities we never knew existed.
                                Within a month, we automated 60% of our customer support.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                                    S
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm">Sarah K.</p>
                                    <p className="text-gray-500 text-xs">SaaS Founder, UK</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form - Show first on mobile */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-8"
                    >
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Request Your Free Audit</h3>
                        <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">
                            No commitment. Get your personalized Loom video within 48 hours.
                        </p>
                        <AuditForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
