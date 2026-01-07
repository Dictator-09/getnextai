"use client";

import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    // Lenis removed to avoid trackpad scroll conflicts.
    // This component now simply renders its children.
    useEffect(() => {
        // No side effects needed.
    }, []);
    return <>{children}</>;
}
