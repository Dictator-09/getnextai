import { Button } from '@/components/ui/button';
import ParticleField from './ParticleField';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Particle Field */}
      <ParticleField />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">AI-Powered Business Solutions</span>
          </div>
          
          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-up leading-tight">
            Transform Your Business with{' '}
            <span className="gradient-text glow-text">Intelligent Automation</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-up-delayed leading-relaxed">
            Custom websites, AI voice agents, and WhatsApp automation — 
            everything you need to scale your business 24/7
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="group">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Book a Demo
            </Button>
          </div>
          
          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-up" style={{ animationDelay: '0.6s' }}>
            {[
              { value: '500+', label: 'Businesses Automated' },
              { value: '99.9%', label: 'Uptime Guaranteed' },
              { value: '24/7', label: 'AI Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
