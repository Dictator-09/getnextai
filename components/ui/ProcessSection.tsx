"use client";

import { motion } from "framer-motion";
import { Lightbulb, Video, Code, Rocket, ArrowRight } from "lucide-react";
import { styles } from "./styles/ProcessSection.styles";

interface Step {
    number: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    status: string;
}

const steps: Step[] = [
    {
        number: "01",
        title: "Free AI Audit",
        description: "Submit your info and receive a personalized Loom video analyzing your AI opportunities.",
        icon: <Lightbulb className="w-6 h-6" />,
        status: "INITIATED"
    },
    {
        number: "02",
        title: "Strategy Calibration",
        description: "30-minute deep dive into your business goals, timeline, and budget parameters.",
        icon: <Video className="w-6 h-6" />,
        status: "PENDING"
    },
    {
        number: "03",
        title: "System Development",
        description: "We build your AI solution with regular updates and preview demos.",
        icon: <Code className="w-6 h-6" />,
        status: "LOCKED"
    },
    {
        number: "04",
        title: "Launch & Scale",
        description: "Deployment, training, and ongoing support to ensure your success.",
        icon: <Rocket className="w-6 h-6" />,
        status: "LOCKED"
    }
];

export default function ProcessSection() {
    return (
        <section className={styles.section}>
            {/* Background */}
            <div className={styles.background.base} />
            <div
                className={styles.background.grid}
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(184, 255, 0, 0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(184, 255, 0, 0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.header.wrapper}
                >
                    <div className={styles.header.badge.wrapper}>
                        <div className={styles.header.badge.dot} />
                        <span className={styles.header.badge.text}>
                            Operational Workflow
                        </span>
                    </div>
                    <h2 className={styles.header.title}>
                        Execution <span className={styles.header.highlight}>Protocol</span>
                    </h2>
                    <p className={styles.header.description}>
                        From initial audit to deployment, we maintain total transparency.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className={styles.step.wrapper}
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className={styles.step.connector} />
                            )}

                            <div className={styles.step.card}>
                                {/* Hover Glow */}
                                <div className={styles.step.glow} />

                                <div className="relative">
                                    {/* Icon Box */}
                                    <div className={styles.step.iconBox}>
                                        {step.icon}
                                    </div>

                                    <div className={styles.step.number}>
                                        {step.number}
                                    </div>

                                    <h3 className={styles.step.title}>
                                        {step.title}
                                    </h3>
                                    <p className={styles.step.description}>
                                        {step.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className={styles.step.status}>
                                            {step.status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.cta.wrapper}
                >
                    <a href="/audit">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={styles.cta.button}
                        >
                            Initialize Sequence
                            <ArrowRight className={styles.cta.icon} />
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
