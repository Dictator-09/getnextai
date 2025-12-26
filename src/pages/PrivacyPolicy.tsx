import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Database, Eye, Lock, Users, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Shield,
      title: "1. Introduction",
      content: "Welcome to GetNextAI. We provide cutting-edge AI Voice Agent solutions and professional web design services. We are committed to protecting your personal data and ensuring transparency in how we process it. This policy is designed to comply with the Digital Personal Data Protection Act (DPDPA), 2023, and the DPDP Rules, 2025."
    },
    {
      icon: Database,
      title: "2. Data We Collect",
      content: "We collect only the information necessary to provide our services:",
      list: [
        "Contact Information: Name, email, phone number, and business details.",
        "Voice Data: Audio recordings and text transcripts processed by our AI Voice Agents during inbound or outbound calls.",
        "Technical Data: IP addresses, browser types, device identifiers, and website interaction logs.",
        "Client Data: Any data provided to us for the purpose of building your website or training your specific AI agent."
      ]
    },
    {
      icon: Eye,
      title: "3. How We Use Your Data (Purpose of Processing)",
      content: "We process your data based on your explicit consent for the following purposes:",
      list: [
        "Service Delivery: To operate AI Voice Agents, book appointments, and send requested business brochures.",
        "Web Design: To create, host, and maintain your custom website.",
        "Communication: To send service updates, security alerts, and promotional content (with your opt-in).",
        "AI Optimization: To improve the accuracy of our voice recognition and Hinglish/Hindi language models (data is anonymized where possible)."
      ]
    },
    {
      icon: Users,
      title: "4. AI Disclosure & Transparency",
      content: "In accordance with the AI Governance Guidelines 2025, we ensure that:",
      list: [
        "Our Voice Agents clearly identify themselves as AI at the start of every call.",
        "Users are informed that the conversation is being recorded for processing."
      ]
    },
    {
      icon: Lock,
      title: "5. Your Rights as a Data Principal",
      content: "Under the DPDPA, you have the following rights:",
      list: [
        "Right to Access: Request a summary of the personal data we hold about you.",
        "Right to Correction: Update or correct any inaccurate personal data.",
        "Right to Erasure: Request the deletion of your data once the purpose of collection is fulfilled.",
        "Right to Withdraw Consent: You may withdraw your consent at any time as easily as it was given."
      ]
    },
    {
      icon: Shield,
      title: "6. Data Retention & Security",
      content: "",
      list: [
        "Retention: We retain data only as long as necessary. However, as per Indian Telecom and DPDP Rules 2025, we are required to maintain traffic logs and processing records for at least one year.",
        "Security: We implement robust technical measures, including End-to-End Encryption (E2EE) for voice data and secure cloud storage, to prevent unauthorized access or breaches."
      ]
    },
    {
      icon: Share2,
      title: "7. Third-Party Sharing",
      content: "We do not sell your data. We share data only with trusted service providers (e.g., Vapi, Twilio, or AWS) necessary to run our infrastructure. These partners are contractually bound to the same data protection standards."
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
              <Shield className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Privacy Policy
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
              Questions about our Privacy Policy?
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

export default PrivacyPolicy;
