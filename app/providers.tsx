"use client";

import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import LazyFloatingParticles from "@/components/ui/LazyFloatingParticles";
import { ToastProvider } from "@/components/ui/Toast";
import WebVitalsReporter from "@/components/ui/WebVitalsReporter";
import { CursorProvider } from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";
import PreLoader from "@/components/ui/PreLoader";
import PageTransition from "@/components/ui/PageTransition";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CursorProvider>
            <ToastProvider>
                <PreLoader />
                <WebVitalsReporter />
                <ScrollProgress />
                <SmoothScroll>
                    <PageTransition>
                        <LazyFloatingParticles />
                        <ScrollToTop />
                        {children}
                    </PageTransition>
                </SmoothScroll>
            </ToastProvider>
        </CursorProvider>
    );
}
