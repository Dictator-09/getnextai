import { useEffect, useState, useRef } from 'react';
import { Clock, TrendingDown, Zap, Layers } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

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
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref} 
      className="text-5xl md:text-6xl font-display font-bold gradient-text"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      {count}
      {suffix}
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const StatsSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      {/* Animated background particles */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 100, 0], 
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -80, 0], 
          y: [0, 60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Results That{' '}
            <span className="gradient-text">Speak</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our AI solutions deliver measurable impact for businesses of all sizes.
          </motion.p>
        </motion.div>
        
        {/* Stats Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)"
              }}
              className="glass-card p-8 text-center group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Icon */}
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-primary" />
              </motion.div>
              
              {/* Animated Counter */}
              <div className="relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <motion.div 
                className="text-lg font-semibold text-foreground mt-2 mb-2 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {stat.label}
              </motion.div>
              
              {/* Description */}
              <motion.div 
                className="text-sm text-muted-foreground relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {stat.description}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
