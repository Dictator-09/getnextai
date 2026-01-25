"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

import { styles } from "./styles/SystemModules.styles";

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

            <div className={styles.container}>
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
                                <div className={cn(styles.desktop.indicator, isActive ? styles.desktop.indicatorActive : styles.desktop.indicatorInactive)} />

                                <div className={styles.desktop.contentWrapper}>
                                    <div className={styles.desktop.header}>
                                        <span className={cn(styles.desktop.label, isActive ? styles.desktop.labelActive : styles.desktop.labelInactive)}>
                                            {module.label}
                                        </span>
                                    </div>
                                    <h3 className={styles.desktop.title}>{module.title}</h3>
                                    <p className={cn(styles.desktop.subtitle, isActive ? styles.desktop.subtitleActive : styles.desktop.subtitleInactive)}>
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
                                                <div className={styles.desktop.tagContainer}>
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
                                <div className={styles.desktop.iconContainer}>
                                    <motion.div
                                        animate={{ rotate: isActive ? 45 : 0, scale: isActive ? 1.1 : 1 }}
                                        className={cn(styles.desktop.iconBox, isActive ? styles.desktop.iconBoxActive : styles.desktop.iconBoxInactive)}
                                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                                    >
                                        {isActive && <div className={styles.desktop.iconFill} />}
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
