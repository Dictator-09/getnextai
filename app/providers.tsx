"use client";

import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import LazyFloatingParticles from "@/components/ui/LazyFloatingParticles";
import { ToastProvider } from "@/components/ui/Toast";
import WebVitalsReporter from "@/components/ui/WebVitalsReporter";
import { CursorProvider } from "@/components/ui/CustomCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CursorProvider>
            <ToastProvider>
                <WebVitalsReporter />
                <ScrollProgress />
                <LazyFloatingParticles />
                <ScrollToTop />
                {children}
            </ToastProvider>
        </CursorProvider>
    );
}
