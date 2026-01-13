"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Play, Users, TrendingUp, Bot, CheckCircle } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/ui/ContactForm";
import ProcessSection from "@/components/ui/ProcessSection";
import TrustBadges from "@/components/ui/TrustBadges";
import AIAuditSection from "@/components/ui/AIAuditSection";
import CaseStudies from "@/components/ui/CaseStudies";
import GlobalPresence from "@/components/ui/GlobalPresence";
import TechStack from "@/components/ui/TechStack";
import StickyAuditCTA from "@/components/ui/StickyAuditCTA";
import ServicesGrid from "@/components/ui/ServicesGrid";

export default function Overlay() {
    return (
        <div className="absolute top-0 left-0 w-full z-20 safe-top">
            <Navbar />
            {/* SECTION 1: ENHANCED HERO - Mobile Optimized */}
            <section
                id="main-content"
                className="min-h-[100dvh] w-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-20 pointer-events-none relative"
            >
                <div className="text-center z-10 pointer-events-auto max-w-5xl mx-auto w-full">
                    {/* Global Badge - Mobile Friendly */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs sm:text-sm mb-6 sm:mb-8 touch-feedback"
                    >
                        <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 flex-shrink-0" />
                        <span className="hidden sm:inline">Serving Businesses Globally •</span>
                        <span className="sm:hidden">Global •</span>
                        <span className="text-cyan-400 font-medium">US • UK • UAE • AU • EU</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Main Headline - Fluid Typography */}
                        <h1 className="text-[clamp(2rem,8vw,5rem)] md:text-[clamp(3rem,6vw,6rem)] font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 mb-4 sm:mb-6 leading-[1.05]">
                            We Build{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient">
                                AI Systems
                            </span>
                            <br />
                            <span className="text-[clamp(1.75rem,7vw,4.5rem)] md:text-[clamp(2.5rem,5.5vw,5.5rem)]">That Scale Your Business</span>
                        </h1>

                        {/* Subheading - Mobile optimized */}
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
                            Transform your operations with intelligent automation.{" "}
                            <span className="text-white font-medium">More leads. Faster conversions. Hands-free growth.</span>
                        </p>

                        {/* Dual CTA Buttons - Touch Optimized */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
                            <a href="#audit" className="w-full sm:w-auto">
                                <motion.button
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl sm:rounded-full text-base sm:text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] active:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-200 flex items-center justify-center gap-2 touch-feedback"
                                >
                                    <Zap className="w-5 h-5" />
                                    Get a Free AI Audit
                                </motion.button>
                            </a>
                            <a href="#services" className="w-full sm:w-auto">
                                <motion.button
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full sm:w-auto min-h-[52px] px-6 sm:px-8 py-4 bg-white/5 border-2 border-white/20 text-white font-medium rounded-2xl sm:rounded-full text-base sm:text-lg active:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2 touch-feedback"
                                >
                                    <Play className="w-5 h-5" />
                                    See How It Works
                                </motion.button>
                            </a>
                        </div>

                        {/* Quick Stats - Mobile Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-white/10 w-full max-w-lg sm:max-w-none mx-auto"
                        >
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
                                <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-lg sm:text-xl font-bold text-white">30+</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">hrs saved</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
                                <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                    <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-lg sm:text-xl font-bold text-white">24/7</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">AI active</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
                                <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <p className="text-lg sm:text-xl font-bold text-white">100%</p>
                                    <p className="text-gray-500 text-xs sm:text-sm">satisfied</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll hint - Hidden on mobile */}
                <div className="absolute bottom-6 sm:bottom-10 animate-bounce text-gray-500 text-sm hidden sm:block">
                    Scroll to Explore
                </div>
            </section>

            {/* TRUST BADGES (Enhanced) */}
            <TrustBadges />

            {/* AI AUDIT SECTION (NEW) */}
            <AIAuditSection />

            {/* PREMIUM SERVICES GRID */}
            <ServicesGrid />

            {/* CASE STUDIES (NEW) */}
            <CaseStudies />

            {/* PROCESS SECTION */}
            <ProcessSection />

            {/* GLOBAL PRESENCE (NEW) */}
            <GlobalPresence />

            {/* TECH STACK (NEW) */}
            <TechStack />

            {/* SECTION: CONTACT */}
            <section
                id="contact"
                className="min-h-screen w-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black to-[#050505]"
            >
                <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 max-w-4xl w-full flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                            Let&apos;s Build<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                                Something Smart
                            </span>
                        </h2>
                        <p className="text-gray-400 mb-6">Book a free 30-minute strategy call. No commitment, no pressure—just clarity on what AI can do for your business.</p>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-400">
                                <CheckCircle className="mr-3 h-6 w-6 text-cyan-500" />
                                <span>Free 30-min Strategy Call</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <CheckCircle className="mr-3 h-6 w-6 text-cyan-500" />
                                <span>Detailed Implementation Roadmap</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <CheckCircle className="mr-3 h-6 w-6 text-cyan-500" />
                                <span>Transparent Pricing & Timeline</span>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                            <p className="text-sm text-gray-400 mb-2">Prefer to talk now?</p>
                            <a
                                href="tel:+918527706626"
                                className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                                +91 8527706626
                            </a>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>
            <Footer />

            {/* STICKY CTA (NEW) */}
            <StickyAuditCTA />
        </div>
    );
}
