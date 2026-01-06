"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import MorphingModel from "./MorphingModel";
import Overlay from "./Overlay";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

export default function Scene() {
    return (
        <div className="fixed inset-0 z-0 h-screen w-full bg-black">
            <Canvas gl={{ antialias: true, alpha: false }} dpr={[1, 1.5]}>
                <Suspense fallback={null}>
                    <ScrollControls pages={4} damping={0.1}>
                        <MorphingModel />
                        <Overlay />
                    </ScrollControls>

                    <EffectComposer>
                        <Noise opacity={0.05} />
                        <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    </EffectComposer>
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
