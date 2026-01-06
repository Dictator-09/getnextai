"use client";

import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MorphingModel() {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (!groupRef.current || !meshRef.current) return;

        const offset = Math.min(Math.max(scroll.offset, 0), 0.999);

        // Position: Move down as user scrolls (Y axis goes from top to bottom)
        // Start at Y=2, end at Y=-8 (moves down 10 units total)
        const yPosition = 2 - (offset * 10);
        groupRef.current.position.y = yPosition;

        // Rotation: Roll the object as it moves down
        // Complete multiple full rotations as it travels
        meshRef.current.rotation.x = offset * Math.PI * 8; // 4 full rotations
        meshRef.current.rotation.z = offset * Math.PI * 4; // 2 full rotations on Z axis

        // Gentle continuous rotation for visual interest
        groupRef.current.rotation.y += delta * 0.3;

        // Color shift based on scroll position
        const mat = meshRef.current.material as THREE.MeshStandardMaterial;
        const color = new THREE.Color();

        if (offset < 0.2) {
            color.set("#00f5ff"); // Cyan
        } else if (offset < 0.4) {
            color.set("#bd00ff"); // Purple
        } else if (offset < 0.6) {
            color.set("#ff006e"); // Pink
        } else if (offset < 0.8) {
            color.set("#25D366"); // Green
        } else {
            color.set("#ffffff"); // White
        }

        mat.color.lerp(color, 0.1);
        mat.emissive.lerp(color, 0.1);

        // Scale pulse for visual interest
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
        meshRef.current.scale.setScalar(pulse);
    });

    return (
        <group ref={groupRef} position={[0, 2, 0]}>
            {/* Main rolling object - using Icosahedron for interesting rolling motion */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.5, 1]} />
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
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f5ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />
            <pointLight position={[0, 10, -10]} intensity={0.8} color="#ff006e" />
        </group>
    );
}
