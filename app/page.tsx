"use client";

import HeroSection from "@/components/ui/HeroSection";
import Providers from "./providers";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import FadeIn from "@/components/ui/FadeIn";
import SystemModules from "@/components/ui/SystemModules";
import AccessRequest from "@/components/ui/AccessRequest";
import TrustBadges from "@/components/ui/TrustBadges";
import CaseStudies from "@/components/ui/CaseStudies";
import ProcessSection from "@/components/ui/ProcessSection";
import GlobalPresence from "@/components/ui/GlobalPresence";
import TechStack from "@/components/ui/TechStack";
import StickyAuditCTA from "@/components/ui/StickyAuditCTA";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  // Lenis is now handled by SmoothScrollProvider in app/providers.tsx

  return (
    <Providers>
      {/* SCROLL PROGRESS */}
      <ScrollProgress />

      {/* NEW HERO */}
      <HeroSection />

      {/* MAIN CONTENT */}
      <Navbar />

      <FadeIn className="relative z-10">
        <TrustBadges />
      </FadeIn>

      <div className="relative z-10">
        <SystemModules />
      </div>

      <FadeIn className="relative z-10">
        <CaseStudies />
      </FadeIn>

      <FadeIn className="relative z-10">
        <ProcessSection />
      </FadeIn>

      <FadeIn className="relative z-10">
        <GlobalPresence />
      </FadeIn>

      <FadeIn className="relative z-10">
        <TechStack />
      </FadeIn>

      <div className="relative z-10">
        <AccessRequest />
      </div>

      <Footer />
      <StickyAuditCTA />
    </Providers>
  );
}
