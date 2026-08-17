"use client"

import { useEffect, useMemo, useRef, useState } from "react"

import { Canvas, useFrame, type ThreeEvent } from "@react-three/fiber"
import * as THREE from "three"

import { domainColors, technologies } from "@/data/technologies"

const NODE_COUNT = technologies.length

function Constellation({
  isMobile,
  onHover,
  onMove,
  onLeave,
}: {
  isMobile: boolean
  onHover: (index: number | null) => void
  onMove: (x: number, y: number) => void
  onLeave: () => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.InstancedMesh>(null)
  const hoveredRef = useRef<number | null>(null)

  const nodes = useMemo(
    () =>
      technologies.map((_, i) => {
        const radius = 2.6 + (i % 4) * 0.55
        const theta = (i / NODE_COUNT) * Math.PI * 2 + (i % 3) * 0.35
        const phi = Math.acos(2 * ((i * 7.31) % 1) - 1) * 0.8
        return {
          position: new THREE.Vector3(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.cos(phi) * 0.9,
            radius * Math.sin(phi) * Math.sin(theta) - 0.5
          ),
          color: new THREE.Color(domainColors[technologies[i].domain]),
        }
      }),
    []
  )

  const linePositions = useMemo(() => {
    const pairs: [number, number][] = []
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (nodes[i].position.distanceTo(nodes[j].position) < 3.2) {
          pairs.push([i, j])
        }
      }
    }
    const arr = new Float32Array(pairs.length * 2 * 3)
    pairs.forEach(([a, b], index) => {
      const pa = nodes[a].position
      const pb = nodes[b].position
      arr[index * 6] = pa.x
      arr[index * 6 + 1] = pa.y
      arr[index * 6 + 2] = pa.z
      arr[index * 6 + 3] = pb.x
      arr[index * 6 + 4] = pb.y
      arr[index * 6 + 5] = pb.z
    })
    return arr
  }, [nodes])

  const geometry = useMemo(() => new THREE.SphereGeometry(0.16, 12, 12), [])
  const dummy = useMemo(() => new THREE.Object3D(), [])

  useEffect(() => {
    const mesh = nodesRef.current
    if (!mesh) return
    nodes.forEach((node, i) => {
      dummy.position.copy(node.position)
      dummy.scale.setScalar(1)
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      mesh.setColorAt(i, node.color)
    })
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [nodes, dummy])

  useFrame((state, delta) => {
    const group = groupRef.current
    const mesh = nodesRef.current

    if (group) {
      group.rotation.y += delta * 0.08
      group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, state.pointer.y * 0.16, 0.04)
      group.rotation.z = THREE.MathUtils.lerp(group.rotation.z, state.pointer.x * 0.1, 0.04)
    }

    if (mesh) {
      nodes.forEach((node, i) => {
        const target = hoveredRef.current === i ? 1.9 : 1
        dummy.position.copy(node.position)
        dummy.scale.setScalar(dummy.scale.x + (target - dummy.scale.x) * 0.14)
        dummy.updateMatrix()
        mesh.setMatrixAt(i, dummy.matrix)
      })
      mesh.instanceMatrix.needsUpdate = true
    }
  })

  const handleMove = (e: ThreeEvent<PointerEvent>) => {
    onMove(e.nativeEvent.clientX, e.nativeEvent.clientY)
  }

  const handleOver = (e: ThreeEvent<PointerEvent>) => {
    onMove(e.nativeEvent.clientX, e.nativeEvent.clientY)
    if (e.instanceId !== undefined) {
      hoveredRef.current = e.instanceId
      onHover(e.instanceId)
    }
  }

  const handleOut = () => {
    hoveredRef.current = null
    onLeave()
  }

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#7b6bff" transparent opacity={isMobile ? 0.06 : 0.14} />
      </lineSegments>

      <instancedMesh
        ref={nodesRef}
        args={[geometry, undefined, NODE_COUNT]}
        frustumCulled={false}
        onPointerMove={handleMove}
        onPointerOver={handleOver}
        onPointerOut={handleOut}
      >
        <meshBasicMaterial toneMapped={false} />
      </instancedMesh>
    </group>
  )
}

export function TechConstellationScene({ isMobile }: { isMobile: boolean }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [hovering, setHovering] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const node = hovered !== null ? technologies[hovered] : null

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={isMobile ? [1, 1.1] : [1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Constellation
          isMobile={isMobile}
          onHover={(index) => {
            setHovered(index)
            setHovering(index !== null)
          }}
          onMove={(x, y) => setMouse({ x, y })}
          onLeave={() => {
            setHovered(null)
            setHovering(false)
          }}
        />
      </Canvas>

      <div
        className="pointer-events-none fixed z-[60]"
        style={{
          opacity: hovering && node ? 1 : 0,
          left: mouse.x,
          top: mouse.y,
          transform: "translate(-50%, calc(100% + 10px))",
          transition: "opacity 0.2s ease",
        }}
      >
        <div className="glass flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-1.5">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: domainColors[node?.domain ?? "frontend"] }}
          />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">{node?.name}</span>
        </div>
      </div>
    </div>
  )
}
