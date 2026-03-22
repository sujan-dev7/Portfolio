"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import { Suspense, useRef, useMemo } from "react"
import * as THREE from "three"

function StarField() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(5000 * 3)
    for (let i = 0; i < 5000; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * 50
      pos[i3 + 1] = (Math.random() - 0.5) * 50
      pos[i3 + 2] = (Math.random() - 0.5) * 50
    }
    return pos
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02
      ref.current.rotation.y -= delta * 0.03
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#64ffda"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  )
}

function NebulaField() {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      const i3 = i * 3
      const theta = Math.random() * Math.PI * 2
      const radius = 5 + Math.random() * 20
      pos[i3] = Math.cos(theta) * radius
      pos[i3 + 1] = (Math.random() - 0.5) * 10
      pos[i3 + 2] = Math.sin(theta) * radius
    }
    return pos
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6090"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  )
}

export function StarBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 60, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <StarField />
          <NebulaField />
        </Suspense>
      </Canvas>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
    </div>
  )
}
