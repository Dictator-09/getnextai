"use client";

import { useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export default function MorphingModel() {
    const splineRef = useRef<any>(null);

    const onLoad = (spline: any) => {
        splineRef.current = spline;

        // Optional: Set initial state or trigger built-in Spline states
        if (spline.setZoom) {
            spline.setZoom(1);
        }
    };

    return (
        <div className="fixed inset-0 w-full h-screen pointer-events-none z-[1]">
            <Spline
                scene="https://prod.spline.design/pZ0YbecNqQsTFe0L/scene.splinecode"
                onLoad={onLoad}
            />
        </div>
    );
}
