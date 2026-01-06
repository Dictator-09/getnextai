"use client";

import dynamic from "next/dynamic";

const Hero3D = dynamic(() => import("@/components/Hero3D"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-[#030712]" />
});

export default function SceneWrapper() {
    return <Hero3D />;
}
