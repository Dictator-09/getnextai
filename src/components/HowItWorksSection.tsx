import { MessageSquare, Settings, Rocket, ChartBar } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.span>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple Steps to{' '}
            <span className="gradient-text">Automation</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get started with AI-powered automation in just a few simple steps.
          </motion.p>
        </motion.div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <motion.div 
              className="absolute left-8 top-0 bottom-0 w-px hidden md:block overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
                initial={{ scaleY: 0, transformOrigin: "top" }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex gap-8 group"
                >
                  {/* Number Circle */}
                  <motion.div 
                    className="flex-shrink-0 relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-500 relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        delay: index * 0.2 + 0.3 
                      }}
                    >
                      {/* Pulse ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border-2 border-primary/50"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <span className="font-display font-bold text-primary text-lg">
                        {step.number}
                      </span>
                    </motion.div>
                  </motion.div>
                  
                  {/* Content Card */}
                  <motion.div 
                    className="glass-card-hover p-8 flex-1"
                    whileHover={{ 
                      x: 10, 
                      boxShadow: "0 20px 40px -15px hsl(var(--primary) / 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="font-display text-xl font-bold text-foreground mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.4 }}
                        >
                          {step.title}
                        </motion.h3>
                        <motion.p 
                          className="text-muted-foreground leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.5 }}
                        >
                          {step.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
