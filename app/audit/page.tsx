"use client";

import dynamic from "next/dynamic";

const AIAuditSection = dynamic(() => import("@/components/ui/AIAuditSection"), {
    ssr: false,
    loading: () => (
        <div className="min-h-screen w-full bg-black flex items-center justify-center">
            <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
                Loading...
            </div>
        </div>
    )
});

const Scene = dynamic(() => import("@/components/canvas/Scene"), {
    ssr: false,
    loading: () => null
});

export default function AuditPage() {
    return (
        <main className="relative min-h-screen w-full">
            {/* 3D Background */}
            <Scene />

            {/* AI Audit Section as full page */}
            <div className="relative z-20">
                <AIAuditSection />
            </div>
        </main>
    );
}
