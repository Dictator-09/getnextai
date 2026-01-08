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
    color: "cyan" | "purple" | "green";
    icon: React.ReactNode;
}

const colorClasses = {
    cyan: {
        gradient: "from-cyan-500/20 to-cyan-600/10",
        border: "border-cyan-500/30",
        text: "text-cyan-400",
        bg: "bg-cyan-500/10",
        glow: "from-cyan-500/20 via-cyan-400/20 to-cyan-600/20"
    },
    purple: {
        gradient: "from-purple-500/20 to-purple-600/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        bg: "bg-purple-500/10",
        glow: "from-purple-500/20 via-purple-400/20 to-purple-600/20"
    },
    green: {
        gradient: "from-green-500/20 to-green-600/10",
        border: "border-green-500/30",
        text: "text-green-400",
        bg: "bg-green-500/10",
        glow: "from-green-500/20 via-green-400/20 to-green-600/20"
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
            className="group relative"
        >
            {/* Glow effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${colors.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 h-full flex flex-col">
                {/* Demo Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.bg} border ${colors.border} rounded-full ${colors.text} text-xs font-semibold uppercase tracking-wider mb-6 w-fit`}>
                    <Zap className="w-3 h-3" />
                    {study.badge}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.gradient} border ${colors.border} flex items-center justify-center ${colors.text} mb-6`}>
                    {study.icon}
                </div>

                {/* Title & Location */}
                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-gray-500 text-sm mb-6">
                    {study.location} • {study.industry}
                </p>

                {/* Problem */}
                <div className="mb-6">
                    <p className="text-gray-400 text-sm leading-relaxed">
                        <span className="text-gray-500 font-medium">Challenge:</span>{" "}
                        {study.problem}
                    </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                    <p className="text-gray-300 text-sm leading-relaxed">
                        <span className={`${colors.text} font-medium`}>Solution:</span>{" "}
                        {study.solution}
                    </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 mt-auto">
                    {study.metrics.map((metric, i) => (
                        <div
                            key={i}
                            className={`${colors.bg} border ${colors.border} rounded-xl p-3 text-center`}
                        >
                            <div className={`text-xl font-black ${colors.text}`}>
                                {metric.trend === "up" ? "↑" : "↓"}{metric.value}
                            </div>
                            <div className="text-gray-500 text-xs mt-1">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* View More Link */}
                <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center gap-2 ${colors.text} font-medium text-sm group-hover:gap-3 transition-all duration-300`}
                >
                    Get Similar Results
                    <ArrowUpRight className="w-4 h-4" />
                </a>
            </div>
        </motion.div>
    );
}
