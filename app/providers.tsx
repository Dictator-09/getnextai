"use client";

import { ReactNode, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import { CursorProvider } from "@/components/ui/CustomCursor";
import { ToastProvider } from "@/components/ui/Toast";
import PreLoader from "@/components/ui/PreLoader";
import ScrollToTop from "@/components/ui/ScrollToTop";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <AnimatePresence mode="wait">
            <CursorProvider>
                <ToastProvider>
                    <PreLoader />
                    <Suspense fallback={<LoadingFallback />}>
                        <ScrollToTop />
                        {children}
                    </Suspense>
                </ToastProvider>
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
