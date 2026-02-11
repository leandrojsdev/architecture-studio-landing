import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Fix for missing R3F types in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      sphereGeometry: any;
      torusGeometry: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      boxGeometry: any;
      meshStandardMaterial: any;
      sphereGeometry: any;
      torusGeometry: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
    }
  }
}

const Geometries = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Base Cube - Dark Brown (Materialism, Stability) */}
        <mesh position={[0, -1, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#2d241e" roughness={0.3} metalness={0.2} />
        </mesh>

        {/* Floating Sphere - White Marble (Purity) */}
        <mesh position={[0, 1.2, 0]} castShadow receiveShadow>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshStandardMaterial color="#faf9f6" roughness={0.1} metalness={0.1} />
        </mesh>

        {/* Ring - Gold (Wealth, Greatness) */}
        <mesh position={[0, 1.2, 0]} rotation={[1.5, 0.5, 0]} castShadow receiveShadow>
          <torusGeometry args={[1.6, 0.04, 16, 100]} />
          <meshStandardMaterial color="#c5a059" roughness={0.1} metalness={1} />
        </mesh>
      </Float>
    </group>
  );
};

const BalanceSculpture: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow color="#fffaed" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#c5a059" />
        <Geometries />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.3} scale={10} blur={2.5} far={4} color="#2d241e" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default BalanceSculpture;
