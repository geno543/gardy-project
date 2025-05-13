import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { 
  Text, 
  Float, 
  MeshDistortMaterial, 
  MeshReflectorMaterial,
  Cylinder,
  RoundedBox,
  Sphere
} from '@react-three/drei';
import { Mesh, Vector2, Vector3 } from 'three';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import * as THREE from 'three';

const Scene: React.FC = () => {
  const sphereRef = useRef<Mesh>(null);
  const reflectorRef = useRef<Mesh>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const meshRef2 = useRef<THREE.Mesh>(null);
  
  // Animation loop
  useFrame((_state, delta: number) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.2;
      sphereRef.current.rotation.x += delta * 0.05;
      
      // Subtle floating motion
      sphereRef.current.position.y = Math.sin(_state.clock.elapsedTime * 0.5) * 0.1;
    }
    
    if (meshRef.current) {
      meshRef.current.rotation.x = _state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = _state.clock.getElapsedTime() * 0.15;
    }
    
    if (meshRef2.current) {
      meshRef2.current.rotation.x = _state.clock.getElapsedTime() * -0.05;
      meshRef2.current.rotation.y = _state.clock.getElapsedTime() * -0.1;
    }
  });

  return (
    <>
      {/* Environment effects */}
      <EffectComposer>
        <Bloom 
          intensity={0.5} 
          luminanceThreshold={0.2} 
          luminanceSmoothing={0.9}
        />
        <ChromaticAberration 
          offset={new Vector2(0.0005, 0.0005)}
          radialModulation={false}
          modulationOffset={1.0}
        />
      </EffectComposer>
      
      {/* Main title */}
      <Float
        speed={1}
        rotationIntensity={0.1}
        floatIntensity={0.4}
        position={[0, 1.5, 0]}
      >
        <Text
          color="white"
          fontSize={0.8}
          maxWidth={10}
          lineHeight={1.2}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2"
          anchorX="center"
          anchorY="middle"
        >
          WATER TREATMENT SOLUTIONS
        </Text>
        <Text
          color="#00BFFF"
          fontSize={0.3}
          maxWidth={10}
          lineHeight={1.2}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_bZF3gnD_g.woff2"
          anchorX="center"
          anchorY="middle"
          position={[0, -0.5, 0]}
        >
          INNOVATIVE ECO-FRIENDLY TECHNOLOGY
        </Text>
      </Float>

      {/* Ground reflector */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, -2, 0]}
        ref={reflectorRef}
      >
        <planeGeometry args={[50, 50]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#050505"
          metalness={0.8}
          mirror={0.75}
        />
      </mesh>

      {/* Central water sphere */}
      <mesh ref={sphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial 
          color="#00BFFF" 
          roughness={0.1}
          metalness={0.8}
          distort={0.2}
          speed={2}
          wireframe={false}
        />
      </mesh>

      {/* Water treatment system representation */}
      <WaterTreatmentSystem position={[0, -0.8, 0]} />
      
      {/* Floating particles to represent purification */}
      <ParticleSystem count={60} radius={5} />

      {/* Large water-like sphere in the background */}
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, -2]}>
        <MeshDistortMaterial
          color="#00BFFF"
          attach="material"
          distort={0.5}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
      
      {/* Smaller sphere with different distortion */}
      <Sphere ref={meshRef2} args={[1.2, 64, 64]} position={[2, -1, -1]}>
        <MeshDistortMaterial
          color="#003366"
          attach="material"
          distort={0.3}
          speed={4}
          roughness={0.5}
          metalness={0.2}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </>
  );
};

interface ParticleProps {
  position: Vector3;
  size: number;
  color: string;
}

const Particle: React.FC<ParticleProps> = ({ position, size, color }) => {
  const ref = useRef<Mesh>(null);
  
  useFrame((_state, delta) => {
    if (ref.current) {
      // Move particles upward slowly
      ref.current.position.y += delta * 0.1;
      
      // Add slight horizontal drift
      ref.current.position.x += Math.sin(_state.clock.elapsedTime * 0.5 + position.z) * delta * 0.05;
      ref.current.position.z += Math.cos(_state.clock.elapsedTime * 0.5 + position.x) * delta * 0.05;
      
      // Rotate particles
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.z += delta * 0.2;
      
      // Reset particle position when it goes above a certain point
      if (ref.current.position.y > 3) {
        ref.current.position.y = -3;
        ref.current.position.x = position.x + (Math.random() - 0.5) * 2;
        ref.current.position.z = position.z + (Math.random() - 0.5) * 2;
      }
    }
  });
  
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={color} 
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

interface ParticleSystemProps {
  count: number;
  radius: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ count, radius }) => {
  const particles = useMemo(() => {
    const temp = [];
    const colors = ['#00BFFF', '#87CEEB', '#1E90FF', '#4169E1', '#0000CD'];
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const x = Math.cos(angle) * radius * Math.random() * 0.6;
      const y = (Math.random() * 6) - 3; // Random y position between -3 and 3
      const z = Math.sin(angle) * radius * Math.random() * 0.6;
      const size = Math.random() * 0.08 + 0.02;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      temp.push(
        <Particle 
          key={i} 
          position={new Vector3(x, y, z)} 
          size={size}
          color={color}
        />
      );
    }
    
    return temp;
  }, [count, radius]);
  
  return <>{particles}</>;
};

interface WaterTreatmentSystemProps {
  position: Vector3 | [number, number, number];
}

const WaterTreatmentSystem: React.FC<WaterTreatmentSystemProps> = ({ position }) => {
  // References for animations
  const pipeRef1 = useRef<Mesh>(null);
  const pipeRef2 = useRef<Mesh>(null);
  const filterRef = useRef<Mesh>(null);
  
  // Animation for water flow effect
  useFrame((_state, delta) => {
    if (filterRef.current) {
      filterRef.current.rotation.y += delta * 0.3;
    }
    
    if (pipeRef1.current && pipeRef2.current) {
      // Pulse effect on pipes to simulate water flow
      const pulse = Math.sin(_state.clock.elapsedTime * 3) * 0.05 + 1;
      pipeRef1.current.scale.setX(pulse);
      pipeRef2.current.scale.setX(pulse);
    }
  });
  
  return (
    <group position={new Vector3().copy(position as Vector3)}>
      {/* Base platform */}
      <RoundedBox args={[4, 0.2, 2]} radius={0.1} position={[0, -0.5, 0]}>
        <meshStandardMaterial color="#003366" roughness={0.2} metalness={0.8} />
      </RoundedBox>
      
      {/* Treatment tanks */}
      <group position={[-1.2, 0, 0]}>
        <Cylinder args={[0.3, 0.3, 0.8, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#1E88E5" transparent opacity={0.8} roughness={0.1} metalness={0.9} />
        </Cylinder>
        <Cylinder args={[0.25, 0.25, 0.9, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#00BFFF" transparent opacity={0.5} roughness={0.1} metalness={0.9} />
        </Cylinder>
      </group>
      
      {/* Filter system */}
      <mesh ref={filterRef} position={[0, 0, 0]}>
        <torusGeometry args={[0.4, 0.1, 16, 32]} />
        <meshStandardMaterial color="#00796B" roughness={0.2} metalness={0.7} />
      </mesh>
      
      {/* RO unit */}
      <group position={[1.2, 0, 0]}>
        <Cylinder args={[0.3, 0.25, 0.8, 16]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#303F9F" roughness={0.2} metalness={0.8} />
        </Cylinder>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.5, 0.2, 0.5]} />
          <meshStandardMaterial color="#424242" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>
      
      {/* Connecting pipes */}
      <mesh ref={pipeRef1} position={[-0.6, 0, 0]}>
        <boxGeometry args={[0.6, 0.08, 0.08]} />
        <meshStandardMaterial color="#29B6F6" transparent opacity={0.7} emissive="#29B6F6" emissiveIntensity={0.2} />
      </mesh>
      
      <mesh ref={pipeRef2} position={[0.6, 0, 0]}>
        <boxGeometry args={[0.6, 0.08, 0.08]} />
        <meshStandardMaterial color="#29B6F6" transparent opacity={0.7} emissive="#29B6F6" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};

export default Scene; 