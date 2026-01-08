"use client";

import { motion } from "framer-motion";
import { FileSearch, Video, Lightbulb, CheckCircle, ArrowRight } from "lucide-react";
import AuditForm from "./AuditForm";

const processSteps = [
    {
        number: "01",
        icon: <FileSearch className="w-6 h-6" />,
        title: "Submit Your Info",
        description: "Share your website and business details"
    },
    {
        number: "02",
        icon: <Video className="w-6 h-6" />,
        title: "Receive Loom Video",
        description: "Get a personalized video audit within 48hrs"
    },
    {
        number: "03",
        icon: <Lightbulb className="w-6 h-6" />,
        title: "Get Your AI Plan",
        description: "Actionable roadmap tailored to your business"
    }
];

const auditIncludes = [
    "Website Performance & Conversion Analysis",
    "Automation Opportunity Scan",
    "Chatbot & Voice Agent Recommendations",
    "Personalized AI Implementation Roadmap",
    "ROI Potential Assessment",
    "Competitor Technology Analysis"
];

export default function AIAuditSection() {
    return (
        <section id="audit" className="py-24 relative overflow-hidden bg-gradient-to-b from-black via-[#050510] to-black">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        Limited Spots Available
                    </div>
                    <h2 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">
                        Get Your Free{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                            AI Audit
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Discover exactly how AI can transform your business. We'll analyze your website,
                        identify automation opportunities, and deliver a personalized action plan.
                    </p>
                </motion.div>

                {/* 3-Step Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
                >
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector line */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                            )}

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                        {step.icon}
                                    </div>
                                    <span className="text-4xl font-black text-white/10">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: What's Included */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            What's Included in Your Audit
                        </h3>
                        <div className="space-y-4">
                            {auditIncludes.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span className="text-gray-300">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Testimonial/Social Proof */}
                        <div className="mt-8 p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl">
                            <p className="text-gray-300 italic mb-4">
                                "The audit revealed opportunities we never knew existed.
                                Within a month, we automated 60% of our customer support."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                    S
                                </div>
                                <div>
                                    <p className="text-white font-medium">Sarah K.</p>
                                    <p className="text-gray-500 text-sm">SaaS Founder, UK</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-2">Request Your Free Audit</h3>
                        <p className="text-gray-400 text-sm mb-6">
                            No commitment required. Get your personalized Loom video within 48 hours.
                        </p>
                        <AuditForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
