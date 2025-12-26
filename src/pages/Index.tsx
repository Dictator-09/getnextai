import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / docHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolate between colors based on scroll
  // Start: deep dark (240 20% 4%) -> Mid: purple-tinted -> End: deeper purple
  const hue = 240 + scrollProgress * 40; // 240 -> 280
  const saturation = 20 + scrollProgress * 15; // 20% -> 35%
  const lightness = 4 + scrollProgress * 3; // 4% -> 7%

  return (
    <motion.div 
      className="min-h-screen transition-colors duration-300"
      style={{
        backgroundColor: `hsl(${hue} ${saturation}% ${lightness}%)`,
      }}
    >
      {/* Scroll-based gradient overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at 50% ${30 + scrollProgress * 40}%, hsl(${190 + scrollProgress * 90} 80% 50% / ${0.05 + scrollProgress * 0.08}) 0%, transparent 60%)`,
        }}
      />
      
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
    </motion.div>
  );
};

export default Index;
