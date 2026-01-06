"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoItemProps {
    title: string;
    description: string;
    className?: string;
    delay?: number;
}

function BentoItem({ title, description, className, delay = 0 }: BentoItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-colors hover:bg-white/10 hover:border-white/20",
                className
            )}
        >
            <div className="relative z-10 flex h-full flex-col justify-between">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">{description}</p>
            </div>

            {/* Glow Effect */}
            <div className="absolute -right-20 -top-20 z-0 h-[200px] w-[200px] rounded-full bg-cyan-500/20 blur-[80px] transition-all duration-500 group-hover:bg-fuchsia-500/20" />
        </motion.div>
    );
}

export function BentoGrid() {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-20 md:grid-cols-3 md:grid-rows-2">
            <BentoItem
                title="Predictive Intelligence"
                description="Agents that anticipate needs before you articulate them. Pure data synthesis."
                className="md:col-span-2 md:row-span-1 min-h-[300px]"
                delay={0.1}
            />
            <BentoItem
                title="Visual Engine"
                description="Real-time rendering of complex data streams into intuitive 3D interfaces."
                className="md:col-span-1 md:row-span-1 min-h-[300px]"
                delay={0.2}
            />
            <BentoItem
                title="Zero-G Architecture"
                description="Scalable infrastructure that defies legacy constraints."
                className="md:col-span-1 md:row-span-1 min-h-[300px]"
                delay={0.3}
            />
            <BentoItem
                title="Neural Sync"
                description="Bi-directional learning pathways for seamless human-AI collaboration."
                className="md:col-span-2 md:row-span-1 min-h-[300px]"
                delay={0.4}
            />
        </div>
    );
}
