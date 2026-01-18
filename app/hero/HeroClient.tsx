"use client";

import dynamic from "next/dynamic";

// Client-only motion
const HeroMotion = dynamic(() => import("./HeroMotion"), {
    ssr: false,
    loading: () => null,
});

export default function HeroClient() {
    return <HeroMotion />;
}
