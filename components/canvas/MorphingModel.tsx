"use client";

import { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy load Spline only when needed
const Spline = dynamic(
    () => import("@splinetool/react-spline"),
    {
        ssr: false,
        loading: () => null
    }
);

export default function MorphingModel() {
    const containerRef = useRef<HTMLDivElement>(null);
    const splineRef = useRef<any>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    // Delay Spline loading until after initial paint
    useEffect(() => {
        // Wait for page to be interactive before loading heavy 3D
        const timer = requestIdleCallback
            ? requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 })
            : setTimeout(() => setShouldLoad(true), 100);

        return () => {
            if (typeof timer === 'number') {
                cancelIdleCallback ? cancelIdleCallback(timer) : clearTimeout(timer);
            }
        };
    }, []);

    const onLoad = (spline: any) => {
        splineRef.current = spline;
        if (spline.setZoom) {
            spline.setZoom(1);
        }
    };

    return (
        <div ref={containerRef} className="fixed inset-0 w-full h-screen pointer-events-none z-[1]">
            {shouldLoad && (
                <Spline
                    scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                    onLoad={onLoad}
                />
            )}
        </div>
    );
}
