import { Canvas } from '@react-three/fiber'
import { useRef, useEffect } from 'react'
import Scene from './Scene'

export default function GeometricBackground() {
  const mouseRef = useRef({ x: 0, y: 0 })
  const scrollRef = useRef(0)
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const handleScroll = () => {
      scrollRef.current = window.scrollY
    }
    const handleVisibility = () => {
      // Pause logic handled by R3F frameloop='demand'
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#161617' }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        frameloop={document.hidden ? 'never' : 'always'}
      >
        {!reducedMotion && (
          <Scene mouseRef={mouseRef} scrollRef={scrollRef} />
        )}
      </Canvas>
    </div>
  )
}
