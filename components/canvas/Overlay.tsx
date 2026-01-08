"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Mic, MessageSquare, CheckCircle, Code2, Cpu, Zap, Layout, Calendar, Clock, ExternalLink, Play, Users, TrendingUp, Bot } from "lucide-react";
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
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypeAnimation } from "react-type-animation";

gsap.registerPlugin(ScrollTrigger);

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!slidesRef.current) return;

        const slides = slidesRef.current;

        // Create horizontal scroll animation with extended duration
        // Create horizontal scroll animation with hold at the end
        const scrollTween = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${slides.scrollWidth * 1.5}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: [0, 0.256, 0.513, 1],
                    duration: { min: 0.2, max: 0.8 },
                    delay: 0,
                    ease: "power1.inOut"
                }
            }
        });

        scrollTween.to(slides, {
            x: () => -(slides.scrollWidth - window.innerWidth),
            ease: "none",
            duration: 1
        });

        // Add a brief hold period after the scroll
        scrollTween.to({}, { duration: 0.3 });


        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full z-20">
            <Navbar />
            {/* SECTION 1: ENHANCED HERO */}
            <section
                id="main-content"
                className="min-h-screen w-screen flex flex-col items-center justify-center p-8 pointer-events-none relative"
            >
                <div className="text-center z-10 pointer-events-auto max-w-5xl mx-auto">
                    {/* Global Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-400 text-sm mb-8"
                    >
                        <Globe className="w-4 h-4 text-cyan-500" />
                        <span>Serving Businesses Globally</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-cyan-600 dark:text-cyan-400 font-medium">US • UK • UAE • AU • EU</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-600 dark:from-white dark:via-gray-200 dark:to-gray-500 mb-6 leading-[1.1]">
                            We Build{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-gradient">
                                AI Systems
                            </span>
                            <br />
                            That Scale Your Business
                        </h1>

                        {/* Subheading with results focus */}
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
                            Transform your operations with intelligent automation.{" "}
                            <span className="text-black dark:text-white font-medium">More leads. Faster conversions. Hands-free growth.</span>
                        </p>

                        {/* Dual CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#audit">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 animate-gradient text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300 flex items-center gap-2"
                                >
                                    <Zap className="w-5 h-5" />
                                    Get a Free AI Audit
                                </motion.button>
                            </a>
                            <a href="#services">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-transparent border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white font-medium rounded-full text-lg hover:bg-white/5 hover:border-gray-400 dark:hover:border-white/40 transition-all duration-300 flex items-center gap-2"
                                >
                                    <Play className="w-5 h-5" />
                                    See How It Works
                                </motion.button>
                            </a>
                        </div>

                        {/* Quick Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-12 border-t border-gray-200 dark:border-white/10"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                                    <TrendingUp className="w-5 h-5 text-cyan-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">30+ hrs</p>
                                    <p className="text-gray-500 text-sm">Saved Monthly</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-purple-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">24/7</p>
                                    <p className="text-gray-500 text-sm">AI Coverage</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-green-500" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">100%</p>
                                    <p className="text-gray-500 text-sm">Satisfaction</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 animate-bounce text-gray-500">
                    Scroll to Explore
                </div>
            </section>

            {/* TRUST BADGES (Enhanced) */}
            <TrustBadges />

            {/* AI AUDIT SECTION (NEW) */}
            <AIAuditSection />

            {/* HORIZONTAL SCROLL SERVICES SECTION */}
            <section id="services" ref={containerRef} className="h-screen w-screen overflow-x-auto">
                <div ref={slidesRef} className="h-full flex">
                    {/* SERVICE 1: CONVERSION-FOCUSED AI WEBSITES */}
                    <div className="service-tile min-w-[100vw] md:min-w-[800px] h-screen flex items-center justify-center pt-24 pb-8 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-[90vw] md:max-w-xl h-auto relative group"
                            whileHover={{
                                rotateY: 3,
                                rotateX: 3,
                                scale: 1.01
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-cyan-400/20 to-cyan-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative h-full flex flex-col justify-between bg-black/40 dark:bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 border border-white/10 shadow-2xl hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out overflow-hidden">
                                {/* Decorative gradient orb */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />

                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold text-xl">01</div>
                                        <div className="flex gap-4">
                                            <div className="flex items-center gap-2 text-xs font-medium text-cyan-300 uppercase tracking-wider px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                                                <Clock className="w-3 h-3" /> 2-3 Weeks
                                            </div>
                                        </div>
                                    </div>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 100 }}
                                        className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tighter leading-none"
                                    >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Conversion-Focused</span>
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">AI Websites</span>
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                        className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-light max-w-sm"
                                    >
                                        Websites engineered to convert. We build fast, smart experiences that turn visitors into paying customers.
                                    </motion.p>

                                    {/* Who it's for */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs">SaaS Startups</span>
                                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs">Agencies</span>
                                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs">E-commerce</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center text-cyan-600 dark:text-cyan-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        Sub-second load times
                                    </li>
                                    <li className="flex items-center text-cyan-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        SEO & Analytics built-in
                                    </li>
                                    <li className="flex items-center text-cyan-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        AI chatbot integration ready
                                    </li>
                                </ul>

                                <a href="#audit">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-500 ease-out">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                        <span className="relative flex items-center">
                                            Explore This Solution
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 2: 24/7 AI SALES & SUPPORT AGENTS */}
                    <div className="service-tile min-w-[100vw] md:min-w-[800px] h-screen flex items-center justify-center pt-24 pb-8 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-[90vw] md:max-w-xl h-auto relative group"
                            whileHover={{
                                rotateY: 3,
                                rotateX: 3,
                                scale: 1.01
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative h-full flex flex-col justify-between bg-black/40 dark:bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 border border-white/10 shadow-2xl hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />

                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 mb-8">
                                    <span className="text-purple-400 font-black text-xl">02</span>
                                </div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100 }}
                                    className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tighter leading-none"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">24/7 AI Sales</span>
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">& Support Agents</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                    className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-light max-w-sm"
                                >
                                    Never miss a call again. AI agents that sound human, handle bookings, qualify leads, and close deals around the clock.
                                </motion.p>

                                {/* Who it's for */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs">Restaurants</span>
                                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs">Healthcare</span>
                                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs">Service Businesses</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-4 mb-10">
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                                        <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">1-2 weeks setup</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                                        <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Custom training</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center text-purple-600 dark:text-purple-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        Natural voice conversations
                                    </li>
                                    <li className="flex items-center text-purple-600 dark:text-purple-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        Multi-language support
                                    </li>
                                    <li className="flex items-center text-purple-600 dark:text-purple-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        CRM & calendar integration
                                    </li>
                                </ul>

                                <a href="#audit">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-500 ease-out">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                        <span className="relative flex items-center">
                                            Explore This Solution
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 3: WORKFLOW AUTOMATION */}
                    <div className="service-tile min-w-[100vw] md:min-w-[800px] h-screen flex items-center justify-center pt-24 pb-8 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-[90vw] md:max-w-xl h-auto relative group"
                            whileHover={{
                                rotateY: 3,
                                rotateX: 3,
                                scale: 1.01
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative h-full flex flex-col justify-between bg-black/40 dark:bg-black/40 backdrop-blur-xl rounded-[2.5rem] p-12 md:p-16 border border-white/10 shadow-2xl hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-500 ease-out overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl" />

                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 font-bold text-xl">03</div>
                                        <div className="flex gap-4">
                                            <div className="flex items-center gap-2 text-xs font-medium text-green-300 uppercase tracking-wider px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5">
                                                <Clock className="w-3 h-3" /> 1 Week
                                            </div>
                                        </div>
                                    </div>

                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 100 }}
                                        className="text-4xl md:text-5xl font-heading font-black mb-6 tracking-tighter leading-none"
                                    >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Workflow Automation</span>
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">30+ hrs/Month Saved</span>
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                        className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed font-light max-w-sm"
                                    >
                                        Automate repetitive tasks across your entire business. From lead nurturing to customer support, we build systems that work while you sleep.
                                    </motion.p>

                                    {/* Who it's for */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs">All Industries</span>
                                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs">Teams 5-500</span>
                                        <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs">Global</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-10">
                                    <li className="flex items-center text-green-600 dark:text-green-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        WhatsApp & email automation
                                    </li>
                                    <li className="flex items-center text-green-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        Lead qualification flows
                                    </li>
                                    <li className="flex items-center text-green-300 text-base font-medium">
                                        <div className="w-7 h-7 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-3">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        Custom dashboard & analytics
                                    </li>
                                </ul>

                                <a href="#audit">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-500 ease-out">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                        <span className="relative flex items-center">
                                            Explore This Solution
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

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
                            Let's Build<br />
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
