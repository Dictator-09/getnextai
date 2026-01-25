"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import { FileSearch, Video, Lightbulb, CheckCircle } from "lucide-react";
import AuditForm from "./AuditForm";
import SpotlightCard from "./SpotlightCard";

import { styles } from "./styles/AIAuditSection.styles";

const processSteps = [
    {
        number: "01",
        icon: <FileSearch className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Submit Your Info",
        description: "Share your website and business details"
    },
    {
        number: "02",
        icon: <Video className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Receive Loom Video",
        description: "Get a personalized video audit within 48hrs"
    },
    {
        number: "03",
        icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
        title: "Get Your AI Plan",
        description: "Actionable roadmap tailored to your business"
    }
];

const auditIncludes = [
    "Website Performance Analysis",
    "Automation Opportunity Scan",
    "AI Chatbot Recommendations",
    "Implementation Roadmap",
    "ROI Assessment",
    "Competitor Analysis"
];

export default function AIAuditSection() {
    return (
        <section id="audit" className={styles.section}>
            {/* Background effects */}
            <div className={styles.background.base} />
            <div className={styles.background.blobCyan} />
            <div className={styles.background.blobPurple} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.header.container}
                >
                    <div className={styles.header.badge}>
                        <span className={styles.header.ping.container}>
                            <span className={styles.header.ping.animation}></span>
                            <span className={styles.header.ping.dot}></span>
                        </span>
                        Limited Spots Available
                    </div>
                    <h2 className={styles.header.title}>
                        Get Your Free{" "}
                        <span className={styles.header.highlight}>
                            AI Audit
                        </span>
                    </h2>
                    <p className={styles.header.description}>
                        Discover exactly how AI can transform your business with a personalized action plan.
                    </p>
                </motion.div>

                {/* 3-Step Process */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={styles.process.container}
                >
                    <div className={styles.process.grid}>
                        {processSteps.map((step, index) => (
                            <div key={index} className={styles.process.step}>
                                {/* Connector line - desktop only */}
                                {index < processSteps.length - 1 && (
                                    <div className={styles.process.connector} />
                                )}

                                <SpotlightCard className={styles.process.card}>
                                    <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                        <div className={styles.process.iconBox}>
                                            {step.icon}
                                        </div>
                                        <span className={styles.process.number}>{step.number}</span>
                                    </div>
                                    <h3 className={styles.process.title}>{step.title}</h3>
                                    <p className={styles.process.description}>{step.description}</p>
                                </SpotlightCard>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div className={styles.mainContent.grid}>
                    {/* Left: What's Included */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className={styles.mainContent.leftColumn}
                    >
                        <ScrollReveal>
                            <h2 className={styles.mainContent.headingLine}>
                                <span className="text-white">Your current stack is</span>{" "}
                                <span className={styles.mainContent.headingHighlight}>
                                    bleeding revenue.
                                </span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className={styles.mainContent.paragraph}>
                                Manual workflows are the silent killer of scale. We deconstruct your
                                operations, identify the friction, and deploy autonomous agents that
                                execute faster than your best employee.
                            </p>
                        </ScrollReveal>
                        <div className={styles.mainContent.checklist}>
                            {auditIncludes.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                                    viewport={{ once: true }}
                                    className={styles.mainContent.checkItem.container}
                                >
                                    <div className={styles.mainContent.checkItem.icon}>
                                        <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                                    </div>
                                    <span className={styles.mainContent.checkItem.text}>{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Testimonial */}
                        <div className={styles.mainContent.testimonial.container}>
                            <p className={styles.mainContent.testimonial.quote}>
                                &quot;The audit revealed opportunities we never knew existed.
                                Within a month, we automated 60% of our customer support.&quot;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className={styles.mainContent.testimonial.authorAvatar}>
                                    S
                                </div>
                                <div>
                                    <p className={styles.mainContent.testimonial.authorName}>Sarah K.</p>
                                    <p className={styles.mainContent.testimonial.authorRole}>SaaS Founder, UK</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className={styles.form.container}
                    >
                        <h3 className={styles.form.title}>Request Your Free Audit</h3>
                        <p className={styles.form.subtitle}>
                            No commitment. Get your personalized Loom video within 48 hours.
                        </p>
                        <AuditForm />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
