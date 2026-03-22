"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"
import { Suspense, useRef } from "react"
import * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.3) * 0.2
      meshRef.current.rotation.y = clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.2}>
        <MeshDistortMaterial
          color="#64ffda"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe
        />
      </Sphere>
    </Float>
  )
}

function OrbitingRing({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = clock.elapsedTime * speed
    }
  })

  return (
    <group ref={groupRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.02, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.3} />
      </mesh>
      {/* Orbiting particle */}
      <mesh position={[radius, 0, 0]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 200

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10
  }

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#64ffda"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-5">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6090" />
          
          <AnimatedSphere />
          <OrbitingRing radius={3} speed={0.5} color="#64ffda" />
          <OrbitingRing radius={3.5} speed={-0.3} color="#ff6090" />
          <OrbitingRing radius={4} speed={0.2} color="#7c3aed" />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  )
}
