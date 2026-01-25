"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { styles, colorVariants } from "./styles/CaseStudyCard.styles";

interface Metric {
    value: string;
    label: string;
    trend: "up" | "down";
}

export interface CaseStudyData {
    id: string;
    badge: string;
    title: string;
    location: string;
    industry: string;
    problem: string;
    solution: string;
    metrics: Metric[];
    color: "neon" | "cyan" | "white";
    icon: React.ReactNode;
}

export default function CaseStudyCard({ study, index }: { study: CaseStudyData; index: number }) {
    const colors = colorVariants[study.color];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={styles.wrapper}
        >
            <div className={`${styles.card.base} ${colors.border} ${styles.card.hover}`}>

                {/* Top Bar */}
                <div className={styles.topBar}>
                    {/* Demo Badge */}
                    <div className={`${styles.badge.base} ${colors.bg} ${colors.border} ${colors.text}`}>
                        <Zap className={styles.badge.icon} />
                        {study.badge}
                    </div>

                    {/* Icon */}
                    <div className={`${styles.iconBox} ${colors.bg} ${colors.border} ${colors.text}`}>
                        {study.icon}
                    </div>
                </div>

                {/* Title & Location */}
                <h3 className={styles.title}>
                    {study.title}
                </h3>
                <p className={styles.location}>
                    {study.location} {'//'} {study.industry}
                </p>

                {/* Problem */}
                <div className={styles.problem.wrapper}>
                    <p className={styles.problem.text}>
                        <span className={styles.problem.label}>CHALLENGE</span>
                        {study.problem}
                    </p>
                </div>

                {/* Solution */}
                <div className={styles.solution.wrapper}>
                    <p className={styles.solution.text}>
                        <span className={`${colors.text} ${styles.solution.label}`}>Deployed Solution</span>
                        {study.solution}
                    </p>
                </div>

                {/* Metrics */}
                <div className={styles.metrics.grid}>
                    {study.metrics.map((metric, i) => (
                        <div
                            key={i}
                            className={styles.metrics.item}
                        >
                            <div className={`${styles.metrics.value} ${colors.text}`}>
                                {metric.value}
                            </div>
                            <div className={styles.metrics.label}>{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* View More Link */}
                <a
                    href="#contact"
                    className={`${styles.link} ${colors.text}`}
                >
                    View Analysis
                    <ArrowUpRight className={styles.linkIcon} />
                </a>
            </div>
        </motion.div>
    );
}
