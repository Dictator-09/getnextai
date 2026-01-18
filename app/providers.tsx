"use client";

import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import LazyFloatingParticles from "@/components/ui/LazyFloatingParticles";
import { ToastProvider } from "@/components/ui/Toast";
import WebVitalsReporter from "@/components/ui/WebVitalsReporter";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CustomCursor>
            <ToastProvider>
                <WebVitalsReporter />
                <ScrollProgress />
                <LazyFloatingParticles />
                <ScrollToTop />
                {children}
            </ToastProvider>
        </CustomCursor>
    );
}
