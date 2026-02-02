import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { use, useRef, Suspense } from 'react'
import * as THREE from 'three'

function Earth() {
  const globeRef = useRef()
  const orbitRef = useRef()
  const cloudRef = useRef()

  const texture = useLoader(THREE.TextureLoader, '/textures/newearth.jpg')
  const cloud = useLoader(THREE.TextureLoader, '/textures/newclouds.jpg')

  useFrame(() => {
    globeRef.current.rotation.y += 0.002
    cloudRef.current.rotation.y += 0.003
    orbitRef.current.rotation.y += 0.003
  })

  const orbitGeometry = new THREE.TorusGeometry(1.5, 0.01, 16, 100)
  const orbitMaterial = new THREE.MeshBasicMaterial({
    color: '#ff8d1e',
    transparent: true,
    opacity: 0.9,
  })

  return (
    <group>
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.3, 64, 64]} />
        <meshStandardMaterial
          map={texture}
          metalness={0.2}
          roughness={0.6}
          emissive="#333333"
          emissiveIntensity={0.3}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.33, 64, 64]} />
        <meshStandardMaterial
          map={cloud}
          transparent={true}
          opacity={0.5}
          depthWrite={false}
        />
      </mesh>
      <group ref={orbitRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.9, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ff8d1e"
            emissiveIntensity={10}
            toneMapped={false}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[1.9, 0.05, 16, 100]} />
          <meshBasicMaterial
            color="#ff8d1e"
            transparent
            opacity={0.3}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>
    </group>
  )
}

export default function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
