import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Briefcase, Lightbulb, Shield, CreditCard, AlertTriangle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const TermsOfService = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: "By accessing our website or using the services of GetNextAI (\"Company,\" \"we,\" \"us\"), you agree to be bound by these Terms. If you are agreeing on behalf of a business, you represent that you have the authority to bind that entity to these terms."
    },
    {
      icon: Briefcase,
      title: "2. Scope of Services",
      content: "",
      list: [
        "Web Design: We provide custom website design and development. Deliverables are specified in individual project quotes.",
        "AI Voice Agents: We provide AI-driven voice assistants for inbound and outbound communication. These services rely on third-party infrastructure (e.g., Vapi, Retell AI)."
      ]
    },
    {
      icon: Lightbulb,
      title: "3. Intellectual Property (IP) Rights",
      content: "",
      list: [
        "Web Design Deliverables: Upon full payment, the final website design, code, and content are considered \"Work Made For Hire\" and ownership is transferred to the Client.",
        "AI Technology: GetNextAI retains all rights to the underlying proprietary algorithms, \"prompts,\" and custom-trained models used to power the Voice Agents. Clients are granted a non-exclusive license to use these agents during the subscription term.",
        "Pre-existing Assets: Each party retains ownership of its pre-existing IP (e.g., your business logo, our internal tools)."
      ]
    },
    {
      icon: Shield,
      title: "4. Ethical Use & AI Compliance",
      content: "As a user of our AI services, you agree to:",
      list: [
        "Identification: Ensure all AI Voice Agents identify themselves as \"Artificial Intelligence\" at the beginning of every call.",
        "No Impersonation: You shall not use our services to \"clone\" or impersonate real individuals without their explicit written consent.",
        "Legal Calling: You are solely responsible for complying with TRAI/DLT regulations in India or TCPA/GDPR abroad, including obtaining consent from recipients before placing automated calls."
      ]
    },
    {
      icon: CreditCard,
      title: "5. Payments, Fees, & Refunds",
      content: "",
      list: [
        "Billing: Web projects require a 50% upfront deposit. AI services are billed on a monthly subscription or pay-per-minute basis.",
        "Late Payments: Payments delayed beyond 15 days may result in immediate suspension of AI services.",
        "Refunds: Due to the costs associated with AI computation and labor, all payments are non-refundable once work has commenced or AI minutes have been consumed."
      ]
    },
    {
      icon: AlertTriangle,
      title: "6. Limitation of Liability",
      content: "",
      list: [
        "AI Outputs: You acknowledge that AI can occasionally generate incorrect or \"hallucinated\" information. GetNextAI is not liable for business decisions made based on AI-generated outputs.",
        "Service Uptime: While we aim for 99.9% uptime, we are not responsible for outages caused by third-party cloud providers (AWS, Vercel) or telecommunication networks.",
        "Maximum Liability: Our total liability for any claim shall not exceed the amount paid by you to us in the three months preceding the claim."
      ]
    },
    {
      icon: XCircle,
      title: "7. Termination",
      content: "",
      list: [
        "By Client: You may terminate your subscription at any time via your dashboard.",
        "By GetNextAI: We reserve the right to terminate access immediately if we detect any use of our AI for fraud, harassment, or illegal activities."
      ]
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
              <FileText className="w-8 h-8 text-primary" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Terms of Service
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
              Questions about our Terms of Service?
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

export default TermsOfService;
