"use client";

import { useRef, useMemo } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Custom geometry helpers for morphing
function createBrainGeometry() {
    // Icosahedron with higher detail for AI/Brain look
    return new THREE.IcosahedronGeometry(1.5, 2);
}

function createMonitorGeometry() {
    // Box for website/monitor representation
    return new THREE.BoxGeometry(2.5, 1.5, 0.2);
}

function createWaveformGeometry() {
    // Torus knot for voice/waveform representation
    return new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
}

function createChatGeometry() {
    // Rounded box-like shape for chat bubbles
    return new THREE.DodecahedronGeometry(1.2, 0);
}

function createFinalGeometry() {
    // Abstract tetrahedron for the finale
    return new THREE.OctahedronGeometry(1.5, 0);
}

export default function MorphingModel() {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

    // Pre-create all geometries
    const geometries = useMemo(() => [
        createBrainGeometry(),     // 0: Hero - AI Brain
        createMonitorGeometry(),   // 1: Websites - Monitor
        createWaveformGeometry(),  // 2: Voice - Waveform
        createChatGeometry(),      // 3: WhatsApp - Chat
        createFinalGeometry(),     // 4: Contact - Abstract
    ], []);

    // Colors for each section
    const colors = useMemo(() => [
        new THREE.Color("#00f5ff"), // Cyan - Brain
        new THREE.Color("#bd00ff"), // Purple - Monitor
        new THREE.Color("#ff006e"), // Pink - Waveform
        new THREE.Color("#25D366"), // WhatsApp Green - Chat
        new THREE.Color("#ffffff"), // White - Final
    ], []);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const offset = Math.min(Math.max(scroll.offset, 0), 1);

        // Determine which section we're in (0-4)
        const sectionFloat = offset * 4;
        const currentSection = Math.floor(sectionFloat);
        const sectionProgress = sectionFloat - currentSection;

        // Rotate the entire group gently
        groupRef.current.rotation.y += delta * 0.3;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;

        // Update visibility and scale of each mesh based on section
        meshRefs.current.forEach((mesh, index) => {
            if (!mesh) return;

            if (index === currentSection) {
                // Current section: fade in and scale up
                const targetScale = 1 - sectionProgress * 0.3;
                mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.1));
                mesh.visible = true;

                // Fade out as we approach next section
                if (mesh.material instanceof THREE.MeshStandardMaterial) {
                    mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, 1 - sectionProgress, 0.1);
                }
            } else if (index === currentSection + 1) {
                // Next section: fade in
                const targetScale = 0.5 + sectionProgress * 0.5;
                mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, targetScale, 0.1));
                mesh.visible = true;

                if (mesh.material instanceof THREE.MeshStandardMaterial) {
                    mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, sectionProgress, 0.1);
                }
            } else {
                // Other sections: hide
                mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, 0, 0.1));
                mesh.visible = mesh.scale.x > 0.01;
            }
        });
    });

    return (
        <group ref={groupRef}>
            {geometries.map((geometry, index) => (
                <mesh
                    key={index}
                    ref={(el) => { meshRefs.current[index] = el; }}
                    geometry={geometry}
                    visible={index === 0}
                >
                    <meshStandardMaterial
                        wireframe
                        color={colors[index]}
                        emissive={colors[index]}
                        emissiveIntensity={0.5}
                        transparent
                        opacity={index === 0 ? 1 : 0}
                        roughness={0.1}
                        metalness={0.8}
                    />
                </mesh>
            ))}

            {/* Lights that change with scroll */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f5ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />
            <pointLight position={[0, 10, -10]} intensity={0.8} color="#ff006e" />
        </group>
    );
}
