"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "@/components/ui/Loader";

// Dynamic import for the 3D Scene to avoid SSR issues
const Scene = dynamic(() => import("@/components/canvas/Scene"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />
});

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative h-screen w-full bg-black">
      {!loaded && <Loader onFinished={() => setLoaded(true)} />}
      {loaded && (
        <div className="animate-in fade-in duration-1000">
          <Scene />
        </div>
      )}
    </main>
  );
}
