"use client";

import { Canvas } from "@react-three/fiber";
import { ScrollControls, Preload } from "@react-three/drei";
import { Suspense } from "react";
import MorphingModel from "./MorphingModel";
import Overlay from "./Overlay";
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing";

export default function Scene() {
    return (
        <>
            {/* Spline 3D Model Layer */}
            <MorphingModel />

            {/* R3F Canvas for HTML Overlay and Effects */}
            <div className="fixed inset-0 z-10 h-screen w-full">
                <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1.5]}>
                    <Suspense fallback={null}>
                        <ScrollControls pages={5} damping={0.1}>
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
        </>
    );
}
