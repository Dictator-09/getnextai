"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingParticlesProps {
    count?: number;
}

export default function FloatingParticles({ count = 100 }: FloatingParticlesProps) {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Pre-calculate random positions and speeds
    const particles = useMemo(() => {
        return Array.from({ length: count }, () => ({
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10,
            z: (Math.random() - 0.5) * 5,
            speedY: Math.random() * 0.005 + 0.002,
            speedX: (Math.random() - 0.5) * 0.002,
            scale: Math.random() * 0.03 + 0.02,
        }));
    }, [count]);

    useFrame((state) => {
        if (!meshRef.current) return;

        particles.forEach((p, i) => {
            // Gentle float upwards
            p.y += p.speedY;
            p.x += p.speedX;

            // Reset when off-screen
            if (p.y > 5) {
                p.y = -5;
                p.x = (Math.random() - 0.5) * 10;
            }

            // Add subtle sine wave for organic movement
            const wobble = Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.02;

            dummy.position.set(p.x + wobble, p.y, p.z);
            dummy.scale.set(p.scale, p.scale, p.scale);
            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
            <sphereGeometry args={[1, 8, 8]} />
            <meshBasicMaterial color="#00C9A7" transparent opacity={0.4} />
        </instancedMesh>
    );
}
