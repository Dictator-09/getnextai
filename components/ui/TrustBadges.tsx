"use client";

import { motion } from "framer-motion";
import { Shield, RefreshCw, Lock, FileText, Globe, Clock } from "lucide-react";

const badges = [
    {
        icon: <Shield className="w-6 h-6" />,
        title: "100% Satisfaction",
        description: "Money-back guarantee"
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: "Global Delivery",
        description: "US, UK, UAE, AU, EU"
    },
    {
        icon: <RefreshCw className="w-6 h-6" />,
        title: "Free Revisions",
        description: "Until you're happy"
    },
    {
        icon: <Lock className="w-6 h-6" />,
        title: "Secure Payment",
        description: "Stripe & PayPal"
    },
    {
        icon: <FileText className="w-6 h-6" />,
        title: "NDA Available",
        description: "Your ideas protected"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Timezone",
        description: "Available when you need"
    }
];

export default function TrustBadges() {
    return (
        <section className="py-16 bg-transparent border-y border-white/5 relative overflow-hidden">
            {/* Aurora gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/5 via-transparent to-[#00C9A7]/5" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 text-sm uppercase tracking-widest mb-10"
                >
                    Why businesses trust us
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {badges.map((badge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-[#00C9A7]/30 transition-all duration-300">
                                <div className="text-[#00C9A7]">
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
