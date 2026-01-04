import { motion } from 'framer-motion';
import { ArrowLeft, Cookie, Info, Settings, BarChart3, Shield, ToggleRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const CookiePolicy = () => {
  const sections = [
    {
      icon: Info,
      title: "1. What Are Cookies?",
      content: "Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and enabling certain features to work properly."
    },
    {
      icon: Cookie,
      title: "2. Types of Cookies We Use",
      content: "We use the following categories of cookies on our website:",
      list: [
        "Essential Cookies: These are necessary for the website to function properly. They enable core features like security, network management, and accessibility. You cannot opt out of these cookies.",
        "Analytics Cookies: These help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our site's performance and user experience.",
        "Functional Cookies: These allow our website to remember choices you make (such as your language preference or region) and provide enhanced, personalized features.",
        "Marketing Cookies: These are used to track visitors across websites to display relevant advertisements. They help us measure the effectiveness of our marketing campaigns."
      ]
    },
    {
      icon: Settings,
      title: "3. Third-Party Cookies",
      content: "Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Third parties that may set cookies include:",
      list: [
        "Google Analytics: For website traffic analysis and user behavior insights.",
        "Social Media Platforms: LinkedIn, Twitter, and Instagram plugins may set cookies when you interact with share buttons.",
        "Payment Processors: If you make payments through our site, payment providers may use cookies for security and fraud prevention."
      ]
    },
    {
      icon: BarChart3,
      title: "4. How We Use Cookie Data",
      content: "The information collected through cookies is used to:",
      list: [
        "Ensure our website operates correctly and securely.",
        "Analyze website traffic and usage patterns to improve our services.",
        "Remember your preferences and settings for future visits.",
        "Deliver personalized content and relevant advertisements.",
        "Measure the effectiveness of our marketing efforts."
      ]
    },
    {
      icon: ToggleRight,
      title: "5. Managing Your Cookie Preferences",
      content: "You have control over how cookies are used on your device:",
      list: [
        "Browser Settings: Most web browsers allow you to control cookies through their settings. You can block or delete cookies, though this may affect website functionality.",
        "Opt-Out Tools: For analytics and advertising cookies, you can use tools like Google's Opt-Out Browser Add-on or the Network Advertising Initiative's opt-out page.",
        "Cookie Banner: When you first visit our site, you can choose which optional cookies to accept through our cookie consent banner.",
        "Withdraw Consent: You can change your cookie preferences at any time by clearing your browser cookies and revisiting our site."
      ]
    },
    {
      icon: Shield,
      title: "6. Data Protection & Retention",
      content: "Cookie data is handled in accordance with our Privacy Policy and applicable data protection laws:",
      list: [
        "Session cookies are deleted when you close your browser.",
        "Persistent cookies remain on your device for a set period (typically 1-12 months) or until you delete them.",
        "We do not use cookies to collect sensitive personal information without your explicit consent.",
        "All cookie data is processed in compliance with the Digital Personal Data Protection Act (DPDPA), 2023."
      ]
    },
    {
      icon: Info,
      title: "7. Updates to This Policy",
      content: "We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We encourage you to review this page periodically for the latest information on our cookie practices. The \"Last Updated\" date at the top indicates when the policy was last revised."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <Logo size="md" />
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
            >
              <Cookie className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated: December 2025
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-card/50 border border-border rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-display font-semibold text-foreground mb-3">
                      {section.title}
                    </h2>
                    {section.content && (
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {section.content}
                      </p>
                    )}
                    {section.list && (
                      <ul className="space-y-3">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10"
          >
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              Questions about our Cookie Policy?
            </h3>
            <p className="text-muted-foreground mb-4">
              Contact us at{' '}
              <a href="mailto:getnextai@gmail.com" className="text-primary hover:underline">
                getnextai@gmail.com
              </a>
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Homepage
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default CookiePolicy;
