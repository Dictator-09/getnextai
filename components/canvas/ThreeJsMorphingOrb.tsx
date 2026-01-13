"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

function Orb({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Smoothly interpolate mouse position for parallax
        // We dampen the movement to feel like a heavy, floating object
        const x = (mouse.current[0] * state.viewport.width) / 20;
        const y = (mouse.current[1] * state.viewport.height) / 20;

        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, x, 0.05);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, y, 0.05);
    });

    return (
        <Float
            speed={2} // Animation speed
            rotationIntensity={1.5} // xyz rotation intensity
            floatIntensity={2} // Up/down float intensity
        >
            <Sphere
                ref={meshRef}
                args={[1, 64, 64]} // Radius, width segments, height segments
                scale={2.2}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <MeshDistortMaterial
                    color={hovered ? "#a855f7" : "#06b6d4"} // Purple on hover, Cyan default
                    attach="material"
                    distort={0.45} // Amount of distortion
                    speed={2} // Speed of distortion
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}

export default function ThreeJsMorphingOrb() {
    const mouse = useRef<[number, number]>([0, 0]);

    const handleMouseMove = (event: React.MouseEvent) => {
        // Normalize mouse coordinates to -1 to 1
        mouse.current = [
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1,
        ];
    };

    return (
        <div
            className="fixed inset-0 w-full h-full -z-10 bg-black"
            onMouseMove={handleMouseMove}
        >
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                {/* Ambient light for base illumination */}
                <ambientLight intensity={0.5} />

                {/* Directional lights for depth and color blending */}
                <directionalLight position={[10, 10, 5]} intensity={1} color="#06b6d4" /> {/* Cyan */}
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#a855f7" /> {/* Purple */}

                <Orb mouse={mouse} />

                {/* Background stars/particles */}
                <Stars
                    radius={300}
                    depth={50}
                    count={5000}
                    factor={4}
                    saturation={0}
                    fade
                    speed={1}
                />
            </Canvas>
        </div>
    );
}
