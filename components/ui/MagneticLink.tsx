"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useCursor } from "@/components/ui/CustomCursor";

interface MagneticLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    strength?: number;
}

export default function MagneticLink({
    href,
    children,
    className = "",
    strength = 0.3,
}: MagneticLinkProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const { setVariant } = useCursor();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * strength);
        y.set(distanceY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setVariant("default");
    };

    const handleMouseEnter = () => {
        setVariant("button");
    };

    return (
        <motion.div style={{ x: xSpring, y: ySpring }}>
            <Link
                ref={ref}
                href={href}
                className={className}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
            >
                {children}
            </Link>
        </motion.div>
    );
}
