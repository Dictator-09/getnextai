import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Business Websites', href: '#services' },
      { name: 'AI Voice Agents', href: '#services' },
      { name: 'WhatsApp Automation', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
      { name: 'Terms of Service', href: '/terms-of-service', isRoute: true },
      { name: 'Cookie Policy', href: '/cookie-policy', isRoute: true },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-card/50 border-t border-border relative overflow-hidden">
      {/* Subtle background glow */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-48 bg-primary/5 rounded-full blur-3xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.a 
              href="#" 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <Logo size="md" />
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Empowering businesses with intelligent automation solutions. Transform your operations with cutting-edge AI technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.a 
                href="mailto:support@getnextai.tech" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                support@getnextai.tech
              </motion.a>
              <motion.a 
                href="tel:+919568356026" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                +91 9568356026
              </motion.a>
              <motion.a 
                href="tel:+918527706626" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                +91 8527706626
              </motion.a>
              <motion.div 
                className="flex items-center gap-3 text-muted-foreground"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4" />
                New Delhi, India
              </motion.div>
            </div>
          </motion.div>
          
          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Legal Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.isRoute ? (
                    <motion.div whileHover={{ x: 5 }}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors inline-block"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-block"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} GetNextAI. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
