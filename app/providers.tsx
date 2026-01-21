"use client";

import { ReactNode, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "@/components/ui/CustomCursor";
import { ToastProvider } from "@/components/ui/Toast";
import CinematicLoader from "@/components/ui/CinematicLoader";
import ScrollToTop from "@/components/ui/ScrollToTop";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import dynamic from "next/dynamic";

// Dynamically import Scene (R3F) to avoid SSR issues
const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <AnimatePresence mode="wait">
            <CursorProvider>
                <SmoothScrollProvider>
                    <ToastProvider>
                        <CinematicLoader />
                        <Scene />
                        <Suspense fallback={<LoadingFallback />}>
                            <ScrollToTop />
                            {children}
                        </Suspense>
                    </ToastProvider>
                </SmoothScrollProvider>
            </CursorProvider>
        </AnimatePresence>
    );
}

function LoadingFallback() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050508]">
            <div className="text-[#B8FF00] text-xl font-mono">Loading...</div>
        </div>
    );
}
