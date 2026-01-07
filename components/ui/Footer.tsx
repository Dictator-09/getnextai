"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="inline-block mb-6">
                            <Logo />
                        </Link>
                        <p className="text-gray-400 leading-relaxed max-w-md mb-8">
                            We build the digital infrastructure for the post-labor economy.
                            Specializing in high-performance web experiences, AI voice agents,
                            and automated workflows.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
                            <SocialLink href="mailto:contact@getnextai.com" icon={<Mail className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Services</h3>
                        <ul className="space-y-4">
                            <FooterLink href="#services" label="Custom Websites" />
                            <FooterLink href="#services" label="AI Voice Agents" />
                            <FooterLink href="#services" label="WhatsApp Automation" />
                            <FooterLink href="#contact" label="Consulting" />
                        </ul>
                    </div>

                    {/* Legal/Company */}
                    <div>
                        <h3 className="text-white font-bold mb-6">Company</h3>
                        <ul className="space-y-4">
                            <FooterLink href="#" label="About Us" />
                            <FooterLink href="#" label="Careers" />
                            <FooterLink href="#" label="Privacy Policy" />
                            <FooterLink href="#" label="Terms of Service" />
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} GetNextAI. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <p className="text-gray-500 text-sm">Designed in the Future.</p>
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
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all duration-300"
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
                className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
                {label}
            </Link>
        </li>
    );
}
