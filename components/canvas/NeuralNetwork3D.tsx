"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Float, Stars, Line } from "@react-three/drei";
import * as THREE from "three";

function ParticleNetwork({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
    const pointsRef = useRef<THREE.Points>(null!);
    const groupRef = useRef<THREE.Group>(null!);

    // Generate points in a spherical distribution (simulating a global network or brain)
    const [particles, connections] = useMemo(() => {
        const particleCount = 400;
        const positions = new Float32Array(particleCount * 3);
        const connectionPositions: number[] = [];
        const colors = new Float32Array(particleCount * 3);

        // Create points
        const points: THREE.Vector3[] = [];
        for (let i = 0; i < particleCount; i++) {
            // Random spherical distribution
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const radius = 3.5 + (Math.random() - 0.5) * 0.5; // Base radius with variation

            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            points.push(new THREE.Vector3(x, y, z));

            // Colors: Mix of Cyan (#06b6d4) and Purple (#a855f7)
            const isCyan = Math.random() > 0.5;
            const color = new THREE.Color(isCyan ? "#06b6d4" : "#a855f7");
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        // Create connections (lines between close points)
        // We limit connections to avoid performance hit
        points.forEach((p1, i) => {
            let connected = 0;
            points.forEach((p2, j) => {
                if (i >= j) return; // distinct pairs
                if (connected > 3) return; // max connections per point

                const dist = p1.distanceTo(p2);
                if (dist < 1.2) {
                    connectionPositions.push(p1.x, p1.y, p1.z);
                    connectionPositions.push(p2.x, p2.y, p2.z);
                    connected++;
                }
            });
        });

        return [
            { positions, colors },
            new Float32Array(connectionPositions)
        ];
    }, []);

    useFrame((state) => {
        if (!groupRef.current) return;

        // Gentle rotation
        groupRef.current.rotation.y += 0.001;
        groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

        // Mouse Parallax Interaction
        // We interpolate rotation based on mouse position
        const targetRotX = mouse.current[1] * 0.5; // Tilt up/down
        const targetRotY = mouse.current[0] * 0.5; // Rotate left/right

        // Apply parallax to the whole group rotation (additive to the auto-rotation)
        groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
        groupRef.current.rotation.y += (targetRotY * 0.5 - 0); // Slight nudge to Y
    });

    return (
        <group ref={groupRef}>
            {/* The Nodes (Dots) */}
            <Points ref={pointsRef} positions={particles.positions} colors={particles.colors} stride={3}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.08}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>

            {/* The Connections (Lines) */}
            {/* Using native LineSegments for performance with many lines */}
            <lineSegments>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={connections.length / 3}
                        args={[connections, 3]}
                    />
                </bufferGeometry>
                <lineBasicMaterial color="#4c1d95" transparent opacity={0.15} blending={THREE.AdditiveBlending} />
            </lineSegments>
        </group>
    );
}

function BackgroundGradient() {
    return (
        <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <shaderMaterial
                side={THREE.BackSide}
                uniforms={{
                    colorTop: { value: new THREE.Color("#020617") }, // Dark slate/black (top)
                    colorBottom: { value: new THREE.Color("#1e1b4b") }, // Deep indigo (bottom)
                }}
                vertexShader={`
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform vec3 colorTop;
                    uniform vec3 colorBottom;
                    varying vec2 vUv;
                    void main() {
                        gl_FragColor = vec4(mix(colorBottom, colorTop, vUv.y), 1.0);
                    }
                `}
            />
        </mesh>
    );
}

export default function NeuralNetwork3D() {
    const mouse = useRef<[number, number]>([0, 0]);

    const handleMouseMove = (event: React.MouseEvent) => {
        // Normalize mouse to -1 to 1
        const x = (event.clientX / window.innerWidth) * 2 - 1;
        const y = -(event.clientY / window.innerHeight) * 2 + 1;
        mouse.current = [x, y];
    };

    return (
        <div
            className="fixed inset-0 w-full h-full -z-10 bg-[#020617]"
            onMouseMove={handleMouseMove}
        >
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 2]}>
                {/* Fog for depth */}
                <fog attach="fog" args={["#020617", 5, 20]} />

                <BackgroundGradient />

                <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
                    <ParticleNetwork mouse={mouse} />
                </Float>

                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
            </Canvas>
        </div>
    );
}
