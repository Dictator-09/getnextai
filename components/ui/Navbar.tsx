"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

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
                        ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
                        : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-black font-black text-xl group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all duration-300">
                            G
                        </div>
                        <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            GETNEXT<span className="font-light">AI</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            href="#services"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        >
                            Contact
                        </Link>

                        <Link href="#contact">
                            <button className="px-5 py-2.5 bg-white text-black font-bold text-sm rounded-full hover:bg-cyan-400 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
                                Book Strategy Call <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2"
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
                        className="fixed inset-0 z-40 bg-black/95 pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-2xl font-light">
                            <Link
                                href="/"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white hover:text-cyan-400 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="#services"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white hover:text-cyan-400 transition-colors"
                            >
                                Services
                            </Link>
                            <Link
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-white hover:text-cyan-400 transition-colors"
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
