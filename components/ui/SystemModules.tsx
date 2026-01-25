"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const systemModules = [
    {
        id: "llm",
        label: "LLM_INTEGRATION",
        title: "Large Language Models",
        subtitle: "Custom-trained on your data",
        description: "Deploy GPT-4, Claude, or custom fine-tuned models integrated directly into your workflows. Real-time processing, context-aware responses.",
        capabilities: ["Document Analysis", "Code Generation", "Content Creation", "Data Extraction"],
        status: "OPERATIONAL",
    },
    {
        id: "automation",
        label: "WORKFLOW_AUTOMATION",
        title: "Workflow Automation",
        subtitle: "30+ hours saved monthly",
        description: "End-to-end process automation. From lead capture to fulfillment, every step optimized and hands-free.",
        capabilities: ["Lead Routing", "Email Sequences", "Task Orchestration", "API Integrations"],
        status: "OPERATIONAL",
    },
    {
        id: "chatbots",
        label: "AI_CHATBOTS",
        title: "Conversational AI",
        subtitle: "24/7 customer engagement",
        description: "Multi-channel AI agents that handle support, sales, and bookings. Voice and text, indistinguishable from human operators.",
        capabilities: ["WhatsApp", "Voice Calls", "Web Chat", "SMS"],
        status: "OPERATIONAL",
    },
    {
        id: "data",
        label: "DATA_SYSTEMS",
        title: "Decision Intelligence",
        subtitle: "Data-driven operations",
        description: "Real-time dashboards and predictive analytics. Transform raw data into actionable business intelligence.",
        capabilities: ["Predictive Models", "Real-time Dashboards", "Anomaly Detection", "Reporting"],
        status: "OPERATIONAL",
    },
];

export default function SystemModules() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="services" className="relative py-24 md:py-32 overflow-hidden bg-[#030305]">
            {/* Ambient Background - Simplified */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C9A7]/5 blur-[120px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <ScrollReveal>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-[#00C9A7] tracking-widest uppercase">
                                System Modules
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight max-w-3xl">
                            AI Infrastructure
                            <br />
                            <span className="text-white/40">Ready to Deploy</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Mobile View: Vertical Stack (Simple & Reliable) */}
                <div className="md:hidden space-y-4">
                    {systemModules.map((module, index) => (
                        <div
                            key={module.id}
                            className="bg-[#0A0A0F] border border-white/10 rounded-2xl p-6 relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[#00C9A7] text-xs font-mono tracking-wider">{module.label}</span>
                                <span className="bg-[#00C9A7]/10 text-[#00C9A7] px-2 py-1 text-[10px] font-mono rounded">{module.status}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">{module.title}</h3>
                            <p className="text-white/60 text-sm mb-4">{module.subtitle}</p>
                            <p className="text-white/70 text-sm leading-relaxed mb-6 border-l-2 border-[#00C9A7]/20 pl-4">
                                {module.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {module.capabilities.map((cap) => (
                                    <span key={cap} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white/50 font-mono">
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View: Interactive List (Md+) */}
                <div className="hidden md:flex flex-col gap-4">
                    {systemModules.map((module, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={module.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`
                                    group relative flex items-stretch gap-6 p-8 rounded-2xl border transition-all duration-300 cursor-pointer
                                    ${isActive
                                        ? "bg-[#0A0A0F] border-[#00C9A7]/30 shadow-[0_0_60px_rgba(0,201,167,0.1)] translate-x-4"
                                        : "bg-[#050508]/50 border-white/5 hover:border-white/10"
                                    }
                                `}
                            >
                                {/* Left Indicator */}
                                <div className={`w-1 rounded-full transition-colors duration-300 ${isActive ? "bg-[#00C9A7]" : "bg-white/5"}`} />

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`font-mono text-xs tracking-widest transition-colors ${isActive ? "text-[#00C9A7]" : "text-white/30"}`}>
                                            {module.label}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold text-white mb-1">{module.title}</h3>
                                    <p className={`text-sm transition-colors ${isActive ? "text-[#00C9A7]/80" : "text-white/40"}`}>
                                        {module.subtitle}
                                    </p>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-white/70 leading-relaxed mb-6 max-w-2xl">
                                                    {module.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {module.capabilities.map((cap) => (
                                                        <span key={cap} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60 font-mono">
                                                            {cap}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Right: Decorative Icon */}
                                <div className="flex items-center justify-center w-24">
                                    <motion.div
                                        animate={{ rotate: isActive ? 45 : 0, scale: isActive ? 1.1 : 1 }}
                                        className={`w-12 h-12 border transition-colors ${isActive ? "border-[#00C9A7]/50" : "border-white/10"}`}
                                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                                    >
                                        {isActive && <div className="w-full h-full bg-[#00C9A7]/10" />}
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 md:mt-24 flex flex-col sm:flex-row items-center gap-6">
                    <a href="/audit" className="group relative px-8 py-4 bg-[#00C9A7] text-[#050508] font-display font-bold rounded-full overflow-hidden transition-transform active:scale-95">
                        <span className="relative z-10">Request System Audit</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </a>
                    <span className="text-white/30 text-sm font-mono">Deployment in 2-3 weeks</span>
                </div>
            </div>
        </section>
    );
}
