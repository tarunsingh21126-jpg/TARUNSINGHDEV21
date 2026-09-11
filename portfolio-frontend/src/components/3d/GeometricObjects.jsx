import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// ─── Rotation speed helpers ───────────────────────────────────────
// 12–18s per full cycle = 2π / 12 ≈ 0.524 rad/s  →  0.035–0.05 rad/frame @60fps
const DEG_SLOW   = 0.35    // ~18s per cycle
const DEG_MEDIUM = 0.45    // ~14s per cycle
const DEG_FAST   = 0.55    // ~11s per cycle


// ── 1. Wireframe Cube — thin teal edges, slow 2-axis rotation ──────
export function WireframeCube({ position, scale = 1, speed = DEG_SLOW }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * speed * 0.6
    meshRef.current.rotation.y += delta * speed
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="#00A07A" wireframe opacity={0.35} transparent />
    </mesh>
  )
}


// ── 2. Solid Cube — dark body, teal edge lines ─────────────────────
export function SolidCube({ position, scale = 1, speed = DEG_SLOW * 0.7 }) {
  const meshRef   = useRef()
  const edgesRef  = useRef()
  const edgesGeo  = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), [])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * speed * 0.5
    meshRef.current.rotation.y += delta * speed
    edgesRef.current.rotation.copy(meshRef.current.rotation)
  })

  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#1A1A20" roughness={0.9} metalness={0.1} />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edgesGeo}>
        <lineBasicMaterial color="#00A07A" opacity={0.6} transparent />
      </lineSegments>
    </group>
  )
}


// ── 3. Floating Sphere — sin-wave Y only, no spin ─────────────────
export function FloatingSphere({ position, radius = 0.7, amplitude = 0.18, freq = 0.45 }) {
  const meshRef = useRef()
  const originY = position[1]

  useFrame((state) => {
    if (!meshRef.current) return
    // Gentle sin-wave float, no continuous rotation
    meshRef.current.position.y = originY + Math.sin(state.clock.elapsedTime * freq) * amplitude
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[radius, 14, 14]} />
      <meshBasicMaterial color="#00A07A" wireframe opacity={0.3} transparent />
    </mesh>
  )
}


// ── 4. Torus Ring — thin coral line, deliberate rotation ──────────
export function TorusRing({ position, speed = DEG_MEDIUM * 0.8, color = '#C44547' }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta * speed * 0.55
    meshRef.current.rotation.y += delta * speed
  })

  return (
    <mesh ref={meshRef} position={position}>
      {/* thin tube radius (0.03) gives "line ring" feel */}
      <torusGeometry args={[0.65, 0.03, 8, 64]} />
      <meshBasicMaterial color={color} opacity={0.55} transparent />
    </mesh>
  )
}


// ── 5. Pyramid — asymmetric wireframe, one teal edge ──────────────
export function Pyramid({ position, scale = 1, speed = DEG_SLOW * 0.8 }) {
  const meshRef = useRef()

  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += delta * speed
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {/* 4 radial segments → pyramid; slight asymmetry via scale */}
      <coneGeometry args={[0.55, 1.1, 4]} />
      <meshBasicMaterial color="#00A07A" wireframe opacity={0.35} transparent />
    </mesh>
  )
}


// ── 6. Particle Field — capped count, static positions ────────────
export function ParticleField({ count = 50 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3]     = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2
    }
    return arr
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#00A07A"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}
