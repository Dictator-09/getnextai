import HeroStatic from "./hero/HeroStatic";
import HeroClient from "./hero/HeroClient";
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

// Static generation
export const revalidate = false;

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* HERO MUST BE FIRST */}
      <section className="relative">
        <HeroStatic />      {/* SSR-critical */}
        <HeroClient />      {/* client-only motion */}
      </section>

      {/* CLIENT UI COMES AFTER */}
      <Navbar />

      {/* TRUST BADGES */}
      <SectionTransition depth="shallow" overlap={false}>
        <TrustBadges />
      </SectionTransition>

      {/* SYSTEM MODULES */}
      <SectionTransition depth="deep">
        <SystemModules />
      </SectionTransition>

      {/* CASE STUDIES */}
      <SectionTransition depth="medium">
        <CaseStudies />
      </SectionTransition>

      {/* PROCESS SECTION */}
      <SectionTransition depth="medium">
        <ProcessSection />
      </SectionTransition>

      {/* GLOBAL PRESENCE */}
      <SectionTransition depth="shallow">
        <GlobalPresence />
      </SectionTransition>

      {/* TECH STACK */}
      <SectionTransition depth="shallow">
        <TechStack />
      </SectionTransition>

      {/* ACCESS REQUEST (Booking) */}
      <SectionTransition depth="deep">
        <AccessRequest />
      </SectionTransition>

      <Footer />

      {/* STICKY CTA */}
      <StickyAuditCTA />
    </main>
  );
}
