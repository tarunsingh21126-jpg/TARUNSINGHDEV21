import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { WireframeCube, SolidCube, FloatingSphere, TorusRing, Pyramid, ParticleField } from './GeometricObjects'

// Scene wrapper that responds to mouse & scroll
function SceneContents({ mouseRef, scrollRef }) {
  const groupRef = useRef()

  useFrame(() => {
    if (!groupRef.current) return

    // Mouse parallax — subtle tilt
    const mx = (mouseRef.current.x / window.innerWidth - 0.5) * 0.3
    const my = (mouseRef.current.y / window.innerHeight - 0.5) * -0.2
    groupRef.current.rotation.y += (mx - groupRef.current.rotation.y) * 0.04
    groupRef.current.rotation.x += (my - groupRef.current.rotation.x) * 0.04

    // Scroll: translate the whole scene upward as user scrolls
    const scrollProgress = scrollRef.current / (document.body.scrollHeight - window.innerHeight)
    groupRef.current.position.y += (scrollProgress * -3 - groupRef.current.position.y) * 0.04
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} />

      {/* Hero area objects */}
      <WireframeCube position={[-3.5, 1.5, -3]} scale={1.6} speed={0.12} />
      <SolidCube position={[3.2, -1, -2.5]} scale={1.2} speed={0.08} />
      <FloatingSphere position={[0, 2.5, -4]} radius={0.9} />
      <TorusRing position={[-2, -2, -3]} speed={0.14} />
      <Pyramid position={[3.5, 2, -3.5]} scale={1.3} speed={0.09} />

      {/* Mid-page (About / Skills area) */}
      <WireframeCube position={[4, 0, -5]} scale={2} speed={0.07} />
      <FloatingSphere position={[-3, 0, -5]} radius={1.1} speed={0.06} />
      <TorusRing position={[1, -4, -4]} color="#FF4A5F" speed={0.1} />

      {/* Lower section (Projects / Contact area) */}
      <SolidCube position={[-3.5, -5, -4]} scale={1.4} speed={0.06} />
      <Pyramid position={[3, -5, -4]} scale={1.5} speed={0.07} />
      <WireframeCube position={[0, -8, -5]} scale={1.8} speed={0.05} />

      {/* Particles sprinkled throughout */}
      <ParticleField count={80} />
    </group>
  )
}

export default SceneContents
