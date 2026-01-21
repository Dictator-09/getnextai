"use client";

import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, Cloud, Palette, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            if (!container) return;

            const scrollWidth = container.scrollWidth;
            const viewportWidth = window.innerWidth;
            const xMovement = -(scrollWidth - viewportWidth);

            gsap.to(container, {
                x: xMovement,
                ease: "none",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    pin: true,
                    scrub: 1, // Smooth scrub
                    // end: bottom of the trigger + custom scroll length
                    // We make it scroll for 3000px or related to width for a comfortable pace
                    end: "+=3000",
                    anticipatePin: 1
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="case-studies" className="relative overflow-hidden bg-[#030305]">
            <div ref={triggerRef} className="h-screen flex items-center overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[#030305]" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00C9A7]/20 to-transparent" />

                {/* Header Overlay (Fixed position relative to pin) */}
                <div className="absolute top-24 left-0 w-full z-10 text-center pointer-events-none">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                            Past Deployments
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                        System <span className="text-white/40">Performance</span>
                    </h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    ref={containerRef}
                    className="flex gap-20 px-4 md:px-24 w-max items-center h-full pt-32 will-change-transform"
                >
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className="case-study-card w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0">
                            <CaseStudyCard study={study} index={index} />
                        </div>
                    ))}

                    {/* Final CTA Card */}
                    <div className="case-study-card w-[85vw] md:w-[60vw] lg:w-[40vw] flex-shrink-0 flex items-center justify-center">
                        <div className="text-center">
                            <p className="font-mono text-white/30 text-xs uppercase tracking-widest mb-6">
                                Ready to deploy your system?
                            </p>
                            <a href="/audit" className="inline-block pointer-events-auto">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-white text-black font-display font-bold rounded-full text-lg hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                                >
                                    Initiate Audit
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
