"use client";

import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";
import LazyFloatingParticles from "@/components/ui/LazyFloatingParticles";
import { ToastProvider } from "@/components/ui/Toast";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ToastProvider>
            <ScrollProgress />
            <LazyFloatingParticles />
            <ScrollToTop />
            {children}
        </ToastProvider>
    );
}
