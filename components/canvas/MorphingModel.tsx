"use client";

import { useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MorphingModel() {
    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);
    const outerSphereRef = useRef<THREE.Mesh>(null);
    const innerSphereRef = useRef<THREE.Mesh>(null);
    const particlesRef = useRef<THREE.Points>(null);

    useFrame((state, delta) => {
        if (!groupRef.current) return;

        const offset = Math.min(Math.max(scroll.offset, 0), 0.999);

        // Keep orb centered - no Y position change

        // Outer sphere rotation
        if (outerSphereRef.current) {
            outerSphereRef.current.rotation.x += delta * 0.3;
            outerSphereRef.current.rotation.y += delta * 0.2;
        }

        // Inner sphere counter-rotation
        if (innerSphereRef.current) {
            innerSphereRef.current.rotation.x -= delta * 0.4;
            innerSphereRef.current.rotation.y -= delta * 0.3;
        }

        // Particles rotation
        if (particlesRef.current) {
            particlesRef.current.rotation.y += delta * 0.1;
        }

        // Gentle Y-axis rotation for entire group
        groupRef.current.rotation.y += delta * 0.15;

        // Color shift based on scroll
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

        // Apply color to both spheres
        if (outerSphereRef.current) {
            const mat = outerSphereRef.current.material as THREE.MeshStandardMaterial;
            mat.color.lerp(color, 0.1);
            mat.emissive.lerp(color, 0.1);
        }

        if (innerSphereRef.current) {
            const mat = innerSphereRef.current.material as THREE.MeshStandardMaterial;
            mat.emissive.lerp(color, 0.15);
        }

        // Pulsing scale
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
        groupRef.current.scale.setScalar(pulse);
    });

    // Create particle positions for the orb effect
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
        const radius = 2 + Math.random() * 0.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return (
        <group ref={groupRef} position={[0, 0, 0]}>
            {/* Outer wireframe sphere */}
            <mesh ref={outerSphereRef}>
                <icosahedronGeometry args={[1.8, 1]} />
                <meshStandardMaterial
                    wireframe
                    color="#00f5ff"
                    emissive="#00f5ff"
                    emissiveIntensity={0.6}
                    roughness={0.1}
                    metalness={0.9}
                />
            </mesh>

            {/* Inner glowing sphere */}
            <mesh ref={innerSphereRef}>
                <sphereGeometry args={[1.2, 32, 32]} />
                <meshStandardMaterial
                    transparent
                    opacity={0.3}
                    color="#00f5ff"
                    emissive="#00f5ff"
                    emissiveIntensity={0.8}
                    roughness={0.2}
                    metalness={0.8}
                />
            </mesh>

            {/* Floating particles */}
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.05}
                    color="#00f5ff"
                    transparent
                    opacity={0.6}
                    sizeAttenuation
                />
            </points>

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f5ff" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#bd00ff" />
            <pointLight position={[0, 10, -10]} intensity={0.8} color="#ff006e" />
        </group>
    );
}
