"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
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

    // Animation frame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Providers>
      {/* HERO FIRST - SSR critical */}
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
