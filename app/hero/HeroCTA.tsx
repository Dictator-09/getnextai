"use client";

import MagneticLink from "@/components/ui/MagneticLink";

export default function HeroCTA() {
    return (
        <div className="flex flex-col items-center gap-3">
            <MagneticLink
                href="/audit"
                className="group relative px-8 py-4 md:px-10 md:py-5 bg-[#B8FF00] text-[#050508] font-heading font-bold text-base md:text-lg rounded-full transition-all duration-300 overflow-hidden inline-block"
                strength={0.25}
            >
                <span className="relative z-10">Book a Strategy Call</span>
                <div
                    className="absolute inset-0 bg-gradient-to-r from-[#B8FF00] to-[#A0E800] opacity-0 group-hover:opacity-100 transition-opacity"
                />
            </MagneticLink>

            {/* Microcopy */}
            <span className="text-[#6B6B73] text-sm font-sans">
                15 minutes · No sales pitch
            </span>
        </div>
    );
}
