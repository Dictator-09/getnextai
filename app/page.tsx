import { MagneticButton } from "@/components/MagneticButton";
import SceneWrapper from "@/components/SceneWrapper";
import { TextReveal } from "@/components/TextReveal";
import { BentoGrid } from "@/components/BentoGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* SECTION 1: HERO (100vh) */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center">
        {/* 3D Background */}
        <SceneWrapper />

        {/* Hero Content */}
        <div className="z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-8 pointer-events-none">
          <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
            NEXT GEN<br /><span className="text-primary glow-text">AUTOMATION</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out">
            Transforming businesses with <span className="text-secondary font-medium">Intelligent AI Agents</span>.
            24/7 Availability. 10x Efficiency.
          </p>

          <div className="flex gap-6 mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 ease-out pointer-events-auto">
            <MagneticButton className="bg-primary hover:bg-cyan-400 text-black font-bold px-8 py-4 text-base shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-shadow">
              Get Started
            </MagneticButton>
            <MagneticButton className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-base backdrop-blur-sm">
              View Services
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATS */}
      <section className="relative py-10 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Availability", value: "24/7" },
            { label: "Cost Reduction", value: "60%" },
            { label: "Faster Response", value: "10x" },
            { label: "Scalability", value: "100%" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center space-y-2">
              <span className="text-3xl md:text-5xl font-bold text-white tracking-tighter">{stat.value}</span>
              <span className="text-sm md:text-base text-gray-400 uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: TEXT REVEAL */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20">
        <TextReveal text="We do not just build software. We engineer digital workforce." />
      </section>

      {/* SECTION 4: BENTO GRID */}
      <section className="relative py-20 bg-gradient-to-b from-[#030712] to-[#0A0F1E]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400">Comprehensive AI solutions for the modern enterprise.</p>
        </div>
        <BentoGrid />
      </section>

      {/* SECTION 5: FOOTER CTA */}
      <section className="relative py-32 flex flex-col items-center justify-center text-center bg-[#030712]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,rgba(3,7,18,0)_70%)]" />
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 z-10">Ready to Automate?</h2>
        <MagneticButton className="z-10 bg-secondary hover:bg-fuchsia-400 text-white font-bold px-10 py-5 text-lg shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)]">
          Initialize Transformation
        </MagneticButton>
      </section>
    </main>
  );
}
