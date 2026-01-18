"use client";

import ScrollToTop from "@/components/ui/ScrollToTop";
import LazyFloatingParticles from "@/components/ui/LazyFloatingParticles";
import { ToastProvider } from "@/components/ui/Toast";
import WebVitalsReporter from "@/components/ui/WebVitalsReporter";
import { CursorProvider } from "@/components/ui/CustomCursor";
import PreLoader from "@/components/ui/PreLoader";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CursorProvider>
            <ToastProvider>
                <PreLoader />
                <WebVitalsReporter />
                <LazyFloatingParticles />
                <ScrollToTop />
                {children}
            </ToastProvider>
        </CursorProvider>
    );
}
