"use client";

import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MorphingModel() {
    const scroll = useScroll();
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Clamp scroll offset to 0-1 range to prevent runaway values
        const offset = Math.min(Math.max(scroll.offset, 0), 1);

        // Calculate how "settled" we are at the end (1 = at end, 0 = at start)
        const atEnd = offset > 0.95 ? 1 - (1 - offset) * 20 : 0;

        // Base rotation speed that slows down significantly at the end
        const rotationMultiplier = 1 - (atEnd * 0.8); // Reduce to 20% speed at end

        // Rotation Logic (slows down at the end of scroll)
        meshRef.current.rotation.x += delta * 0.2 * rotationMultiplier;
        meshRef.current.rotation.y += delta * 0.3 * rotationMultiplier;

        // Color Logic - interpolate based on clamped offset
        const color = new THREE.Color();
        if (offset < 0.25) {
            color.set("#00f5ff"); // Cyan (Hero)
        } else if (offset < 0.5) {
            color.set("#00f5ff").lerp(new THREE.Color("#bd00ff"), (offset - 0.25) * 4);
        } else if (offset < 0.75) {
            color.set("#bd00ff").lerp(new THREE.Color("#ff006e"), (offset - 0.5) * 4);
        } else {
            color.set("#ff006e").lerp(new THREE.Color("#ffffff"), (offset - 0.75) * 4);
        }

        if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
            meshRef.current.material.color.lerp(color, 0.1);
            meshRef.current.material.emissive.lerp(color, 0.1);
        }

        // Scale Pulse - also settles at end
        const pulseAmount = 0.05 * rotationMultiplier;
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * pulseAmount + (offset * 0.3);
        meshRef.current.scale.setScalar(scale);
    });

    return (
        <group>
            {/* Main Floating Object */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <icosahedronGeometry args={[1.5, 0]} />
                <meshStandardMaterial
                    wireframe
                    color="#00f5ff"
                    emissive="#00f5ff"
                    emissiveIntensity={0.5}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />
        </group>
    );
}
