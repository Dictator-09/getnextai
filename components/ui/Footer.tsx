"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Globe, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const services = [
    { href: "#services", label: "AI Websites" },
    { href: "#services", label: "Voice Agents" },
    { href: "#services", label: "Automation" },
    { href: "/audit", label: "Free AI Audit" },
];

const company = [
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
];

const regions = ["US", "UK", "UAE", "AU", "EU"];

import { styles } from "./styles/Footer.styles";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Background Gradient */}
            <div className={styles.background.line} />
            <div className={styles.background.radial} />

            <div className={styles.container}>
                {/* MEGA CTA */}
                <div className={styles.cta.container}>
                    <h2 className={styles.cta.title}>
                        LET&apos;S TALK
                    </h2>
                    <div className={styles.cta.buttonWrapper}>
                        <Link
                            href="/audit"
                            className={styles.cta.button}
                        >
                            <span className={styles.cta.buttonGlow} />
                            <span className={styles.cta.buttonText}>
                                Start Your Transformation
                            </span>
                            <span className={styles.cta.buttonIcon}>
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Footer Content Grid */}
                <div className={styles.grid.container}>
                    {/* Brand Column */}
                    <div className={styles.grid.brandCol}>
                        <div>
                            <Logo size="md" />
                            <p className={styles.grid.brandText}>
                                Reintegrating human creativity with machine intelligence.
                                <br />
                                We build systems that scale.
                            </p>
                        </div>

                        {/* Global Presence */}
                        <div className={styles.grid.global.container}>
                            <Globe className={styles.grid.global.icon} />
                            <span className={styles.grid.global.label}>Serving clients globally:</span>
                            <div className={styles.grid.global.regionsWrapper}>
                                {regions.map((region) => (
                                    <span
                                        key={region}
                                        className={styles.grid.global.regionBadge}
                                    >
                                        {region}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className={styles.grid.sectionTitle}>SOLUTIONS</h3>
                        <ul className={styles.grid.linkList}>
                            {services.map((item) => (
                                <FooterLink key={item.label} href={item.href} label={item.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className={styles.grid.sectionTitle}>COMPANY</h3>
                        <ul className={styles.grid.linkList}>
                            {company.map((item) => (
                                <FooterLink key={item.label} href={item.href} label={item.label} />
                            ))}
                        </ul>
                        <div className={styles.grid.socialContainer}>
                            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar.container}>
                    <p className={styles.bottomBar.text}>
                        © {new Date().getFullYear()} GetNextAI. All rights reserved.
                    </p>
                    <p className={styles.bottomBar.designer}>
                        Designed with <span className={styles.bottomBar.highlight}>Intelligence</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <li>
            <Link
                href={href}
                className={styles.footerLink}
            >
                {label}
            </Link>
        </li>
    );
}
