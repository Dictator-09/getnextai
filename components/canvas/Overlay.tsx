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
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light mb-8 max-w-2xl mx-auto">
                            The Agency for the <span className="text-cyan-600 dark:text-cyan-400 font-bold">Post-Labor Economy</span>.
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
            <section className="py-20 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-t border-b border-black/5 dark:border-white/5 relative z-10 transition-colors duration-500">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-sm font-semibold text-gray-400 tracking-widest mb-10">MY JOURNEY</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 dark:from-cyan-400 dark:to-cyan-600 mb-2">2024</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Building Since</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-400 dark:to-purple-600 mb-2">500+</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Hours Coded</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-600 mb-2">100%</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">Dedication</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-yellow-400 dark:to-yellow-600 mb-2">YOU</div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">My Next Client</p>
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
                                        className="text-4xl md:text-6xl font-heading font-black mb-12 tracking-tighter leading-none"
                                    >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Custom</span>
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">Websites</span>
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                        className="text-gray-300 text-base md:text-lg mb-12 leading-relaxed font-light max-w-sm"
                                    >
                                        Performance-driven digital experiences. We build fast, responsive, and SEO-ready websites that convert visitors into clients.
                                    </motion.p>
                                </div>

                                <ul className="space-y-6 mb-16">
                                    <li className="flex items-center text-cyan-600 dark:text-cyan-300 text-lg font-medium">
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
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:shadow-[0_0_50px_rgba(6,182,212,0.5)] transition-all duration-500 ease-out">
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                        <span className="relative flex items-center">
                                            Get Started
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 2: AI VOICE AGENTS */}
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
                                    className="text-4xl md:text-6xl font-heading font-black mb-12 tracking-tighter leading-none"
                                >
                                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">AI Voice</span>
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Agents</span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                    className="text-gray-300 text-base md:text-lg mb-12 leading-relaxed font-light max-w-sm"
                                >
                                    Intelligent voice assistants that sound human. Handle support calls, bookings, and inquiries 24/7 without lifting a finger.
                                </motion.p>

                                <div className="flex flex-wrap items-center gap-6 mb-16">
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                                        <Clock className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">1-2 weeks setup</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-purple-500/10 border border-purple-500/20 rounded-xl backdrop-blur-sm">
                                        <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                                        <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Custom training</span>
                                    </div>
                                </div>

                                <ul className="space-y-6 mb-16">
                                    <li className="flex items-center text-purple-600 dark:text-purple-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Natural Conversations
                                    </li>
                                    <li className="flex items-center text-purple-600 dark:text-purple-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        Multi-language Support
                                    </li>
                                    <li className="flex items-center text-purple-600 dark:text-purple-300 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center mr-4">
                                            <CheckCircle className="w-5 h-5" />
                                        </div>
                                        CRM Integration
                                    </li>
                                </ul>

                                <a href="#contact">
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-500 ease-out">
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                        <span className="relative flex items-center">
                                            Get Started
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 3: WHATSAPP AUTOMATION */}
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
                                        className="text-4xl md:text-6xl font-heading font-black mb-12 tracking-tighter leading-none"
                                    >
                                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">WhatsApp</span>
                                        <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Automation</span>
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
                                        className="text-gray-300 text-base md:text-lg mb-12 leading-relaxed font-light max-w-sm"
                                    >
                                        Direct-to-consumer sales and support. Automate 90% of queries and recovery abandoned carts on WhatsApp.
                                    </motion.p>
                                </div>

                                <ul className="space-y-6 mb-16">
                                    <li className="flex items-center text-green-600 dark:text-green-300 text-lg font-medium">
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
                                    <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl text-white font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] transition-all duration-500 ease-out">
                                        <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                        <span className="relative flex items-center">
                                            Get Started
                                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-all duration-500 ease-out" />
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
