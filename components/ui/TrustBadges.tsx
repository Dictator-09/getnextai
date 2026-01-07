"use client";

import { motion } from "framer-motion";
import { Shield, RefreshCw, Lock, FileText } from "lucide-react";

const badges = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "100% Satisfaction",
        description: "Money-back guarantee"
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: "Free Revisions",
        description: "Until you're happy"
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "Secure Payment",
        description: "Protected transactions"
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "NDA Available",
        description: "Your ideas protected"
    }
];

export default function TrustBadges() {
    return (
        <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                                <div className="text-cyan-400">
                                    {badge.icon}
                                </div>
                            </div>
                            <h4 className="text-white font-bold text-sm mb-1">{badge.title}</h4>
                            <p className="text-gray-500 text-xs">{badge.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
