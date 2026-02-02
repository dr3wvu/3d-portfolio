import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from 'react'

function SpaceshipModel() {
  const groupRef = useRef()
  const gltf = useLoader(GLTFLoader, '/spaceship/scene.gltf')

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.001) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} scale={1.5} />
    </group>
  )
}

export default function Spaceship() {
  return (
    <Canvas
      camera={{ position: [0, 2, 12], fov: 40 }}
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[15, 15, 15]} intensity={1.5} />
      <pointLight position={[-15, -10, 10]} intensity={0.8} color="#ff9500" />
      <pointLight position={[15, 10, 10]} intensity={0.5} color="#4a9eff" />
      <SpaceshipModel />
      <OrbitControls
        enableZoom={false}
        autoRotate={false}
        rotateSpeed={0.1}
        minDistance={30}
        maxDistance={25}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
