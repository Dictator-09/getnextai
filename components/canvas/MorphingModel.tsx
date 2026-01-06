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
        new THREE.IcosahedronGeometry(1.5, 2),    // Hero: AI Brain
        new THREE.BoxGeometry(2.5, 1.5, 0.2),     // Websites: Monitor
        new THREE.TorusKnotGeometry(1, 0.3, 64, 8), // Voice: Waveform
        new THREE.DodecahedronGeometry(1.2, 0),   // WhatsApp: Chat
        new THREE.OctahedronGeometry(1.5, 0),     // Contact: Abstract
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

        // Clamp offset strictly to 0-1
        const offset = Math.min(Math.max(scroll.offset, 0), 0.999);

        // Map offset to section index (0-4 for 5 sections)
        // offset 0.0-0.2 = section 0, 0.2-0.4 = section 1, etc.
        const sectionFloat = offset * 5;
        const currentSection = Math.min(Math.floor(sectionFloat), 4);
        const nextSection = Math.min(currentSection + 1, 4);
        const sectionProgress = sectionFloat - currentSection;

        // Gentle rotation
        groupRef.current.rotation.y += delta * 0.2;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;

        // Update each mesh
        meshRefs.current.forEach((mesh, index) => {
            if (!mesh) return;

            const mat = mesh.material as THREE.MeshStandardMaterial;

            if (index === currentSection) {
                // Current section: visible, fading out as we scroll
                mesh.visible = true;
                const scale = 1 - sectionProgress * 0.5;
                mesh.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
                mat.opacity = THREE.MathUtils.lerp(mat.opacity, 1 - sectionProgress, 0.15);
            } else if (index === nextSection && currentSection !== nextSection) {
                // Next section: fading in
                mesh.visible = true;
                const scale = 0.5 + sectionProgress * 0.5;
                mesh.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
                mat.opacity = THREE.MathUtils.lerp(mat.opacity, sectionProgress, 0.15);
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
