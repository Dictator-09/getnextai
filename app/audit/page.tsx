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

export default function AuditPage() {
    return (
        <main className="relative min-h-screen w-full bg-[#030305]">
            <AIAuditSection />
        </main>
    );
}
