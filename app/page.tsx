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
          <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
            GETNEXT<span className="text-primary glow-text">AI</span>
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out">
            Pioneering the <span className="text-secondary font-medium">Antigravity</span> era of digital experiences.
            Agents that build, think, and evolve.
          </p>

          <div className="flex gap-6 mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 ease-out pointer-events-auto">
            <MagneticButton className="bg-primary hover:bg-cyan-400 text-black font-bold px-8 py-4 text-base shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-shadow">
              Initialize Core
            </MagneticButton>
            <MagneticButton className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-base backdrop-blur-sm">
              Explore Documentation
            </MagneticButton>
          </div>
        </div>

        {/* Footer / Status */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-4 text-xs font-mono text-gray-600 z-10 opacity-60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            SYTEM ONLINE
          </div>
          <span>::</span>
          <div>v2.0.4-BETA</div>
        </div>
      </section>

      {/* SECTION 2: TEXT REVEAL */}
      <section className="relative min-h-[50vh] flex items-center justify-center py-20">
        <TextReveal text="We do not just build software. We engineer digital consciousness." />
      </section>

      {/* SECTION 3: BENTO GRID */}
      <section className="relative py-20 bg-gradient-to-b from-[#030712] to-[#0A0F1E]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Core Architecture</h2>
          <p className="text-gray-400">The building blocks of the next generation.</p>
        </div>
        <BentoGrid />
      </section>

      {/* SECTION 4: FOOTER CTA */}
      <section className="relative py-32 flex flex-col items-center justify-center text-center bg-[#030712]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05)_0%,rgba(3,7,18,0)_70%)]" />
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 z-10">Ready to Ascend?</h2>
        <MagneticButton className="z-10 bg-secondary hover:bg-fuchsia-400 text-white font-bold px-10 py-5 text-lg shadow-[0_0_30px_rgba(255,0,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,255,0.6)]">
          Start Your Journey
        </MagneticButton>
      </section>
    </main>
  );
}
