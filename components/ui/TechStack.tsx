"use client";

import { motion } from "framer-motion";
import { styles } from "./styles/TechStack.styles";

// Tech stack logos as simple styled components (no external images needed)
const techStack = [
    { name: "OpenAI", color: "#10A37F" },
    { name: "Claude", color: "#D97757" },
    { name: "Google Cloud", color: "#4285F4" },
    { name: "AWS", color: "#FF9900" },
    { name: "Next.js", color: "#FFFFFF" },
    { name: "React", color: "#61DAFB" },
    { name: "Stripe", color: "#635BFF" },
    { name: "Make", color: "#6D4AFF" },
    { name: "Zapier", color: "#FF4A00" },
    { name: "Vercel", color: "#FFFFFF" },
    { name: "n8n", color: "#FF6D5A" },
    { name: "WhatsApp", color: "#25D366" }
];

export default function TechStack() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <p className={styles.label}>
                        Powered by Industry-Leading Technology
                    </p>
                </motion.div>

                {/* Logo Marquee */}
                <div className={styles.marquee.wrapper}>
                    {/* Gradient masks */}
                    <div className={styles.marquee.maskLeft} />
                    <div className={styles.marquee.maskRight} />

                    {/* Scrolling logos */}
                    <motion.div
                        className={styles.marquee.track}
                        animate={{ x: [0, -1200] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear"
                            }
                        }}
                    >
                        {/* Double the items for seamless loop */}
                        {[...techStack, ...techStack].map((tech, index) => (
                            <div
                                key={index}
                                className={styles.card.wrapper}
                            >
                                <div
                                    className={styles.card.dot}
                                    style={{ backgroundColor: tech.color }}
                                />
                                <span className={styles.card.text}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className={styles.footer}
                >
                    We leverage the best tools to deliver exceptional results
                </motion.p>
            </div>
        </section>
    );
}
