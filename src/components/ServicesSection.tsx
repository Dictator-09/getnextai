import { Globe, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Custom, responsive websites built to convert visitors into customers. Modern designs that showcase your brand and drive results.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Analytics Integration'],
  },
  {
    icon: Phone,
    title: 'AI Voice Agents',
    description: '24/7 intelligent voice assistants that handle customer calls, book appointments, and answer inquiries with human-like conversations.',
    features: ['24/7 Availability', 'Natural Conversations', 'Appointment Booking', 'Multi-language Support'],
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Automation',
    description: 'Automate customer engagement on WhatsApp with smart responses, marketing campaigns, and seamless support workflows.',
    features: ['Auto Responses', 'Marketing Campaigns', 'Customer Segmentation', 'Real-time Analytics'],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive AI-powered solutions designed to automate, optimize, and grow your business operations.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Title */}
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
