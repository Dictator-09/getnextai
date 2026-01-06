"use client";

import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MorphingModel() {
    const scroll = useScroll();
    const meshRef = useRef<THREE.Mesh>(null);

    // Geometries to morph between
    // 1. Sphere (Brain/Network)
    // 2. Box (Website/Structure) 
    // 3. Torus (Voice/Waveform)
    // 4. Icosahedron (Complex/Final)

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        const r1 = scroll.range(0 / 4, 1 / 4); // 0-25%
        const r2 = scroll.range(1 / 4, 1 / 4); // 25-50%
        const r3 = scroll.range(2 / 4, 1 / 4); // 50-75%
        const r4 = scroll.range(3 / 4, 1 / 4); // 75-100%

        // Rotation Logic (Always rotating, speed changes on scroll)
        meshRef.current.rotation.x += delta * 0.2;
        meshRef.current.rotation.y += delta * 0.3 + (scroll.offset * 0.5);

        // Color Logic via Uniforms or direct material manipulation (simplified here)
        // Interpolating color based on scroll
        const color = new THREE.Color();
        if (scroll.offset < 0.25) {
            color.set("#00f5ff"); // Cyan (Brain)
        } else if (scroll.offset < 0.5) {
            color.lerp(new THREE.Color("#bd00ff"), (scroll.offset - 0.25) * 4); // Purple (Web)
        } else if (scroll.offset < 0.75) {
            color.lerp(new THREE.Color("#ff006e"), (scroll.offset - 0.5) * 4); // Pink (Voice)
        } else {
            color.lerp(new THREE.Color("#ffffff"), (scroll.offset - 0.75) * 4); // White (Contact)
        }

        if (meshRef.current.material instanceof THREE.MeshStandardMaterial) {
            meshRef.current.material.color.lerp(color, 0.1);
            meshRef.current.material.emissive.lerp(color, 0.1);
        }

        // Scale Pulse
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05 + (scroll.offset * 0.5);
        meshRef.current.scale.setScalar(scale);
    });

    return (
        <group>
            {/* Main Floating Object */}
            <mesh ref={meshRef} position={[0, 0, 0]}>
                <icosahedronGeometry args={[1.5, 0]} />
                {/* Using Icosahedron as base, low poly look */}
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
