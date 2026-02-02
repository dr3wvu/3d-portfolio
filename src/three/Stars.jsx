import { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function StarField() {
  const pointsRef = useRef()

  // Create geometry and points once, outside useEffect
  if (!pointsRef.current) {
    const count = 6000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = Math.random() * 400 - 200
      positions[i * 3 + 1] = Math.random() * 200 - 100
      positions[i * 3 + 2] = Math.random() * -300
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: '#ffffff',
      size: 0.3,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    })

    pointsRef.current = new THREE.Points(geometry, material)
  }

  // Animate stars
  useFrame(() => {
    if (!pointsRef.current) return
    const positions = pointsRef.current.geometry.attributes.position.array

    for (let i = 0; i < positions.length; i += 3) {
      positions[i] -= 0.13
      if (positions[i] < -200) {
        positions[i] = 200
        positions[i + 1] = Math.random() * 200 - 100
        positions[i + 2] = Math.random() * -300
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (pointsRef.current) {
        pointsRef.current.geometry.dispose()
        pointsRef.current.material.dispose()
      }
    }
  }, [])

  return <primitive object={pointsRef.current} />
}

export default function Stars() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      dpr={[1, 2]}
      className="absolute inset-0"
    >
      <StarField />
    </Canvas>
  )
}
