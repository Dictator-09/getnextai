"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Mail, Globe, ArrowUpRight } from "lucide-react";
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

export default function Footer() {
    return (
        <footer className="relative w-full bg-[#050508] pt-24 pb-12 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,201,167,0.05),transparent_40%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* MEGA CTA */}
                <div className="mb-24 md:mb-32 flex flex-col items-center text-center">
                    <h2 className="font-heading font-black text-[15vw] leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 select-none hover:to-white/40 transition-all duration-700">
                        LET&apos;S TALK
                    </h2>
                    <div className="mt-8 md:mt-12">
                        <Link
                            href="/audit"
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full overflow-hidden hover:border-[#00C9A7]/50 transition-all duration-300"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-[#00C9A7]/10 to-[#FF6B35]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <span className="relative z-10 text-lg md:text-xl text-gray-300 group-hover:text-white transition-colors">
                                Start Your Transformation
                            </span>
                            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-[#00C9A7] group-hover:text-black transition-all duration-300 group-hover:rotate-45">
                                <ArrowUpRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Footer Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <div>
                            <Logo size="md" />
                            <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
                                Reintegrating human creativity with machine intelligence.
                                <br />
                                We build systems that scale.
                            </p>
                        </div>

                        {/* Global Presence */}
                        <div className="flex flex-wrap items-center gap-3">
                            <Globe className="w-4 h-4 text-[#00C9A7]" />
                            <span className="text-gray-500 text-sm">Serving clients globally:</span>
                            <div className="flex flex-wrap gap-2">
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
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading tracking-wide">SOLUTIONS</h3>
                        <ul className="space-y-4">
                            {services.map((item) => (
                                <FooterLink key={item.label} href={item.href} label={item.label} />
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading tracking-wide">COMPANY</h3>
                        <ul className="space-y-4">
                            {company.map((item) => (
                                <FooterLink key={item.label} href={item.href} label={item.label} />
                            ))}
                        </ul>
                        <div className="flex gap-4 mt-8">
                            <SocialLink href="https://twitter.com" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="https://github.com" icon={<Github className="w-5 h-5" />} />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} GetNextAI. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-sm flex items-center gap-2">
                        Designed with <span className="text-[#00C9A7]">Intelligence</span>
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
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#00C9A7] hover:text-black hover:scale-110 transition-all duration-300"
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
                className="text-gray-400 hover:text-[#00C9A7] hover:translate-x-1 transition-all duration-300 inline-block text-sm"
            >
                {label}
            </Link>
        </li>
    );
}
