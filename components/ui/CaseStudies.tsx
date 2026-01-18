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
        <section id="case-studies" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[#030305]" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C9A7]/20 to-transparent" />

            {/* Simple Grid Background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                            Past Deployments
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        System <span className="text-white/40">Performance</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto font-light">
                        Verified results from live production environments.
                    </p>
                </motion.div>

                {/* Case Study Grid - Horizontal scroll on mobile */}
                <div className="flex overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pb-8 sm:pb-0 snap-x-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className="min-w-[320px] sm:min-w-0 snap-center h-full">
                            <CaseStudyCard study={study} index={index} />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mt-16 md:mt-24"
                >
                    <p className="font-mono text-white/30 text-xs uppercase tracking-widest mb-6">
                        Ready to deploy your system?
                    </p>
                    <a href="/audit">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-black font-display font-bold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            Initiate Audit
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
