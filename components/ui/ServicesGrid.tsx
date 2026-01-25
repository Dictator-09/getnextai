"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Globe,
    Mic,
    Cpu,
    CheckCircle,
    Clock,
    Zap,
    Bot,
    BarChart3,
    MessageSquare
} from "lucide-react";

const services = [
    {
        id: "websites",
        number: "01",
        title: "Conversion-Focused",
        highlight: "AI Websites",
        description: "Websites engineered to convert. We build fast, smart experiences that turn visitors into paying customers.",
        tags: ["SaaS Startups", "Agencies", "E-commerce"],
        timeline: "2-3 Weeks",
        features: [
            "Sub-second load times",
            "SEO & Analytics built-in",
            "AI chatbot integration ready"
        ],
        color: "cyan",
        icon: Globe,
        featured: false
    },
    {
        id: "voice-agents",
        number: "02",
        title: "24/7 AI Sales",
        highlight: "& Support Agents",
        description: "Never miss a call again. AI agents that sound human, handle bookings, qualify leads, and close deals around the clock.",
        tags: ["Restaurants", "Healthcare", "Service Businesses"],
        timeline: "1-2 Weeks",
        features: [
            "Natural voice conversations",
            "Multi-language support",
            "CRM & calendar integration"
        ],
        color: "purple",
        icon: Mic,
        featured: false
    },
    {
        id: "automation",
        number: "03",
        title: "Workflow Automation",
        highlight: "30+ hrs/Month Saved",
        description: "Automate repetitive tasks across your entire business. From lead nurturing to customer support, we build systems that work while you sleep.",
        tags: ["All Industries", "Teams 5-500", "Global"],
        timeline: "1 Week",
        features: [
            "WhatsApp & email automation",
            "Lead qualification flows",
            "Custom dashboard & analytics"
        ],
        color: "green",
        icon: Cpu,
        featured: false
    }
];

import { colorClasses, styles, sectionStyles } from "./styles/ServicesGrid.styles";

interface ServiceCardProps {
    service: typeof services[0];
    index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
    const colors = colorClasses[service.color as keyof typeof colorClasses];
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`${styles.card.container} ${service.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
        >
            {/* Glow effect on hover */}
            <div className={`${styles.card.glow} bg-gradient-to-r ${colors.gradientLight}`} />

            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`${styles.card.content} ${service.featured ? 'md:p-12' : 'md:p-8'}`}
            >
                {/* Decorative gradient orb */}
                <div className={`${styles.card.orb} ${colors.gradientLight}`} />

                {/* Header */}
                <div className={styles.card.header.container}>
                    <div className={`${styles.card.header.iconBox} ${colors.bg} ${colors.border}`}>
                        <Icon className={`${styles.card.header.icon} ${colors.text}`} />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className={`${styles.card.header.timelineBadge} ${colors.textDark} ${colors.border} ${colors.bg}`}>
                            <Clock className="w-3 h-3" />
                            {service.timeline}
                        </div>
                    </div>
                </div>

                {/* Number badge */}
                <div className={`${styles.card.number} ${colors.text} ${service.featured ? 'md:text-8xl' : ''}`}>
                    {service.number}
                </div>

                {/* Title */}
                <h3 className={`${styles.card.title.container} ${service.featured ? 'md:text-4xl' : 'md:text-3xl'}`}>
                    <span className={styles.card.title.primary}>
                        {service.title}
                    </span>
                    <br />
                    <span className={`${styles.card.title.highlight} ${colors.gradient}`}>
                        {service.highlight}
                    </span>
                </h3>

                {/* Description */}
                <p className={`${styles.card.description} ${service.featured ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                    {service.description}
                </p>

                {/* Tags */}
                <div className={styles.card.tags.container}>
                    {service.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`${styles.card.tags.tag} ${colors.bg} ${colors.border} ${colors.text}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Features */}
                <ul className={`${styles.card.features.list} ${!service.featured && 'hidden md:block'}`}>
                    {service.features.map((feature) => (
                        <li key={feature} className={`${styles.card.features.item} ${colors.textDark}`}>
                            <div className={`${styles.card.features.iconBox} ${colors.bg} ${colors.border}`}>
                                <CheckCircle className={styles.card.features.checkIcon} />
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a href="/audit" className={styles.card.cta.link}>
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        className={`${styles.card.cta.button} ${colors.gradient} ${colors.glow} ${colors.glowHover}`}
                    >
                        <div className={`${styles.card.cta.pulla} ${colors.gradient}`} />
                        <span className={styles.card.cta.content}>
                            Explore This Solution
                            <ArrowRight className={styles.card.cta.arrow} />
                        </span>
                    </motion.button>
                </a>
            </motion.div>
        </motion.div>
    );
}

export default function ServicesGrid() {
    return (
        <section id="services" className={sectionStyles.section}>
            {/* Background */}
            <div className={sectionStyles.background.base} />
            <div className={sectionStyles.background.orb} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className={sectionStyles.header.container}
                >
                    <p className={sectionStyles.header.label}>
                        What We Build
                    </p>
                    <h2 className={sectionStyles.header.title}>
                        AI Solutions <span className={sectionStyles.header.highlight}>That Deliver</span>
                    </h2>
                    <p className={sectionStyles.header.subtitle}>
                        Enterprise-grade AI systems, delivered in weeks, not months.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className={sectionStyles.grid}>
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className={sectionStyles.stats.container}
                >
                    <div className={sectionStyles.stats.item}>
                        <div className={sectionStyles.stats.valueContainer}>
                            <Zap className="w-5 h-5 text-cyan-400" />
                            <span className={sectionStyles.stats.value}>2-3</span>
                        </div>
                        <p className={sectionStyles.stats.label}>Weeks Average Delivery</p>
                    </div>
                    <div className={sectionStyles.stats.item}>
                        <div className={sectionStyles.stats.valueContainer}>
                            <Bot className="w-5 h-5 text-purple-400" />
                            <span className={sectionStyles.stats.value}>24/7</span>
                        </div>
                        <p className={sectionStyles.stats.label}>AI System Uptime</p>
                    </div>
                    <div className={sectionStyles.stats.item}>
                        <div className={sectionStyles.stats.valueContainer}>
                            <BarChart3 className="w-5 h-5 text-green-400" />
                            <span className={sectionStyles.stats.value}>30+</span>
                        </div>
                        <p className={sectionStyles.stats.label}>Hours Saved Monthly</p>
                    </div>
                    <div className={sectionStyles.stats.item}>
                        <div className={sectionStyles.stats.valueContainer}>
                            <MessageSquare className="w-5 h-5 text-pink-400" />
                            <span className={sectionStyles.stats.value}>100%</span>
                        </div>
                        <p className={sectionStyles.stats.label}>Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
