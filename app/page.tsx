import { MagneticButton } from "@/components/MagneticButton";
import SceneWrapper from "@/components/SceneWrapper";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <SceneWrapper />

      {/* Hero Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto space-y-8">
        <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/50 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          GETNEXT<span className="text-primary glow-text">AI</span>
        </h1>

        <p className="max-w-xl text-lg md:text-xl text-gray-400 font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 ease-out">
          Pioneering the <span className="text-secondary font-medium">Antigravity</span> era of digital experiences.
          Agents that build, think, and evolve.
        </p>

        <div className="flex gap-6 mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400 ease-out">
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
    </main>
  );
}
