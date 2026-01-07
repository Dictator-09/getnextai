"use client";

import { motion } from "framer-motion";

export default function SkipToContent() {
    return (
        <motion.a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
            initial={{ opacity: 0 }}
            whileFocus={{ opacity: 1 }}
        >
            Skip to main content
        </motion.a>
    );
}
