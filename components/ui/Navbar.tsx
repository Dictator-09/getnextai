"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

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
                    ? "bg-white/60 dark:bg-black/60 backdrop-blur-md border-b border-black/5 dark:border-white/5 py-3 shadow-sm dark:shadow-none"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group">
                        <Logo className="group-hover:scale-105 transition-transform duration-300" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="#services"
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                            Contact
                        </Link>

                        <ThemeToggle />

                        <Link href="#contact">
                            <button className="px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black font-bold text-sm rounded-full hover:bg-cyan-500 dark:hover:bg-cyan-400 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
                                Book Strategy Call <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-black dark:text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-light">
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-black dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                            >
                                Contact
                            </Link>
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 px-6 py-4 bg-cyan-500 text-black font-bold rounded-xl text-center"
                            >
                                Book Strategy Call
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
