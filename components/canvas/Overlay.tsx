"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, Mic, MessageSquare, CheckCircle } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const slidesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!slidesRef.current) return;

        const slides = slidesRef.current;

        // Create horizontal scroll animation
        const scrollTween = gsap.to(slides, {
            x: () => -(slides.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${slides.scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            }
        });

        // Animate individual tiles
        const tiles = slides.querySelectorAll('.service-tile');
        tiles.forEach((tile, index) => {
            gsap.fromTo(tile,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: tile,
                        containerAnimation: scrollTween,
                        start: "left center",
                        end: "right center",
                        scrub: 1,
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full z-20">
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
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-white to-purple-500 mb-4">
                            GETNEXT<br />AI
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light mb-8 max-w-2xl mx-auto">
                            The Agency for the <span className="text-cyan-400 font-bold">Post-Labor Economy</span>.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-cyan-500 text-black font-bold rounded-full text-lg shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                        >
                            Initialize Future
                        </motion.button>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 animate-bounce text-gray-500">
                    Scroll to Ascend
                </div>
            </section>

            {/* HORIZONTAL SCROLL SECTION WITH GSAP */}
            <section ref={containerRef} className="h-screen w-screen overflow-hidden">
                <div ref={slidesRef} className="h-full flex">
                    {/* SERVICE 1: CUSTOM WEBSITES */}
                    <div className="service-tile min-w-screen h-screen flex items-center justify-center p-8 flex-shrink-0">
                        <div className="w-full max-w-lg">
                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <h2 className="text-4xl font-bold mb-4 text-white">Custom Websites</h2>
                                <p className="text-gray-400 mb-6">
                                    3D-accelerated, high-performance web experiences that convert. We don't just build sites; we build digital worlds.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center text-cyan-400"><Globe className="mr-2 h-5 w-5" /> 3x Higher Engagement</li>
                                    <li className="flex items-center text-cyan-400"><Globe className="mr-2 h-5 w-5" /> Lightning-Fast Load Times</li>
                                    <li className="flex items-center text-cyan-400"><Globe className="mr-2 h-5 w-5" /> Mobile-First Design</li>
                                </ul>
                                <button className="flex items-center text-white border-b border-cyan-500 pb-1 hover:text-cyan-400 transition-colors">
                                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* SERVICE 2: AI VOICE AGENTS */}
                    <div className="service-tile min-w-screen h-screen flex items-center justify-center p-8 flex-shrink-0">
                        <div className="w-full max-w-lg">
                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <h2 className="text-4xl font-bold mb-4 text-white">AI Voice Agents</h2>
                                <p className="text-gray-400 mb-6">
                                    Replace your call center with intelligent, empathetic AI that works 24/7. Handle thousands of concurrent calls instantly.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center text-purple-400"><Mic className="mr-2 h-5 w-5" /> 80% Cost Reduction</li>
                                    <li className="flex items-center text-purple-400"><Mic className="mr-2 h-5 w-5" /> 24/7 Availability</li>
                                    <li className="flex items-center text-purple-400"><Mic className="mr-2 h-5 w-5" /> Instant Customer Support</li>
                                </ul>
                                <button className="flex items-center text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
                                    Hear Demo <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* SERVICE 3: WHATSAPP AUTOMATION */}
                    <div className="service-tile min-w-screen h-screen flex items-center justify-center p-8 flex-shrink-0">
                        <div className="w-full max-w-lg">
                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
                                <h2 className="text-4xl font-bold mb-4 text-white">WhatsApp Automation</h2>
                                <p className="text-gray-400 mb-6">
                                    Turn your most popular channel into a sales machine. Automated support, sales, and notifications on Autopilot.
                                </p>
                                <ul className="space-y-2 mb-8">
                                    <li className="flex items-center text-green-400"><MessageSquare className="mr-2 h-5 w-5" /> 98% Open Rates</li>
                                    <li className="flex items-center text-green-400"><MessageSquare className="mr-2 h-5 w-5" /> 5x Faster Sales Cycle</li>
                                    <li className="flex items-center text-green-400"><MessageSquare className="mr-2 h-5 w-5" /> Automated Lead Nurturing</li>
                                </ul>
                                <button className="flex items-center text-white border-b border-green-500 pb-1 hover:text-green-400 transition-colors">
                                    Start Chat <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: CONTACT */}
            <section
                className="h-screen w-screen flex flex-col items-center justify-center p-8"
            >
                <div className="bg-black/80 backdrop-blur-xl p-10 rounded-3xl border border-white/10 max-w-4xl w-full flex flex-col md:flex-row gap-10">
                    <div className="flex-1">
                        <h2 className="text-5xl font-bold text-white mb-6">Let's Build<br />The Future.</h2>
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

                    <form className="flex-1 space-y-4">
                        <input type="text" placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                        <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                        <select className="w-full bg-white/5 border border-white/10 rounded-lg p-4 text-gray-400 focus:outline-none focus:border-cyan-500 transition-colors">
                            <option>Select Service</option>
                            <option>Custom Website</option>
                            <option>AI Voice Agent</option>
                            <option>WhatsApp Automation</option>
                        </select>
                        <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity">
                            Send Request
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}
