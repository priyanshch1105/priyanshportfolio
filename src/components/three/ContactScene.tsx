"use client"

import { useMemo, useRef } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

import { mulberry32 } from "@/utils/random"

const FRAGMENT = /* glsl */ `
  uniform float uTime;
  varying float vRand;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float alpha = smoothstep(0.5, 0.05, d);
    vec3 violet = vec3(0.48, 0.42, 1.0);
    vec3 blue = vec3(0.30, 0.47, 1.0);
    vec3 color = mix(violet, blue, vRand);
    float flicker = 0.7 + 0.3 * sin(uTime * 1.2 + vRand * 40.0);
    gl_FragColor = vec4(color, alpha * 0.5 * flicker);
  }
`

const VERTEX = /* glsl */ `
  attribute float aScale;
  attribute float aRand;
  uniform float uTime;
  varying float vRand;

  void main() {
    vec3 pos = position;
    pos.y += sin(uTime * 0.3 + aRand * 6.2831) * 0.08;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aScale * (150.0 / -mvPosition.z);
    vRand = aRand;
    gl_Position = projectionMatrix * mvPosition;
  }
`

function ContactField({ count }: { count: number }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, scales, rands } = useMemo(() => {
    const random = mulberry32(0x0ff1ce)
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const rands = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + random() * 4.4
      const theta = random() * Math.PI * 2
      const phi = Math.acos(2 * random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.7
      positions[i * 3 + 2] = radius * Math.cos(phi) - 0.8
      scales[i] = 0.4 + random() * 1.4
      rands[i] = random()
    }
    return { positions, scales, rands }
  }, [count])

  useFrame((state) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    if (pointsRef.current) pointsRef.current.rotation.y = state.clock.elapsedTime * 0.015
  })

  return (
    <points ref={pointsRef} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aRand" args={[rands, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={VERTEX}
        fragmentShader={FRAGMENT}
        uniforms={{ uTime: { value: 0 } }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function CenterKnot() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * 0.06
    meshRef.current.rotation.y += delta * 0.1
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.04
    meshRef.current.scale.setScalar(pulse)
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.6, 0.42, 96, 16]} />
      <meshBasicMaterial color="#1c1c2e" wireframe transparent opacity={0.5} />
    </mesh>
  )
}

function Rig() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      state.pointer.y * 0.12,
      0.04
    )
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      state.pointer.x * 0.2,
      0.04
    )
  })

  return <group ref={groupRef} />
}

export function ContactScene({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas
      dpr={isMobile ? [1, 1.1] : [1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Rig />
      <ContactField count={isMobile ? 350 : 1000} />
      <CenterKnot />
      <pointLight position={[4, 2, 5]} intensity={60} color="#7b6bff" />
    </Canvas>
  )
}
