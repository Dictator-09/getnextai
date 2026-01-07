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
            <section ref={containerRef} className="h-screen w-screen overflow-hidden">
                <div ref={slidesRef} className="h-full flex">
                    {/* SERVICE 1: CUSTOM WEBSITES */}
                    <div className="service-tile min-w-[100vw] h-screen flex items-center justify-center p-8 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-4xl"
                            whileHover={{
                                rotateY: 5,
                                rotateX: 5,
                                scale: 1.02
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2rem] p-12 md:p-16 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_0_rgba(6,182,212,0.3)] transition-all duration-500">
                                <h2 className="text-6xl md:text-7xl font-heading font-black mb-6 text-white tracking-tight">Custom Websites</h2>
                                <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                                    Modern, responsive websites built with cutting-edge tech. From landing pages to full web apps.
                                </p>
                                <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-cyan-400" />
                                        <span>2-3 weeks delivery</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-cyan-400" />
                                        <span>Free revisions</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-10">
                                    <li className="flex items-center text-cyan-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> Responsive Design</li>
                                    <li className="flex items-center text-cyan-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> SEO Optimized</li>
                                    <li className="flex items-center text-cyan-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> Hosting Setup Included</li>
                                </ul>
                                <a href="#contact">
                                    <button className="group flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/50 rounded-xl text-white font-semibold hover:from-cyan-500/30 hover:to-cyan-600/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 2: AI VOICE AGENTS */}
                    <div className="service-tile min-w-[100vw] h-screen flex items-center justify-center p-8 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-4xl"
                            whileHover={{
                                rotateY: 5,
                                rotateX: 5,
                                scale: 1.02
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2rem] p-12 md:p-16 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_0_rgba(168,85,247,0.3)] transition-all duration-500">
                                <h2 className="text-6xl md:text-7xl font-heading font-black mb-6 text-white tracking-tight">AI Voice Agents</h2>
                                <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                                    Intelligent voice assistants that handle calls, bookings, and customer support 24/7.
                                </p>
                                <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-purple-400" />
                                        <span>1-2 weeks setup</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-purple-400" />
                                        <span>Custom training</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-10">
                                    <li className="flex items-center text-purple-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> Natural Conversations</li>
                                    <li className="flex items-center text-purple-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> Multi-language Support</li>
                                    <li className="flex items-center text-purple-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> CRM Integration</li>
                                </ul>
                                <a href="#contact">
                                    <button className="group flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/50 rounded-xl text-white font-semibold hover:from-purple-500/30 hover:to-purple-600/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* SERVICE 3: WHATSAPP AUTOMATION */}
                    <div className="service-tile min-w-[100vw] h-screen flex items-center justify-center p-8 flex-shrink-0">
                        <motion.div
                            className="w-full max-w-4xl"
                            whileHover={{
                                rotateY: 5,
                                rotateX: 5,
                                scale: 1.02
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[2rem] p-12 md:p-16 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:shadow-[0_8px_48px_0_rgba(34,197,94,0.3)] transition-all duration-500">
                                <h2 className="text-6xl md:text-7xl font-heading font-black mb-6 text-white tracking-tight">WhatsApp Automation</h2>
                                <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
                                    Automate customer support, sales, and notifications on the world's most popular messaging platform.
                                </p>
                                <div className="flex items-center gap-4 mb-8 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-green-400" />
                                        <span>1 week integration</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-green-400" />
                                        <span>Unlimited messages</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 mb-10">
                                    <li className="flex items-center text-green-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> Auto-responses</li>
                                    <li className="flex items-center text-green-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> Lead Qualification</li>
                                    <li className="flex items-center text-green-400 text-lg"><CheckCircle className="mr-3 h-6 w-6" /> Analytics Dashboard</li>
                                </ul>
                                <a href="#contact">
                                    <button className="group flex items-center px-6 py-3 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/50 rounded-xl text-white font-semibold hover:from-green-500/30 hover:to-green-600/30 hover:border-green-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                        Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
