import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import React, { Suspense, useEffect, useState, useRef } from 'react'
import Loader from '../components/Loader'

const SpaceshipModel = ({ isMobile }) => {
  const groupRef = useRef()
  const gltf = useLoader(GLTFLoader, '/spaceship/scene.gltf')

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.15
    }
  })

  return (
    <mesh ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[15, 15, 15]} intensity={1.5} />
      <pointLight position={[-15, -10, 10]} intensity={0.8} color="#ff9500" />
      <pointLight position={[15, 10, 10]} intensity={0.5} color="#4a9eff" />
      <primitive
        object={gltf.scene}
        scale={isMobile ? 0.5 : 1.5}
        position={[0, -7.0, 0]}
      />
      <OrbitControls
        enableZoom={false}
        autoRotate={false}
        rotateSpeed={0.1}
        minDistance={80}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </mesh>
  )
}

export default function Spaceship() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }, [])

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ width: '100%', height: '100vh' }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SpaceshipModel isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
