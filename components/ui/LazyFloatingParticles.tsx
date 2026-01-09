"use client";

import dynamic from "next/dynamic";

// Lazy load FloatingParticles on client only
const FloatingParticles = dynamic(
    () => import("./FloatingParticles"),
    {
        ssr: false,
        loading: () => null
    }
);

export default function LazyFloatingParticles() {
    return <FloatingParticles />;
}
