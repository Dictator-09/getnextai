"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Zap } from "lucide-react";
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
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-black/5 dark:border-white/5 py-3 shadow-sm dark:shadow-none"
                    : "bg-white/20 dark:bg-transparent backdrop-blur-sm py-5"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <Logo className="group-hover:scale-105 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
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

                    {/* Mobile Toggle */}
                    <div className="lg:hidden flex items-center gap-3">
                        <ThemeToggle />
                        <button
                            className="text-black dark:text-white p-2"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/98 dark:bg-black/98 pt-24 px-6 pb-12 lg:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col gap-6 text-xl font-light">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors py-2 border-b border-gray-100 dark:border-white/5"
                                >
                                    {link.label}
                                </Link>
                            ))}

                            <Link
                                href="#audit"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4"
                            >
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <Zap className="w-5 h-5" />
                                    Get Free AI Audit
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
