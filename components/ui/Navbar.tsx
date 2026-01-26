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

import { styles } from "./styles/Navbar.styles";

// ============================================
// AI AUDIT BUTTON - AURORA THEME
// ============================================

function AIAuditButton() {
    return (
        <MagneticButton className={styles.auditButton.container} href="/audit">
            <div className={styles.auditButton.content}>
                <div className={styles.auditButton.iconWrapper}>
                    <span className={styles.auditButton.text}>Free Audit</span>
                </div>
            </div>
            {/* Glow effect */}
            <div className={styles.auditButton.glow} />
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
            <div className={styles.navLink.underline} />
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
                <div className={styles.navbar.wrapper}>
                    {/* Logo with 3D parallax */}
                    <Logo size={isScrolled ? "sm" : "md"} />

                    {/* Desktop Nav */}
                    <div className={styles.navbar.desktopNav}>
                        {navLinks.map((link) => (
                            <NavLink key={link.href} href={link.href}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className={styles.navbar.ctaContainer}>
                        <AIAuditButton />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={styles.navbar.mobileToggle}
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
                        <div className={styles.mobileMenu.watermark}>
                            <h1 className={styles.mobileMenu.watermarkText}>MENU</h1>
                        </div>

                        {/* Menu Links */}
                        <div className={styles.mobileMenu.linksWrapper}>
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
                                className={styles.mobileMenu.ctaWrapper}
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
