"use client";

import { motion } from "framer-motion";
import { Coffee, Cloud, Palette, ArrowRight } from "lucide-react";
import CaseStudyCard, { CaseStudyData } from "./CaseStudyCard";

const caseStudies: CaseStudyData[] = [
    {
        id: "urban-bean",
        badge: "DEPLOYED",
        title: "Urban Bean Café",
        location: "United States",
        industry: "Food & Beverage",
        problem: "Missing 40% of phone orders during peak hours. Staff overwhelmed with calls.",
        solution: "Voice Agent for automated order taking + WhatsApp integration.",
        metrics: [
            { value: "35%", label: "Revenue", trend: "up" },
            { value: "60%", label: "Efficiency", trend: "up" },
            { value: "$12K", label: "Saved", trend: "up" }
        ],
        color: "cyan",
        icon: <Coffee className="w-5 h-5" />
    },
    {
        id: "cloudsync",
        badge: "SCALED",
        title: "CloudSync SaaS",
        location: "United Kingdom",
        industry: "B2B Technology",
        problem: "8-hour average response time. Sales team losing deals.",
        solution: "AI chatbot for instant qualification + automated CRM updates.",
        metrics: [
            { value: "90%", label: "Speed", trend: "up" },
            { value: "45%", label: "Conv. Rate", trend: "up" },
            { value: "24/7", label: "Uptime", trend: "up" }
        ],
        color: "neon",
        icon: <Cloud className="w-5 h-5" />
    },
    {
        id: "horizon-creative",
        badge: "OPTIMIZED",
        title: "Horizon Creative",
        location: "UAE",
        industry: "Digital Agency",
        problem: "Manual client reporting consuming 30+ hours monthly.",
        solution: "Automated reporting workflows + AI-powered client intake.",
        metrics: [
            { value: "30hrs", label: "Time Saved", trend: "up" },
            { value: "2x", label: "Onboarding", trend: "up" },
            { value: "70%", label: "Growth", trend: "up" }
        ],
        color: "white",
        icon: <Palette className="w-5 h-5" />
    }
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="relative py-24 md:py-32 bg-[#030305]">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                            Past Deployments
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-white mb-6">
                        System <span className="text-white/40">Performance</span>
                    </h2>
                </div>

                {/* Vertical Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className="case-study-card">
                            <CaseStudyCard study={study} index={index} />
                        </div>
                    ))}
                </div>

                {/* Final CTA Area */}
                <div className="mt-20 flex flex-col items-center justify-center text-center">
                    <p className="font-mono text-white/30 text-xs uppercase tracking-widest mb-8">
                        Ready to deploy your system?
                    </p>
                    <a href="/audit" className="inline-block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-10 py-5 bg-white text-black font-display font-bold rounded-full text-xl hover:bg-[#00C9A7] hover:text-white transition-all duration-300 flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,201,167,0.5)]"
                        >
                            Initiate Audit
                            <ArrowRight className="w-6 h-6" />
                        </motion.button>
                    </a>
                </div>
            </div>
        </section>
    );
}
