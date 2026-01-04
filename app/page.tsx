import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-neutral-950 to-black overflow-hidden relative">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="z-10 text-center space-y-8">
                <h1 className="text-7xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                    ANTIGRAVITY
                </h1>
                <p className="text-xl text-neutral-400 max-w-lg mx-auto leading-relaxed">
                    Defying the laws of traditional automation.
                    <br />
                    Experience weightless workflows.
                </p>

                <div className="flex gap-4 justify-center pt-8">
                    <Button variant="neon" size="lg">
                        Initialize Core
                    </Button>
                    <Button variant="ghost" size="lg" className="text-neutral-400 hover:text-white">
                        Read Documentation
                    </Button>
                </div>
            </div>
        </main>
    );
}
