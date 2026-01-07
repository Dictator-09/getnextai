"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Users, Globe, Award } from "lucide-react";

interface CounterItemProps {
    end: number;
    suffix?: string;
    label: string;
    icon: React.ReactNode;
    duration?: number;
}

function CounterItem({ end, suffix = "", label, icon, duration = 2 }: CounterItemProps) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
        };
    }, [isInView, end, duration]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-cyan-500/30 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mb-4">
                    {icon}
                </div>
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2">
                    {count}{suffix}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                    {label}
                </div>
            </div>
        </motion.div>
    );
}

export default function CounterSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">Our Impact</p>
                    <h2 className="text-4xl md:text-5xl font-heading font-black text-white">
                        Numbers That Speak
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <CounterItem
                        end={500}
                        suffix="+"
                        label="Projects Delivered"
                        icon={<Zap className="w-6 h-6 text-cyan-400" />}
                    />
                    <CounterItem
                        end={50}
                        suffix="+"
                        label="Happy Clients"
                        icon={<Users className="w-6 h-6 text-purple-400" />}
                    />
                    <CounterItem
                        end={25}
                        suffix="M+"
                        label="Revenue Generated"
                        icon={<Globe className="w-6 h-6 text-green-400" />}
                    />
                    <CounterItem
                        end={99}
                        suffix="%"
                        label="Satisfaction Rate"
                        icon={<Award className="w-6 h-6 text-yellow-400" />}
                    />
                </div>
            </div>
        </section>
    );
}
