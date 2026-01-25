"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./CustomCursor";
import { StaggeredText } from "./StaggeredText";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

// ============================================
// STYLES
// ============================================

const styles = {
    auditButton: {
        container: "relative group overflow-hidden",
        content: "relative px-6 py-3 rounded-full bg-gradient-to-r from-[#00C9A7] to-[#0D5C63] group-hover:from-[#00DDB8] group-hover:to-[#00C9A7] transition-all duration-300",
        glow: "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10"
    },
    navLink: {
        button: "relative px-2 py-1 text-sm font-medium text-gray-300 group",
        text: "relative z-10 group-hover:text-white transition-colors",
        underline: "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#00C9A7]"
    },
    navbar: {
        container: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        base: "py-3 px-4 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5", // Mobile/Default
        desktop: "md:py-4 md:px-8 md:bg-transparent md:backdrop-blur-none md:border-none",
        scrolled: "md:!py-3 md:!px-16 md:!bg-[#0a0a0f]/90 md:!backdrop-blur-md md:!border-white/5"
    },
    mobileMenu: {
        overlay: "fixed inset-0 z-40 bg-[#050508]/98 backdrop-blur-xl flex items-center justify-center overflow-hidden",
        linkContainer: "group relative block overflow-hidden",
        linkText: "text-5xl sm:text-7xl font-display font-bold text-white group-hover:text-[#00C9A7] transition-colors duration-300",
        linkUnderline: "absolute bottom-0 left-0 w-full h-[2px] bg-[#00C9A7] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out"
    }
};

// ============================================
// AI AUDIT BUTTON - AURORA THEME
// ============================================

function AIAuditButton() {
    return (
        <MagneticButton className={styles.auditButton.container} href="/audit">
            <div className={styles.auditButton.content}>
                <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <motion.path
                            d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
                            fill="white"
                            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </svg>
                    <span className="font-bold text-white">Free AI Audit</span>
                </div>
            </div>

            {/* Glow effect */}
            <motion.div
                className={styles.auditButton.glow}
                style={{ background: "radial-gradient(circle, rgba(0,201,167,0.4) 0%, transparent 70%)" }}
            />
        </MagneticButton>
    );
}

// ============================================
// NAV LINK - AURORA THEME
// ============================================

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
    return (
        <MagneticButton
            href={href}
            className={styles.navLink.button}
            onClick={onClick}
        >
            <span className={styles.navLink.text}>
                {children}
            </span>
            <motion.div
                className={styles.navLink.underline}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </MagneticButton>
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
                className={cn(
                    styles.navbar.container,
                    styles.navbar.base,
                    styles.navbar.desktop,
                    isScrolled && styles.navbar.scrolled
                )}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
                <div className="relative max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo with 3D parallax */}
                    <Logo size={isScrolled ? "sm" : "md"} />

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

            {/* Cinematic Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu.overlay}
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Background Watermark */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03]">
                            <h1 className="text-[20vw] font-bold text-white leading-none">MENU</h1>
                        </div>

                        {/* Menu Links */}
                        <div className="flex flex-col gap-8 text-center relative z-10">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={styles.mobileMenu.linkContainer}
                                    onClick={handleLinkClick}
                                >
                                    <div className={styles.mobileMenu.linkText}>
                                        <StaggeredText text={link.label} delay={0.3 + index * 0.1} />
                                    </div>
                                    <div className={styles.mobileMenu.linkUnderline} />
                                </a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="pt-8"
                            >
                                <AIAuditButton />
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
