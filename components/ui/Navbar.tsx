"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./CustomCursor";
import Link from "next/link";

// ============================================
// 3D LOGO WITH GLOW
// ============================================

function Logo3D() {
    return (
        <motion.div
            className="logo-container relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            <Link href="/" className="flex items-center gap-3">
                {/* 3D Hexagon Icon */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-[#B8FF00]/20 blur-xl rounded-full scale-150 group-hover:bg-[#B8FF00]/40 transition-all duration-300" />

                    <motion.div
                        className="relative w-10 h-10 flex items-center justify-center"
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            className="drop-shadow-[0_0_12px_rgba(184,255,0,0.8)]"
                        >
                            <path
                                d="M20 3L34 11.5V28.5L20 37L6 28.5V11.5L20 3Z"
                                fill="rgba(184, 255, 0, 0.2)"
                                stroke="#B8FF00"
                                strokeWidth="2"
                            />
                            <circle cx="20" cy="20" r="6" fill="rgba(184, 255, 0, 0.4)" />
                            <circle cx="20" cy="20" r="4" fill="#B8FF00" />
                        </svg>
                    </motion.div>
                </div>

                {/* Text Logo */}
                <div className="flex items-baseline">
                    <span className="text-2xl font-bold text-[#B8FF00] tracking-tight drop-shadow-[0_0_8px_rgba(184,255,0,0.5)]">
                        GETNEXT
                    </span>
                    <span className="text-2xl font-bold text-white tracking-tight">AI</span>
                </div>
            </Link>
        </motion.div>
    );
}

// ============================================
// THEMED AI AUDIT BUTTON
// ============================================

function AIAuditButton() {
    return (
        <MagneticButton
            className="relative group overflow-hidden"
            href="/audit"
        >
            <div className="relative px-6 py-3 rounded-full bg-[#B8FF00] group-hover:bg-[#a8ef00] transition-colors">
                <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <motion.path
                            d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                            fill="#050508"
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                    <span className="font-bold text-[#050508]">Free AI Audit</span>
                </div>
            </div>

            {/* Glow effect */}
            <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
                style={{ background: "radial-gradient(circle, rgba(184,255,0,0.4) 0%, transparent 70%)" }}
            />
        </MagneticButton>
    );
}

// ============================================
// NAV LINK COMPONENT
// ============================================

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <motion.a
            href={href}
            className="relative text-sm font-medium text-gray-300 group"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={onClick}
        >
            <span className="relative z-10 group-hover:text-white transition-colors">
                {children}
            </span>
            <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-[#B8FF00]"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.a>
    );
}

// ============================================
// NAVBAR COMPONENT
// ============================================

const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "/audit", label: "AI Audit" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileMenuOpen]);

    const handleLinkClick = useCallback(() => setMobileMenuOpen(false), []);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 transition-all duration-300 ${isScrolled ? "py-3 bg-black/60 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
                    }`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
                <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                    <Logo3D />

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <AIAuditButton />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg pt-24 px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-2xl font-bold text-white hover:text-[#B8FF00] transition-colors"
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-4">
                            <AIAuditButton />
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
