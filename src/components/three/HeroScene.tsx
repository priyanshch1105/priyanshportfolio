"use client"

import { useMemo, useRef } from "react"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei"
import * as THREE from "three"

import { mulberry32 } from "@/utils/random"

const PARTICLE_VERTEX = /* glsl */ `
  attribute float aScale;
  attribute float aRand;
  uniform float uTime;
  varying float vRand;

  void main() {
    vec3 pos = position;
    float wave = sin(uTime * 0.25 + aRand * 6.2831) * 0.06;
    pos.y += wave;
    pos.x += cos(uTime * 0.2 + aRand * 6.2831) * 0.05;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aScale * (180.0 / -mvPosition.z);
    vRand = aRand;
    gl_Position = projectionMatrix * mvPosition;
  }
`

const PARTICLE_FRAGMENT = /* glsl */ `
  uniform float uTime;
  varying float vRand;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    float alpha = smoothstep(0.5, 0.05, d);

    vec3 violet = vec3(0.48, 0.42, 1.0);
    vec3 blue = vec3(0.30, 0.47, 1.0);
    vec3 aqua = vec3(0.37, 0.91, 0.88);
    vec3 color = mix(violet, blue, vRand);
    color = mix(color, aqua, smoothstep(0.85, 1.0, vRand));

    float flicker = 0.75 + 0.25 * sin(uTime * 1.4 + vRand * 40.0);
    gl_FragColor = vec4(color, alpha * 0.72 * flicker);
  }
`

function ParticleField({ count }: { count: number }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const pointsRef = useRef<THREE.Points>(null)

  const { positions, scales, rands } = useMemo(() => {
    const random = mulberry32(0x5eed)
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    const rands = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const radius = 2.6 + random() * 5.2
      const theta = random() * Math.PI * 2
      const phi = Math.acos(2 * random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.65
      positions[i * 3 + 2] = radius * Math.cos(phi) - 1.2
      scales[i] = 0.5 + random() * 1.8
      rands[i] = random()
    }
    return { positions, scales, rands }
  }, [count])

  useFrame((state) => {
    const material = materialRef.current
    if (material) material.uniforms.uTime.value = state.clock.elapsedTime
    if (pointsRef.current) pointsRef.current.rotation.y = state.clock.elapsedTime * 0.012
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
        vertexShader={PARTICLE_VERTEX}
        fragmentShader={PARTICLE_FRAGMENT}
        uniforms={{ uTime: { value: 0 } }}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function CoreGeometry() {
  const wireRef = useRef<THREE.Mesh>(null)
  const blobRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (wireRef.current) {
      wireRef.current.rotation.x += delta * 0.08
      wireRef.current.rotation.y += delta * 0.14
    }
    if (blobRef.current) {
      blobRef.current.rotation.y += delta * 0.05
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 0.9) * 0.06
      blobRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <group>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2.15, 1]} />
        <meshBasicMaterial color="#2e2e45" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={blobRef}>
        <sphereGeometry args={[1.05, 48, 48]} />
        <MeshDistortMaterial
          color="#0d0d1a"
          emissive="#7b6bff"
          emissiveIntensity={0.55}
          roughness={0.12}
          metalness={0.92}
          distort={0.32}
          speed={1.6}
        />
      </mesh>
    </group>
  )
}

function Rig({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    const scroll =
      typeof window !== "undefined"
        ? window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
        : 0

    const group = groupRef.current
    if (group) {
      group.rotation.y += delta * (0.05 + scroll * 0.4)
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, state.pointer.y * 0.14, 0.05)
      const targetX = state.pointer.x * 0.35
      const targetY = state.pointer.y * -0.2
      group.position.x = THREE.MathUtils.lerp(group.position.x, targetX, 0.06)
      group.position.y = THREE.MathUtils.lerp(group.position.y, targetY, 0.06)
    }

    const camera = state.camera as THREE.PerspectiveCamera
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6.4 - scroll * 1.4, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return <group ref={groupRef}>{children}</group>
}

export function HeroScene({ isMobile }: { isMobile: boolean }) {
  return (
    <Canvas
      dpr={isMobile ? [1, 1.2] : [1, 1.5]}
      camera={{ position: [0, 0, 6.4], fov: 45 }}
      gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
    >
      <fog attach="fog" args={["#050506", 7, 13]} />
      <Rig>
        <ParticleField count={isMobile ? 450 : 1700} />
        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.6}>
          <CoreGeometry />
        </Float>
        <Sparkles
          count={isMobile ? 40 : 110}
          scale={[10, 6, 6]}
          size={1.6}
          speed={0.22}
          color="#a99dff"
          opacity={0.55}
        />
      </Rig>
      <pointLight position={[6, 4, 6]} intensity={90} color="#7b6bff" />
      <pointLight position={[-6, -3, 5]} intensity={70} color="#4d7cff" />
    </Canvas>
  )
}
