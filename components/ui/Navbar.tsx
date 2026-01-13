"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#audit", label: "AI Audit" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const handleLinkClick = useCallback(() => {
        setMobileMenuOpen(false);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 safe-top ${isScrolled
                    ? "bg-black/20 backdrop-blur-md border-b border-white/5 py-2 sm:py-3"
                    : "bg-transparent backdrop-blur-sm py-3 sm:py-5"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group touch-feedback">
                        <Logo className="group-hover:scale-105 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors py-2"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <ThemeToggle />

                        <Link href="#audit">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-sm rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-2"
                            >
                                <Zap className="w-4 h-4" />
                                Free AI Audit
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Toggle - Touch Target 44px */}
                    <div className="lg:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            className="w-11 h-11 flex items-center justify-center text-white touch-feedback rounded-lg active:bg-white/10"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={mobileMenuOpen}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu - Sheet Style from Bottom */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                            onClick={handleLinkClick}
                        />

                        {/* Sheet Menu */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl rounded-t-3xl pt-6 pb-8 px-6 lg:hidden safe-bottom border-t border-white/20"
                        >
                            {/* Handle bar */}
                            <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6" />

                            <div className="flex flex-col gap-1">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={handleLinkClick}
                                            className="flex items-center text-white text-lg font-medium py-4 px-4 rounded-xl active:bg-white/10 transition-colors touch-feedback"
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="mt-4"
                                >
                                    <Link
                                        href="#audit"
                                        onClick={handleLinkClick}
                                    >
                                        <button
                                            className="w-full min-h-[52px] px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2 shadow-lg touch-feedback active:scale-[0.98] transition-transform"
                                        >
                                            <Zap className="w-5 h-5" />
                                            Get Free AI Audit
                                        </button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
