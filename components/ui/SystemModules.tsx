"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

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

interface ModuleProps {
    module: typeof systemModules[0];
    index: number;
    isActive: boolean;
    onActivate: () => void;
}

function SystemModule({ module, index, isActive, onActivate }: ModuleProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            onMouseEnter={() => { setIsHovered(true); onActivate(); }}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative"
        >
            {/* Module container */}
            <motion.div
                animate={{
                    scale: isActive ? 1.02 : 1,
                    x: isActive ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`relative flex items-stretch gap-6 p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer ${isActive
                    ? "bg-[#0A0A0F] border-[#00C9A7]/30 shadow-[0_0_60px_rgba(0,201,167,0.1)]"
                    : "bg-[#050508]/80 border-white/5 hover:border-white/10"
                    }`}
            >
                {/* Left: Status indicator */}
                <div className="flex flex-col items-center gap-4">
                    {/* Vertical line with pulse */}
                    <div className="relative h-full w-px">
                        <div className={`absolute inset-0 ${isActive ? "bg-[#00C9A7]" : "bg-white/10"} transition-colors duration-300`} />
                        {isActive && (
                            <motion.div
                                className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#00C9A7] to-transparent"
                                animate={{ y: [0, 100, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                        )}
                    </div>
                </div>

                {/* Center: Content */}
                <div className="flex-1 min-w-0">
                    {/* Module label */}
                    <div className="flex items-center gap-3 mb-3">
                        <span className={`font-mono text-xs tracking-widest ${isActive ? "text-[#00C9A7]" : "text-white/30"} transition-colors`}>
                            {module.label}
                        </span>
                        <span className={`px-2 py-0.5 text-[10px] font-mono rounded ${isActive ? "bg-[#00C9A7]/20 text-[#00C9A7]" : "bg-white/5 text-white/30"
                            } transition-colors`}>
                            {module.status}
                        </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 tracking-tight">
                        {module.title}
                    </h3>
                    <p className={`text-sm ${isActive ? "text-[#00C9A7]/80" : "text-white/40"} mb-4 transition-colors`}>
                        {module.subtitle}
                    </p>

                    {/* Description - reveals on active */}
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xl">
                                    {module.description}
                                </p>

                                {/* Capabilities */}
                                <div className="flex flex-wrap gap-2">
                                    {module.capabilities.map((cap, i) => (
                                        <motion.span
                                            key={cap}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs text-white/70 font-mono"
                                        >
                                            {cap}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right: Abstract visual */}
                <div className="hidden md:flex items-center justify-center w-24 h-24 relative">
                    <motion.div
                        animate={{
                            rotate: isActive ? 45 : 0,
                            scale: isActive ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={`w-16 h-16 border ${isActive ? "border-[#00C9A7]/50" : "border-white/10"} transition-colors`}
                        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                    >
                        {isActive && (
                            <div className="absolute inset-0 bg-[#00C9A7]/10" />
                        )}
                    </motion.div>

                    {/* Orbiting dot */}
                    {isActive && (
                        <motion.div
                            className="absolute w-2 h-2 bg-[#00C9A7] rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{ transformOrigin: "40px 40px" }}
                        />
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function SystemModules() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section
            ref={containerRef}
            id="services"
            className="relative py-24 md:py-40 overflow-hidden"
        >
            {/* Deep background */}
            <motion.div
                className="absolute inset-0"
                style={{ y: backgroundY }}
            >
                <div className="absolute inset-0 bg-[#030305]" />

                {/* Grid fade */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(184, 255, 0, 0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(184, 255, 0, 0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* Depth glow */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30"
                    style={{
                        background: "radial-gradient(circle, rgba(184, 255, 0, 0.05) 0%, transparent 60%)",
                        filter: "blur(100px)",
                    }}
                />
            </motion.div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-[#00C9A7] rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-[#00C9A7] tracking-widest uppercase">
                            System Modules
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight max-w-3xl">
                        AI Infrastructure
                        <br />
                        <span className="text-white/40">Ready to Deploy</span>
                    </h2>
                </motion.div>

                {/* Modules list */}
                <div className="space-y-4 md:space-y-6 max-w-4xl">
                    {systemModules.map((module, index) => (
                        <SystemModule
                            key={module.id}
                            module={module}
                            index={index}
                            isActive={activeIndex === index}
                            onActivate={() => setActiveIndex(index)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-24 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                    <a href="/audit">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-8 py-4 bg-[#00C9A7] text-[#050508] font-display font-bold rounded-full transition-all duration-300"
                            style={{
                                boxShadow: "0 0 30px rgba(184, 255, 0, 0.3)",
                            }}
                        >
                            Request System Audit
                        </motion.button>
                    </a>
                    <span className="text-white/30 text-sm font-mono">
                        Deployment in 2-3 weeks
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
