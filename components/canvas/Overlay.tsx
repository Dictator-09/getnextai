"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Mic, MessageSquare, CheckCircle, Code2, Cpu, Zap, Layout, Calendar, Clock, ExternalLink } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/ui/ContactForm";
import ProcessSection from "@/components/ui/ProcessSection";
import TrustBadges from "@/components/ui/TrustBadges";
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
            {/* SECTION 1: HERO */}
            <section
                id="main-content"
                className="h-screen w-screen flex flex-col items-center justify-center p-8 pointer-events-none"
            >
                <div className="text-center z-10 pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-7xl md:text-9xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-white to-purple-500 animate-gradient mb-4">
                            <TypeAnimation
                                sequence={[
                                    'GETNEXT',
                                    1000,
                                    'GETNEXTAI',
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={0}
                                cursor={false}
                            />
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
                            The Agency for the <span className="text-cyan-400 font-bold">Post-Labor Economy</span>.
                        </p>
                        <a href="#contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 animate-gradient text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.6)] ripple-effect"
                            >
                                Book Free Consultation
                            </motion.button>
                        </a>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 animate-bounce text-gray-500">
                    Scroll to Ascend
                </div>
            </section>

            {/* PERSONAL STORY SECTION */}
            <section className="py-20 bg-black/50 backdrop-blur-sm border-t border-b border-white/5 relative z-10">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-semibold text-gray-500 tracking-widest mb-10">MY JOURNEY</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 mb-2">2024</div>
                            <p className="text-gray-400 text-sm">Building Since</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-2">500+</div>
                            <p className="text-gray-400 text-sm">Hours Coded</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-2">100%</div>
                            <p className="text-gray-400 text-sm">Dedication</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-2">YOU</div>
                            <p className="text-gray-400 text-sm">My Next Client</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST BADGES */}
            <TrustBadges />

            {/* HORIZONTAL SCROLL SECTION WITH GSAP */}
            <section ref={containerRef} className="h-screen w-screen overflow-x-auto">
                <div ref={slidesRef} className="h-full flex">
                    {/* SERVICE 1: CUSTOM WEBSITES */}
                    <div className="service-tile min-w-[90vw] md:min-w-[600px] h-screen flex items-center justify-center p-4 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-[380px] md:max-w-xl relative group"
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

                            <div className="relative bg-[#030712]/90 md:bg-gradient-to-br md:from-white/[0.15] md:via-white/[0.08] md:to-white/[0.05] md:backdrop-blur-2xl rounded-[2rem] p-6 md:p-12 border border-white/20 md:border-white/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_80px_-15px_rgba(6,182,212,0.4)] transition-all duration-700 overflow-hidden">
                                {/* Decorative gradient orb */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />

                                {/* Service number badge */}
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/30 mb-8">
                                    <span className="text-cyan-400 font-black text-xl">01</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-300 tracking-tighter leading-none">
                                    Custom<br />Websites
                                </h2>

                                <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-light">
                                    Modern, responsive websites built with cutting-edge tech. From landing pages to full web apps.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-12">
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
                                        <Clock className="w-5 h-5 text-cyan-400" />
                                        <span className="text-sm font-medium text-gray-300">2-3 weeks delivery</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-cyan-500/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
                                        <Calendar className="w-5 h-5 text-cyan-400" />
                                        <span className="text-sm font-medium text-gray-300">Free revisions</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center text-cyan-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Responsive Design
                                    </li>
                                    <li className="flex items-center text-cyan-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        SEO Optimized
                                    </li>
                                    <li className="flex items-center text-cyan-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Hosting Setup Included
                                    </li>
                                </ul>

                                <a href="#contact">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center">
                                            Get Started
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 2: AI VOICE AGENTS */}
                    <div className="service-tile min-w-[90vw] md:min-w-[600px] h-screen flex items-center justify-center p-4 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-[380px] md:max-w-xl relative group"
                            whileHover={{
                                rotateY: 3,
                                rotateX: 3,
                                scale: 1.01
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-purple-400/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative bg-[#030712]/90 md:bg-gradient-to-br md:from-white/[0.15] md:via-white/[0.08] md:to-white/[0.05] md:backdrop-blur-2xl rounded-[2rem] p-6 md:p-12 border border-white/20 md:border-white/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_80px_-15px_rgba(168,85,247,0.4)] transition-all duration-700 overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl" />

                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 mb-8">
                                    <span className="text-purple-400 font-black text-xl">02</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-300 tracking-tighter leading-none">
                                    AI Voice<br />Agents
                                </h2>

                                <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-light">
                                    Intelligent voice assistants that handle calls, bookings, and customer support 24/7.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-12">
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                                        <Clock className="w-5 h-5 text-purple-400" />
                                        <span className="text-sm font-medium text-gray-300">1-2 weeks setup</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                                        <Calendar className="w-5 h-5 text-purple-400" />
                                        <span className="text-sm font-medium text-gray-300">Custom training</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center text-purple-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Natural Conversations
                                    </li>
                                    <li className="flex items-center text-purple-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Multi-language Support
                                    </li>
                                    <li className="flex items-center text-purple-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        CRM Integration
                                    </li>
                                </ul>

                                <a href="#contact">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center">
                                            Get Started
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 3: WHATSAPP AUTOMATION */}
                    <div className="service-tile min-w-[90vw] md:min-w-[600px] h-screen flex items-center justify-center p-4 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-[380px] md:max-w-xl relative group"
                            whileHover={{
                                rotateY: 3,
                                rotateX: 3,
                                scale: 1.01
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 via-green-400/20 to-green-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative bg-[#030712]/90 md:bg-gradient-to-br md:from-white/[0.15] md:via-white/[0.08] md:to-white/[0.05] md:backdrop-blur-2xl rounded-[2rem] p-6 md:p-12 border border-white/20 md:border-white/30 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_80px_-15px_rgba(34,197,94,0.4)] transition-all duration-700 overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-green-500/10 to-transparent rounded-full blur-3xl" />

                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 mb-8">
                                    <span className="text-green-400 font-black text-xl">03</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-heading font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-300 tracking-tighter leading-none">
                                    WhatsApp<br />Automation
                                </h2>

                                <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-light">
                                    Automate customer support, sales, and notifications on the world's most popular messaging platform.
                                </p>

                                <div className="flex flex-wrap items-center gap-6 mb-12">
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm">
                                        <Clock className="w-5 h-5 text-green-400" />
                                        <span className="text-sm font-medium text-gray-300">1 week integration</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-green-500/10 border border-green-500/20 rounded-xl backdrop-blur-sm">
                                        <Calendar className="w-5 h-5 text-green-400" />
                                        <span className="text-sm font-medium text-gray-300">Unlimited messages</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-12">
                                    <li className="flex items-center text-green-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Auto-responses
                                    </li>
                                    <li className="flex items-center text-green-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Lead Qualification
                                    </li>
                                    <li className="flex items-center text-green-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-green-500/20 border border-green-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Analytics Dashboard
                                    </li>
                                </ul>

                                <a href="#contact">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-300">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <span className="relative flex items-center">
                                            Get Started
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <ProcessSection />

            {/* SECTION 3: CONTACT */}
            <section
                id="contact"
                className="h-screen w-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black to-[#050505]"
            >
                <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 max-w-4xl w-full flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <h2 className="text-5xl font-heading font-bold text-white mb-6">Ready to Start?<br />Let's Talk.</h2>
                        <p className="text-gray-400 mb-6">Book a free 30-minute consultation. No commitment required.</p>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-400">
                                <CheckCircle className="mr-3 h-6 w-6 text-cyan-500" />
                                <span>Free 30-min Strategy Call</span>
                            </div>
                            <div className="flex items-center text-gray-400">
                                <CheckCircle className="mr-3 h-6 w-6 text-cyan-500" />
                                <span>Detailed Implementation Roadmap</span>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                            <p className="text-sm text-gray-400 mb-2">Need to talk now?</p>
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
        </div>
    );
}
