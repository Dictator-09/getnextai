"use client";

import { motion } from "framer-motion";
import { Coffee, Cloud, Palette, ArrowRight } from "lucide-react";
import CaseStudyCard, { CaseStudyData } from "./CaseStudyCard";

const caseStudies: CaseStudyData[] = [
    {
        id: "urban-bean",
        badge: "Demo Project",
        title: "Urban Bean Café",
        location: "United States",
        industry: "Food & Beverage",
        problem: "Missing 40% of phone orders during peak hours. Staff overwhelmed with calls, leading to frustrated customers and lost revenue.",
        solution: "AI Voice Agent for automated order taking + WhatsApp integration for order confirmations and loyalty program.",
        metrics: [
            { value: "35%", label: "More Orders", trend: "up" },
            { value: "60%", label: "Less Missed", trend: "down" },
            { value: "$12K", label: "Monthly Saved", trend: "up" }
        ],
        color: "cyan",
        icon: <Coffee className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
        id: "cloudsync",
        badge: "Demo Project",
        title: "CloudSync SaaS",
        location: "United Kingdom",
        industry: "B2B Technology",
        problem: "8-hour average response time to inbound leads. Sales team losing deals to faster-responding competitors.",
        solution: "AI chatbot for instant qualification + automated CRM updates + Slack notifications for hot leads.",
        metrics: [
            { value: "90%", label: "Faster Response", trend: "up" },
            { value: "45%", label: "More Conversions", trend: "up" },
            { value: "24/7", label: "Coverage", trend: "up" }
        ],
        color: "purple",
        icon: <Cloud className="w-6 h-6 sm:w-7 sm:h-7" />
    },
    {
        id: "horizon-creative",
        badge: "Demo Project",
        title: "Horizon Creative",
        location: "UAE",
        industry: "Digital Agency",
        problem: "Manual client reporting consuming 30+ hours monthly. Slow onboarding process losing potential clients.",
        solution: "Automated reporting workflows + conversion-focused website redesign + AI-powered client intake system.",
        metrics: [
            { value: "30hrs", label: "Saved Monthly", trend: "up" },
            { value: "2x", label: "Faster Onboard", trend: "up" },
            { value: "70%", label: "Site Conversion", trend: "up" }
        ],
        color: "green",
        icon: <Palette className="w-6 h-6 sm:w-7 sm:h-7" />
    }
];

export default function CaseStudies() {
    return (
        <section id="case-studies" className="py-16 sm:py-24 relative overflow-hidden">
            {/* Background - reduced effects on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black" />
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <p className="text-purple-400 text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
                        What's Possible
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-3 sm:mb-4">
                        AI Solutions{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                            In Action
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto px-4">
                        See how businesses like yours could transform with AI.
                    </p>
                </motion.div>

                {/* Case Study Grid - Horizontal scroll on mobile */}
                <div className="flex overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-4 sm:pb-0 snap-x-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className="min-w-[280px] sm:min-w-0 snap-center">
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
                    className="text-center mt-10 sm:mt-16"
                >
                    <p className="text-gray-500 text-sm sm:text-base mb-4 sm:mb-6">
                        Ready to create your own success story?
                    </p>
                    <a href="#audit" className="inline-block w-full sm:w-auto max-w-md px-4 sm:px-0">
                        <motion.button
                            whileTap={{ scale: 0.97 }}
                            className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-2xl sm:rounded-full text-base sm:text-lg shadow-[0_0_30px_rgba(168,85,247,0.4)] active:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-200 flex items-center justify-center gap-2 touch-feedback mx-auto"
                        >
                            Get Your Free AI Audit
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
