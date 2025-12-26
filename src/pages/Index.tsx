import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import CursorSpotlight from '@/components/CursorSpotlight';
import ConsentBanner from '@/components/ConsentModal';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Unified Consent Banner */}
      <ConsentBanner />
      
      {/* Cursor spotlight effect */}
      <CursorSpotlight />
      
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        
        {/* Starry background for lower sections */}
        <div className="relative">
          <StarryBackground />
          <ServicesSection />
          <StatsSection />
          <HowItWorksSection />
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
