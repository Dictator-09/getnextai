import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CinematicHero from "@/components/hero/CinematicHero";
import SectionTransition from "@/components/ui/SectionTransition";
import SystemModules from "@/components/ui/SystemModules";
import AccessRequest from "@/components/ui/AccessRequest";
import TrustBadges from "@/components/ui/TrustBadges";
import CaseStudies from "@/components/ui/CaseStudies";
import ProcessSection from "@/components/ui/ProcessSection";
import GlobalPresence from "@/components/ui/GlobalPresence";
import TechStack from "@/components/ui/TechStack";
import StickyAuditCTA from "@/components/ui/StickyAuditCTA";

export default function Overlay() {
    return (
        <div className="w-full z-20 safe-top">
            <Navbar />

            {/* CINEMATIC HERO SECTION */}
            <CinematicHero />

            {/* TRUST BADGES - Subtle transition */}
            <SectionTransition depth="shallow" overlap={false}>
                <TrustBadges />
            </SectionTransition>

            {/* SYSTEM MODULES - Deep descend */}
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
        </div>
    );
}
