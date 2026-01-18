"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useSpring } from "framer-motion";
import HeroStatic from "./hero/HeroStatic";
import HeroClient from "./hero/HeroClient";
import Providers from "./providers";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import SectionTransition from "@/components/ui/SectionTransition";
import SystemModules from "@/components/ui/SystemModules";
import AccessRequest from "@/components/ui/AccessRequest";
import TrustBadges from "@/components/ui/TrustBadges";
import CaseStudies from "@/components/ui/CaseStudies";
import ProcessSection from "@/components/ui/ProcessSection";
import GlobalPresence from "@/components/ui/GlobalPresence";
import TechStack from "@/components/ui/TechStack";
import StickyAuditCTA from "@/components/ui/StickyAuditCTA";

export default function Home() {
  const lenisRef = useRef<Lenis | null>(null);
  const { scrollYProgress } = useScroll();
  const [percentage, setPercentage] = useState(0);

  // Spring physics for scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Update percentage
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setPercentage(Math.round(v * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Providers>
      {/* TOP PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#B8FF00] transform origin-left z-[9999]"
        style={{ scaleX }}
      />

      {/* CIRCULAR PROGRESS - bottom left */}
      <motion.div
        className="fixed bottom-8 left-8 w-14 h-14 z-50 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="28"
            cy="28"
            r="24"
            stroke="rgba(184, 255, 0, 0.1)"
            strokeWidth="2"
            fill="none"
          />
          <motion.circle
            cx="28"
            cy="28"
            r="24"
            stroke="#B8FF00"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-[#B8FF00] text-xs font-mono font-bold">
          {percentage}%
        </div>
      </motion.div>

      {/* HERO FIRST */}
      <HeroStatic />
      <HeroClient />

      {/* MAIN CONTENT */}
      <Navbar />

      <SectionTransition depth="shallow" overlap={false}>
        <TrustBadges />
      </SectionTransition>

      <SectionTransition depth="deep">
        <SystemModules />
      </SectionTransition>

      <SectionTransition depth="medium">
        <CaseStudies />
      </SectionTransition>

      <SectionTransition depth="medium">
        <ProcessSection />
      </SectionTransition>

      <SectionTransition depth="shallow">
        <GlobalPresence />
      </SectionTransition>

      <SectionTransition depth="shallow">
        <TechStack />
      </SectionTransition>

      <SectionTransition depth="deep">
        <AccessRequest />
      </SectionTransition>

      <Footer />
      <StickyAuditCTA />
    </Providers>
  );
}
