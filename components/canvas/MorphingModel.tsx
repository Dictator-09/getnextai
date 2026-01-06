"use client";

import { useRef, useMemo } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MorphingModel() {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

    // 5 shapes for 5 sections
    const geometries = useMemo(() => [
        new THREE.IcosahedronGeometry(1.5, 2),      // Hero: AI Brain
        new THREE.BoxGeometry(2.5, 1.5, 0.2),       // Websites: Monitor
        new THREE.TorusKnotGeometry(1, 0.3, 64, 8), // Voice: Waveform
        new THREE.DodecahedronGeometry(1.2, 0),     // WhatsApp: Chat
        new THREE.OctahedronGeometry(1.5, 0),       // Contact: Abstract
    ], []);

    // Colors for each section
    const colors = useMemo(() => [
        new THREE.Color("#00f5ff"), // Cyan
        new THREE.Color("#bd00ff"), // Purple
        new THREE.Color("#ff006e"), // Pink
        new THREE.Color("#25D366"), // WhatsApp Green
        new THREE.Color("#ffffff"), // White
    ], []);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        // scroll.offset goes from 0 to 1 across all 5 pages
        // We need to map this to 5 sections (0-4)
        // Section boundaries: 0-0.2, 0.2-0.4, 0.4-0.6, 0.6-0.8, 0.8-1.0
        const offset = Math.min(Math.max(scroll.offset, 0), 0.999);

        // Determine current section (0-4)
        let currentSection = 0;
        if (offset < 0.2) currentSection = 0;
        else if (offset < 0.4) currentSection = 1;
        else if (offset < 0.6) currentSection = 2;
        else if (offset < 0.8) currentSection = 3;
        else currentSection = 4;

        // Calculate progress within current section (0-1)
        const sectionSize = 0.2; // Each section is 20% of total scroll
        const sectionStart = currentSection * sectionSize;
        const sectionProgress = (offset - sectionStart) / sectionSize;

        const nextSection = Math.min(currentSection + 1, 4);

        // Gentle rotation
        groupRef.current.rotation.y += delta * 0.2;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

        // Update each mesh
        meshRefs.current.forEach((mesh, index) => {
            if (!mesh) return;

            const mat = mesh.material as THREE.MeshStandardMaterial;

            if (index === currentSection) {
                // Current section: visible, fading out
                mesh.visible = true;
                const scale = 1 - sectionProgress * 0.4;
                mesh.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
                mat.opacity = THREE.MathUtils.lerp(mat.opacity, 1 - sectionProgress * 0.7, 0.15);
            } else if (index === nextSection && currentSection !== 4) {
                // Next section: fading in (unless we're at the last section)
                mesh.visible = true;
                const scale = 0.6 + sectionProgress * 0.4;
                mesh.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
                mat.opacity = THREE.MathUtils.lerp(mat.opacity, sectionProgress * 0.7, 0.15);
            } else {
                // Hidden sections
                mesh.visible = false;
                mesh.scale.set(0.01, 0.01, 0.01);
                mat.opacity = 0;
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
                    scale={index === 0 ? 1 : 0.01}
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

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f5ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />
            <pointLight position={[0, 10, -10]} intensity={0.8} color="#ff006e" />
        </group>
    );
}
