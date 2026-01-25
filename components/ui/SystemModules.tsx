"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

const styles = {
    section: "relative py-24 md:py-32 overflow-hidden bg-[#030305]",
    background: {
        container: "absolute inset-0 pointer-events-none",
        grid: "absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20",
        glow: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00C9A7]/5 blur-[120px] rounded-full"
    },
    header: {
        container: "mb-16 md:mb-24",
        pill: "flex items-center gap-3 mb-4",
        dot: "w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse",
        label: "font-mono text-xs text-[#00C9A7] tracking-widest uppercase",
        title: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight max-w-3xl",
        subtitle: "text-white/40"
    },
    mobile: {
        container: "md:hidden space-y-4",
        card: "bg-[#0A0A0F] border border-white/10 rounded-2xl p-6 relative overflow-hidden",
        cardHeader: "flex items-center justify-between mb-4",
        label: "text-[#00C9A7] text-xs font-mono tracking-wider",
        status: "bg-[#00C9A7]/10 text-[#00C9A7] px-2 py-1 text-[10px] font-mono rounded",
        title: "text-xl font-bold text-white mb-1",
        subtitle: "text-white/60 text-sm mb-4",
        description: "text-white/70 text-sm leading-relaxed mb-6 border-l-2 border-[#00C9A7]/20 pl-4",
        tags: "flex flex-wrap gap-2",
        tag: "px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-white/50 font-mono"
    },
    desktop: {
        container: "hidden md:flex flex-col gap-4",
        card: {
            base: "group relative flex items-stretch gap-6 p-8 rounded-2xl border transition-all duration-300 cursor-pointer",
            active: "bg-[#0A0A0F] border-[#00C9A7]/30 shadow-[0_0_60px_rgba(0,201,167,0.1)] translate-x-4",
            inactive: "bg-[#050508]/50 border-white/5 hover:border-white/10"
        },
        indicator: "w-1 rounded-full transition-colors duration-300",
        label: "font-mono text-xs tracking-widest transition-colors",
        title: "text-2xl font-display font-bold text-white mb-1",
        subtitle: "text-sm transition-colors",
        description: "text-white/70 leading-relaxed mb-6 max-w-2xl",
        tag: "px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-white/60 font-mono",
        iconBox: "w-12 h-12 border transition-colors"
    },
    cta: {
        container: "mt-16 md:mt-24 flex flex-col sm:flex-row items-center gap-6",
        button: "group relative px-8 py-4 bg-[#00C9A7] text-[#050508] font-display font-bold rounded-full overflow-hidden transition-transform active:scale-95",
        buttonText: "relative z-10",
        buttonHover: "absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300",
        footnote: "text-white/30 text-sm font-mono"
    }
};

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
        <section id="services" className={styles.section}>
            {/* Ambient Background - Simplified */}
            <div className={styles.background.container}>
                <div className={styles.background.grid} />
                <div className={styles.background.glow} />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className={styles.header.container}>
                    <ScrollReveal>
                        <div className={styles.header.pill}>
                            <div className={styles.header.dot} />
                            <span className={styles.header.label}>
                                System Modules
                            </span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <h2 className={styles.header.title}>
                            AI Infrastructure
                            <br />
                            <span className={styles.header.subtitle}>Ready to Deploy</span>
                        </h2>
                    </ScrollReveal>
                </div>

                {/* Mobile View: Vertical Stack (Simple & Reliable) */}
                <div className={styles.mobile.container}>
                    {systemModules.map((module) => (
                        <div key={module.id} className={styles.mobile.card}>
                            <div className={styles.mobile.cardHeader}>
                                <span className={styles.mobile.label}>{module.label}</span>
                                <span className={styles.mobile.status}>{module.status}</span>
                            </div>
                            <h3 className={styles.mobile.title}>{module.title}</h3>
                            <p className={styles.mobile.subtitle}>{module.subtitle}</p>
                            <p className={styles.mobile.description}>
                                {module.description}
                            </p>
                            <div className={styles.mobile.tags}>
                                {module.capabilities.map((cap) => (
                                    <span key={cap} className={styles.mobile.tag}>
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop View: Interactive List (Md+) */}
                <div className={styles.desktop.container}>
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
                                className={cn(
                                    styles.desktop.card.base,
                                    isActive ? styles.desktop.card.active : styles.desktop.card.inactive
                                )}
                            >
                                {/* Left Indicator */}
                                <div className={cn(styles.desktop.indicator, isActive ? "bg-[#00C9A7]" : "bg-white/5")} />

                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={cn(styles.desktop.label, isActive ? "text-[#00C9A7]" : "text-white/30")}>
                                            {module.label}
                                        </span>
                                    </div>
                                    <h3 className={styles.desktop.title}>{module.title}</h3>
                                    <p className={cn(styles.desktop.subtitle, isActive ? "text-[#00C9A7]/80" : "text-white/40")}>
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
                                                <p className={styles.desktop.description}>
                                                    {module.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {module.capabilities.map((cap) => (
                                                        <span key={cap} className={styles.desktop.tag}>
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
                                        className={cn(styles.desktop.iconBox, isActive ? "border-[#00C9A7]/50" : "border-white/10")}
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
                <div className={styles.cta.container}>
                    <a href="/audit" className={styles.cta.button}>
                        <span className={styles.cta.buttonText}>Request System Audit</span>
                        <div className={styles.cta.buttonHover} />
                    </a>
                    <span className={styles.cta.footnote}>Deployment in 2-3 weeks</span>
                </div>
            </div>
        </section>
    );
}
