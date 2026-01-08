"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, Globe, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const services = [
    { href: "#services", label: "AI Websites" },
    { href: "#services", label: "Voice Agents" },
    { href: "#services", label: "Automation" },
    { href: "#audit", label: "Free AI Audit" },
];

const company = [
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
];

const regions = ["US", "UK", "UAE", "AU", "EU"];

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 dark:bg-black border-t border-black/5 dark:border-white/10 pt-20 pb-10 transition-colors duration-500">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Logo />
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-md mb-6">
                            We help global businesses automate operations, convert more leads,
                            and scale faster using AI. Built for the future. Delivered today.
                        </p>

                        {/* Global Presence */}
                        <div className="flex items-center gap-2 mb-6">
                            <Globe className="w-4 h-4 text-cyan-500" />
                            <span className="text-gray-500 text-sm">Serving clients globally:</span>
                            <div className="flex gap-2">
                                {regions.map((region) => (
                                    <span
                                        key={region}
                                        className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-gray-400 text-xs font-medium"
                                    >
                                        {region}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
                            <SocialLink href="mailto:hello@getnextai.com" icon={<Mail className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-black dark:text-white font-bold mb-6">Solutions</h3>
                        <ul className="space-y-4">
                            {services.map((item) => (
                                <FooterLink key={item.label} href={item.href} label={item.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-black dark:text-white font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            {company.map((item) => (
                                <FooterLink key={item.label} href={item.href} label={item.label} />
                            ))}
                        </ul>

                        {/* CTA */}
                        <Link
                            href="#audit"
                            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-lg text-cyan-500 text-sm font-medium hover:border-cyan-500/40 transition-colors"
                        >
                            Get Free AI Audit
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} GetNextAI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <p className="text-gray-500 text-sm">
                            Built for global startups & businesses.
                        </p>
                    </div>
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
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300"
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
                className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors text-sm"
            >
                {label}
            </Link>
        </li>
    );
}
