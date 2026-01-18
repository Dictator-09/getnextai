"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";

interface Metric {
    value: string;
    label: string;
    trend: "up" | "down";
}

export interface CaseStudyData {
    id: string;
    badge: string;
    title: string;
    location: string;
    industry: string;
    problem: string;
    solution: string;
    metrics: Metric[];
    color: "neon" | "cyan" | "white";
    icon: React.ReactNode;
}

const colorClasses = {
    neon: {
        border: "border-[#B8FF00]/30",
        text: "text-[#B8FF00]",
        bg: "bg-[#B8FF00]/10",
        glow: "shadow-[0_0_30px_rgba(184,255,0,0.1)]",
        gradient: "from-[#B8FF00]/20 to-[#B8FF00]/5"
    },
    cyan: {
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.1)]",
        gradient: "from-cyan-500/20 to-cyan-500/5"
    },
    white: {
        border: "border-white/30",
        text: "text-white",
        bg: "bg-white/10",
        glow: "shadow-[0_0_30px_rgba(255,255,255,0.1)]",
        gradient: "from-white/20 to-white/5"
    }
};

export default function CaseStudyCard({ study, index }: { study: CaseStudyData; index: number }) {
    const colors = colorClasses[study.color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative h-full"
        >
            <div className={`relative bg-[#050508]/90 backdrop-blur-xl border ${colors.border} rounded-3xl p-8 hover:border-white/20 transition-all duration-500 h-full flex flex-col group-hover:-translate-y-2`}>

                {/* Top Bar */}
                <div className="flex items-center justify-between mb-8">
                    {/* Demo Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.bg} border ${colors.border} rounded-md ${colors.text} text-[10px] font-mono font-bold uppercase tracking-wider`}>
                        <Zap className="w-3 h-3" />
                        {study.badge}
                    </div>

                    {/* Icon */}
                    <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text}`}>
                        {study.icon}
                    </div>
                </div>

                {/* Title & Location */}
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                    {study.title}
                </h3>
                <p className="text-white/40 text-xs font-mono mb-6 uppercase tracking-wider">
                    {study.location} // {study.industry}
                </p>

                {/* Problem */}
                <div className="mb-6 pl-4 border-l border-white/10">
                    <p className="text-white/60 text-sm leading-relaxed">
                        <span className="text-white/30 text-xs font-mono block mb-1">CHALLENGE</span>
                        {study.problem}
                    </p>
                </div>

                {/* Solution */}
                <div className="mb-8 pl-4 border-l border-[#B8FF00]/30">
                    <p className="text-white/80 text-sm leading-relaxed">
                        <span className={`${colors.text} text-xs font-mono block mb-1 uppercase`}>Deployed Solution</span>
                        {study.solution}
                    </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mt-auto">
                    {study.metrics.map((metric, i) => (
                        <div
                            key={i}
                            className="bg-white/5 border border-white/5 rounded-lg p-3 text-center group-hover:bg-white/10 transition-colors"
                        >
                            <div className={`text-lg font-bold ${colors.text} font-display`}>
                                {metric.value}
                            </div>
                            <div className="text-white/30 text-[10px] font-mono uppercase mt-1">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* View More Link */}
                <a
                    href="#contact"
                    className={`mt-8 inline-flex items-center gap-2 ${colors.text} font-mono text-xs font-bold uppercase tracking-widest group-hover:gap-4 transition-all duration-300`}
                >
                    View Analysis
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
        </motion.div>
    );
}
