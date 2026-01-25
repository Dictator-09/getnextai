"use client";

import { motion } from "framer-motion";
import { Globe, CreditCard, FileText, Clock, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

import { styles } from "./styles/GlobalPresence.styles";

const trustFeatures = [
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Delivery",
        description: "Serving clients across time zones"
    },
    {
        icon: <CreditCard className="w-6 h-6" />,
        title: "Secure Payments",
        description: "Stripe, PayPal, Wire Transfer"
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "NDA Available",
        description: "Your data and ideas protected"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Hours",
        description: "Available when you need us"
    },

    {
        icon: <Headphones className="w-6 h-6" />,
        title: "Dedicated Support",
        description: "Direct line to your team"
    }
];
// ... (omitting middle lines, targeting start and end)

// I will do two separate replaces if I can only target contiguous blocks. 
// Wait, replace_file_content is for single contiguous block.
// I have essentially two changes: Imports (top) and Grid Class (bottom).
// They are far apart. I should use multi_replace_file_content or two separate calls. 
// I'll use separate calls to be safe and simple.


const regions = [
    { name: "United States", code: "US", x: 22, y: 35 },
    { name: "United Kingdom", code: "UK", x: 47, y: 28 },
    { name: "UAE", code: "UAE", x: 60, y: 42 },
    { name: "Australia", code: "AU", x: 82, y: 65 },
    { name: "Europe", code: "EU", x: 52, y: 32 },
];

export default function GlobalPresence() {
    return (
        <section className={styles.section}>
            {/* Background effects */}
            <div className={styles.background} />

            <div className={styles.container}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={styles.header.container}
                >
                    <p className={styles.header.label}>
                        Global Reach
                    </p>
                    <h2 className={styles.header.title}>
                        Built for{" "}
                        <span className={styles.header.highlight}>
                            Global Businesses
                        </span>
                    </h2>
                    <p className={styles.header.description}>
                        We work with businesses across time zones, delivering world-class AI solutions
                        with the reliability and professionalism you expect.
                    </p>
                </motion.div>

                {/* World Map Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={styles.map.container}
                >
                    {/* Stylized world map background */}
                    <div className={styles.map.background}>
                        {/* Grid pattern */}
                        <div className={styles.map.grid} style={{
                            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
                            backgroundSize: '30px 30px'
                        }} />

                        {/* Region indicators */}
                        {regions.map((region, index) => (
                            <motion.div
                                key={region.code}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                viewport={{ once: true }}
                                className={styles.map.region.container}
                                style={{ left: `${region.x}%`, top: `${region.y}%` }}
                            >
                                {/* Pulse effect */}
                                <div className={styles.map.region.pulseWrapper}>
                                    <span className={styles.map.region.pulse} />
                                    <span className={styles.map.region.dot} />
                                </div>

                                {/* Label */}
                                <div className={styles.map.region.labelWrapper}>
                                    <span className={styles.map.region.label}>
                                        {region.code}
                                    </span>
                                </div>
                            </motion.div>
                        ))}

                        {/* Connection lines */}
                        <svg className={styles.map.svg} viewBox="0 0 100 100" preserveAspectRatio="none" style={{ opacity: 0.1 }}>
                            <defs>
                                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            {/* Lines connecting regions - using numeric coordinates with viewBox */}
                            <path
                                d="M 22 35 Q 35 20 47 28"
                                stroke="url(#line-gradient)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                            <path
                                d="M 47 28 Q 55 35 60 42"
                                stroke="url(#line-gradient)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                            <path
                                d="M 60 42 Q 70 55 82 65"
                                stroke="url(#line-gradient)"
                                strokeWidth="0.5"
                                fill="none"
                            />
                        </svg>
                    </div>
                </motion.div>

                {/* Trust Features Grid */}
                <div className={styles.grid.container}>
                    {trustFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={styles.grid.card}
                        >
                            <div className={styles.grid.iconBox}>
                                {feature.icon}
                            </div>
                            <h4 className={styles.grid.title}>{feature.title}</h4>
                            <p className={styles.grid.description}>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
