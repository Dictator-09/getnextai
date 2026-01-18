import HeroCTA from "./HeroCTA";

/**
 * HeroStatic - Server-rendered hero section
 * Renders in view-source, visible without JavaScript
 */
export default function HeroStatic() {
    return (
        <section className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden">
            {/* Near-black background */}
            <div className="absolute inset-0 bg-[#050508]" />

            {/* Procedural grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20"
                style={{
                    background: "radial-gradient(circle, rgba(184, 255, 0, 0.15) 0%, transparent 60%)",
                    filter: "blur(80px)",
                }}
            />

            {/* Grain texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                {/* Headline */}
                <h1 className="font-heading font-bold tracking-tighter leading-[0.9] mb-6 md:mb-8">
                    <span className="block text-[clamp(2.5rem,10vw,7rem)] text-[#E8E8ED]">
                        Your Business.
                    </span>
                    <span className="block text-[clamp(2.5rem,10vw,7rem)] text-[#E8E8ED]">
                        Running on{" "}
                        <span className="text-[#00C9A7]">Intelligence.</span>
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-[clamp(1rem,2.5vw,1.375rem)] text-[#A0A0A8] font-sans font-light max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed">
                    We design and deploy AI systems that replace manual work,
                    <br className="hidden sm:block" />
                    compress decision time, and scale without friction.
                </p>

                {/* CTA - Client component for magnetic effect */}
                <HeroCTA />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
                <span className="text-[#6B6B73] text-xs font-sans tracking-widest uppercase">
                    Scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-[#6B6B73] to-transparent" />
            </div>
        </section>
    );
}
