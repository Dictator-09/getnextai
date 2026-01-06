"use client";

import Spline from "@splinetool/react-spline";
import { useState } from "react";

export default function Hero3D() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="absolute inset-0 z-0 h-screen w-full">
            {isLoading && (
                <div className="flex h-full w-full items-center justify-center bg-[#030712] text-cyan-500">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,rgba(3,7,18,0)_50%)]" />
                    <span className="animate-pulse tracking-widest text-sm font-mono uppercase z-10">Initializing 3D Environment...</span>
                </div>
            )}
            <Spline
                // PLACEHOLDER: Replace with your specific 'Cyberpunk City' scene URL from Spline Dashboard
                // Example: https://prod.spline.design/[YOUR_SCENE_ID]/scene.splinecode
                scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                onLoad={() => setIsLoading(false)}
                className="h-full w-full"
            />
            {/* Overlay gradient for better text readability */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#030712]/50 to-transparent pointer-events-none" />
        </div>
    );
}
