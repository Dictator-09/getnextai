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
        // Use requestIdleCallback if available (not in Safari), otherwise setTimeout
        let timerId: ReturnType<typeof setTimeout> | number;

        if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
            timerId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 2000 });
        } else {
            // Fallback for Safari and older browsers
            timerId = setTimeout(() => setShouldLoad(true), 100);
        }

        return () => {
            if (typeof window !== 'undefined' && 'cancelIdleCallback' in window && typeof timerId === 'number') {
                window.cancelIdleCallback(timerId);
            } else {
                clearTimeout(timerId as ReturnType<typeof setTimeout>);
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
