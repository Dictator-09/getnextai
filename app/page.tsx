"use client";

import dynamic from "next/dynamic";

// Dynamic import - content loads after hydration
const Overlay = dynamic(() => import("@/components/canvas/Overlay"), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="text-4xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
        GETNEXT<span className="text-white">AI</span>
      </div>
    </div>
  )
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full transition-colors duration-500">
      <Overlay />
    </main>
  );
}
