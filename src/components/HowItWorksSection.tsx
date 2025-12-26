import { MessageSquare, Settings, Rocket, ChartBar } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description: 'We analyze your business needs and identify automation opportunities that will have the biggest impact.',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Custom Setup',
    description: 'Our team builds and configures your AI solutions tailored to your specific workflows and brand voice.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Launch',
    description: 'We deploy your automated systems with seamless integration into your existing business operations.',
  },
  {
    icon: ChartBar,
    number: '04',
    title: 'Optimize',
    description: 'Continuous monitoring and improvements ensure your AI systems deliver maximum ROI over time.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Simple Steps to{' '}
            <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get started with AI-powered automation in just a few simple steps.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent hidden md:block" />
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex gap-8 group"
                >
                  {/* Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500">
                      <span className="font-display font-bold text-primary text-lg">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="glass-card-hover p-8 flex-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
