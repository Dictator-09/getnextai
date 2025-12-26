import { useEffect, useState, useRef } from 'react';
import { Clock, TrendingDown, Zap, Layers } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Availability',
    description: 'Your AI agents never sleep',
  },
  {
    icon: TrendingDown,
    value: 60,
    suffix: '%',
    label: 'Cost Reduction',
    description: 'Average savings on operations',
  },
  {
    icon: Zap,
    value: 10,
    suffix: 'x',
    label: 'Faster Response',
    description: 'Instant customer engagement',
  },
  {
    icon: Layers,
    value: 100,
    suffix: '%',
    label: 'Scalable',
    description: 'Grows with your business',
  },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-display font-bold gradient-text">
      {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Results That{' '}
            <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI solutions deliver measurable impact for businesses of all sizes.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Animated Counter */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              
              {/* Label */}
              <div className="text-lg font-semibold text-foreground mt-2 mb-2">
                {stat.label}
              </div>
              
              {/* Description */}
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
