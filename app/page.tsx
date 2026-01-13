"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamic imports - content loads after hydration, 3D loads when idle
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

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <main className="relative min-h-screen w-full transition-colors duration-500">
      {/* Content loads immediately after hydration */}
      <Overlay />

      {/* 3D model loads in background - doesn't block page */}
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </main>
  );
}

