"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FloatingParticles from "./FloatingParticles";

export default function Scene() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas
                dpr={[1, 1.5]} // Cap pixel ratio for performance
                camera={{ position: [0, 0, 5], fov: 50 }}
                style={{ background: "transparent" }}
                gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
            >
                <Suspense fallback={null}>
                    <FloatingParticles count={100} />
                    <ambientLight intensity={0.3} />
                </Suspense>
            </Canvas>
        </div>
    );
}
