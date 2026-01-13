"use client";

import { motion } from "framer-motion";
import {
    ArrowRight,
    Globe,
    Mic,
    Cpu,
    CheckCircle,
    Clock,
    Zap,
    Bot,
    BarChart3,
    MessageSquare
} from "lucide-react";

const services = [
    {
        id: "websites",
        number: "01",
        title: "Conversion-Focused",
        highlight: "AI Websites",
        description: "Websites engineered to convert. We build fast, smart experiences that turn visitors into paying customers.",
        tags: ["SaaS Startups", "Agencies", "E-commerce"],
        timeline: "2-3 Weeks",
        features: [
            "Sub-second load times",
            "SEO & Analytics built-in",
            "AI chatbot integration ready"
        ],
        color: "cyan",
        icon: Globe,
        featured: true
    },
    {
        id: "voice-agents",
        number: "02",
        title: "24/7 AI Sales",
        highlight: "& Support Agents",
        description: "Never miss a call again. AI agents that sound human, handle bookings, qualify leads, and close deals around the clock.",
        tags: ["Restaurants", "Healthcare", "Service Businesses"],
        timeline: "1-2 Weeks",
        features: [
            "Natural voice conversations",
            "Multi-language support",
            "CRM & calendar integration"
        ],
        color: "purple",
        icon: Mic,
        featured: false
    },
    {
        id: "automation",
        number: "03",
        title: "Workflow Automation",
        highlight: "30+ hrs/Month Saved",
        description: "Automate repetitive tasks across your entire business. From lead nurturing to customer support, we build systems that work while you sleep.",
        tags: ["All Industries", "Teams 5-500", "Global"],
        timeline: "1 Week",
        features: [
            "WhatsApp & email automation",
            "Lead qualification flows",
            "Custom dashboard & analytics"
        ],
        color: "green",
        icon: Cpu,
        featured: false
    }
];

const colorClasses = {
    cyan: {
        gradient: "from-cyan-500 to-cyan-600",
        gradientLight: "from-cyan-500/20 via-cyan-400/20 to-cyan-600/20",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        text: "text-cyan-400",
        textDark: "text-cyan-300",
        glow: "shadow-[0_0_30px_rgba(6,182,212,0.3)]",
        glowHover: "hover:shadow-[0_0_50px_rgba(6,182,212,0.5)]"
    },
    purple: {
        gradient: "from-purple-500 to-purple-600",
        gradientLight: "from-purple-500/20 via-purple-400/20 to-purple-600/20",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        textDark: "text-purple-300",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.3)]",
        glowHover: "hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]"
    },
    green: {
        gradient: "from-green-500 to-green-600",
        gradientLight: "from-green-500/20 via-green-400/20 to-green-600/20",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        text: "text-green-400",
        textDark: "text-green-300",
        glow: "shadow-[0_0_30px_rgba(34,197,94,0.3)]",
        glowHover: "hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]"
    }
};

interface ServiceCardProps {
    service: typeof services[0];
    index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
    const colors = colorClasses[service.color as keyof typeof colorClasses];
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`group relative ${service.featured ? 'md:col-span-2 md:row-span-2' : ''}`}
        >
            {/* Glow effect on hover */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${colors.gradientLight} rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={`relative h-full flex flex-col bg-black/40 backdrop-blur-xl rounded-[2rem] p-8 ${service.featured ? 'md:p-12' : 'md:p-8'} border border-white/20 hover:border-white/30 transition-all duration-500`}
            >
                {/* Decorative gradient orb */}
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${colors.gradientLight} rounded-full blur-3xl opacity-50`} />

                {/* Header */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${colors.bg} border ${colors.border}`}>
                        <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className={`flex items-center gap-2 text-xs font-medium ${colors.textDark} uppercase tracking-wider px-3 py-1.5 rounded-full border ${colors.border} ${colors.bg}`}>
                            <Clock className="w-3 h-3" />
                            {service.timeline}
                        </div>
                    </div>
                </div>

                {/* Number badge */}
                <div className={`absolute top-8 right-8 text-6xl font-black ${colors.text} opacity-10 select-none ${service.featured ? 'md:text-8xl' : ''}`}>
                    {service.number}
                </div>

                {/* Title */}
                <h3 className={`text-2xl ${service.featured ? 'md:text-4xl' : 'md:text-3xl'} font-heading font-black mb-4 tracking-tight leading-tight relative z-10`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                        {service.title}
                    </span>
                    <br />
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${colors.gradient}`}>
                        {service.highlight}
                    </span>
                </h3>

                {/* Description */}
                <p className={`text-gray-400 ${service.featured ? 'text-base md:text-lg' : 'text-sm md:text-base'} mb-6 leading-relaxed font-light max-w-md relative z-10`}>
                    {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                    {service.tags.map((tag) => (
                        <span
                            key={tag}
                            className={`px-3 py-1 ${colors.bg} border ${colors.border} rounded-full ${colors.text} text-xs`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Features */}
                <ul className={`space-y-3 mb-8 flex-grow relative z-10 ${!service.featured && 'hidden md:block'}`}>
                    {service.features.map((feature) => (
                        <li key={feature} className={`flex items-center ${colors.textDark} text-sm font-medium`}>
                            <div className={`w-6 h-6 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mr-3 flex-shrink-0`}>
                                <CheckCircle className="w-3.5 h-3.5" />
                            </div>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <a href="#audit" className="relative z-10 mt-auto">
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        className={`group/btn relative w-full md:w-auto px-6 py-3.5 bg-gradient-to-r ${colors.gradient} rounded-xl text-white font-bold text-sm overflow-hidden ${colors.glow} ${colors.glowHover} transition-all duration-500`}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 brightness-110`} />
                        <span className="relative flex items-center justify-center gap-2">
                            Explore This Solution
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                    </motion.button>
                </a>
            </motion.div>
        </motion.div>
    );
}

export default function ServicesGrid() {
    return (
        <section id="services" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030308] to-black" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-cyan-500/5 via-purple-500/5 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-20"
                >
                    <p className="text-cyan-400 text-xs sm:text-sm uppercase tracking-widest mb-4">
                        What We Build
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4">
                        AI Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">That Deliver</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        Enterprise-grade AI systems, delivered in weeks, not months.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* Bottom Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-6 md:p-8 bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl"
                >
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Zap className="w-5 h-5 text-cyan-400" />
                            <span className="text-2xl md:text-3xl font-black text-white">2-3</span>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm">Weeks Average Delivery</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Bot className="w-5 h-5 text-purple-400" />
                            <span className="text-2xl md:text-3xl font-black text-white">24/7</span>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm">AI System Uptime</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <BarChart3 className="w-5 h-5 text-green-400" />
                            <span className="text-2xl md:text-3xl font-black text-white">30+</span>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm">Hours Saved Monthly</p>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <MessageSquare className="w-5 h-5 text-pink-400" />
                            <span className="text-2xl md:text-3xl font-black text-white">100%</span>
                        </div>
                        <p className="text-gray-500 text-xs md:text-sm">Client Satisfaction</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
