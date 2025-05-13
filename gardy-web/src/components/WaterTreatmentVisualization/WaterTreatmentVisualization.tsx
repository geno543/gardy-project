import React, { useRef, useState, Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  Html,
  Text, 
  Float, 
  PerspectiveCamera,
  MeshTransmissionMaterial,
  Environment,
  Sphere,
  Box,
  useTexture,
  OrbitControls
} from '@react-three/drei';
import * as THREE from 'three';
import './WaterTreatmentVisualization.css';

// WaterTreatmentVisualization component
const WaterTreatmentVisualization: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const stages = ['Oil Separation', 'Natural Coagulation', 'Multi-layer Filtration', 'Reverse Osmosis'];
  
  // Animation for stage change
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleStageChange = (index: number) => {
    setIsAnimating(true);
    // Delay setting the active stage to allow for animation
    setTimeout(() => {
      setActiveStage(index);
      setIsAnimating(false);
    }, 300);
  };
  
  // Icons for stages
  const stageIcons = [
    "💧", // Oil Separation
    "🍋", // Natural Coagulation
    "🧪", // Multi-layer Filtration
    "🔄"  // Reverse Osmosis
  ];
  
  return (
    <div className="visualization-container">
      {/* Stage progress indicators */}
      <div className="stage-progress">
        {stages.map((_, index) => (
          <div 
            key={index} 
            className={`stage-indicator ${activeStage === index ? 'active' : ''}`}
            onClick={() => handleStageChange(index)}
            title={stages[index]}
          />
        ))}
      </div>
      
      <div className="stage-selector">
        {stages.map((stage, index) => (
          <button
            key={index}
            className={`stage-button ${activeStage === index ? 'active' : ''}`}
            onClick={() => handleStageChange(index)}
          >
            <span className="stage-icon">{stageIcons[index]}</span>
            {stage}
          </button>
        ))}
      </div>
      
      <div className={`visualization-canvas ${isAnimating ? 'transitioning' : ''}`}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <TreatmentStage stageIndex={activeStage} />
            <OrbitControls enableZoom={true} minDistance={3} maxDistance={10} />
          </Suspense>
        </Canvas>
        
        {/* Interactive hints */}
        <div className="interaction-hint">
          <div className="hint-icon">🔄</div>
          <div className="hint-text">Drag to rotate</div>
        </div>
      </div>
      
      {/* Stage description card for mobile */}
      <div className="mobile-stage-info">
        <h3>{getStageTitle(activeStage)}</h3>
        <p>{getStageDescription(activeStage)}</p>
      </div>
    </div>
  );
};

// Individual treatment stage visualization
const TreatmentStage: React.FC<{ stageIndex: number }> = ({ stageIndex }) => {
  const sceneRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (sceneRef.current) {
      sceneRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  // Content for each stage
  const renderStageContent = () => {
    switch (stageIndex) {
      case 0:
        return <OilSeparationStage />;
      case 1:
        return <CoagulationStage />;
      case 2:
        return <FiltrationStage />;
      case 3:
        return <ReverseOsmosisStage />;
      default:
        return null;
    }
  };

  return (
    <group ref={sceneRef}>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      {renderStageContent()}
      
      {/* Stage description */}
      <Html 
        position={[0, -2.5, 0]} 
        center 
        className="stage-description"
      >
        <div className="stage-info">
          <h3>{getStageTitle(stageIndex)}</h3>
          <p>{getStageDescription(stageIndex)}</p>
        </div>
      </Html>
    </group>
  );
};

// Oil Separation visualization
const OilSeparationStage = () => {
  const containerRef = useRef<THREE.Mesh>(null);
  const bubblesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (bubblesRef.current) {
      bubblesRef.current.children.forEach((bubble, i) => {
        const speed = 0.05 + (i % 3) * 0.02;
        bubble.position.y += speed;
        
        // Reset position when bubbles reach the top
        if (bubble.position.y > 1) {
          bubble.position.y = -1;
          bubble.position.x = Math.random() * 1.6 - 0.8;
          bubble.position.z = Math.random() * 1.6 - 0.8;
        }
      });
    }
  });

  return (
    <group>
      {/* Water container */}
      <mesh ref={containerRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          transmission={0.95}
          roughness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color="#a7d8ff"
        />
      </mesh>
      
      {/* Oil layer on top */}
      <mesh position={[0, 0.85, 0]}>
        <boxGeometry args={[1.9, 0.2, 1.9]} />
        <meshPhysicalMaterial
          color="#ffd700"
          metalness={0.2}
          roughness={0.1}
          transparent
          opacity={0.7}
        />
      </mesh>
      
      {/* Air bubbles */}
      <group ref={bubblesRef}>
        {Array(20).fill(0).map((_, i) => (
          <Sphere
          key={i} 
            position={[
              Math.random() * 1.6 - 0.8,
              Math.random() * 2 - 1,
              Math.random() * 1.6 - 0.8
            ]}
            args={[0.03 + Math.random() * 0.05, 8, 8]}
          >
            <meshBasicMaterial color="white" transparent opacity={0.6} />
          </Sphere>
        ))}
      </group>
      
      {/* Labels */}
      <Text position={[0, 1.2, 0]} fontSize={0.12} color="black">
        Oil Layer
      </Text>
      
      <Text position={[0, 0, 0]} fontSize={0.12} color="#0066ff">
        Water + Microbubbles
        </Text>
    </group>
  );
};

// Natural Coagulation visualization
const CoagulationStage = () => {
  const mixerRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (mixerRef.current) {
      mixerRef.current.rotation.y += 0.02;
    }
    
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle) => {
        // Simulate particles slowly sinking and gathering
        particle.position.y -= 0.01;
        
        // Move particles toward center as they sink
        const distToCenter = Math.sqrt(
          particle.position.x * particle.position.x + 
          particle.position.z * particle.position.z
        );
        
        if (distToCenter > 0.1) {
          particle.position.x *= 0.99;
          particle.position.z *= 0.99;
        }
        
        // Reset particles that sink too low
        if (particle.position.y < -1) {
          particle.position.set(
            (Math.random() - 0.5) * 1.6,
            1,
            (Math.random() - 0.5) * 1.6
          );
        }
      });
    }
  });

  return (
    <group>
      {/* Container */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          transmission={0.95}
          roughness={0.1}
          color="#d4f1f9"
        />
      </mesh>
      
      {/* Lemon peel mixer */}
      <group ref={mixerRef} position={[0, 0.3, 0]}>
        {/* Mixer shaft */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
        
        {/* Mixer blades */}
        {[0, 1, 2, 3].map((i) => (
          <mesh 
            key={i} 
            position={[0, -0.1, 0]} 
            rotation={[0, (i * Math.PI) / 2, 0]}
          >
            <boxGeometry args={[0.6, 0.05, 0.1]} />
            <meshStandardMaterial color="#ffeb3b" />
        </mesh>
        ))}
      </group>
      
      {/* Coagulating particles */}
      <group ref={particlesRef}>
        {Array(40).fill(0).map((_, i) => (
          <Sphere
          key={i} 
            position={[
              (Math.random() - 0.5) * 1.6,
              (Math.random() - 0.5) * 1.8,
              (Math.random() - 0.5) * 1.6
            ]}
            args={[0.04 + Math.random() * 0.03, 8, 8]}
          >
          <meshStandardMaterial 
              color={i % 3 === 0 ? "#8b4513" : "#a52a2a"} 
              roughness={0.7}
            />
          </Sphere>
        ))}
      </group>
      
      {/* Labels */}
      <Text position={[0, 1.2, 0]} fontSize={0.12} color="black">
        Lemon Peel Mixer
      </Text>
      
      <Text position={[0, -1.2, 0]} fontSize={0.12} color="#8b4513">
        Coagulated Particles
        </Text>
    </group>
  );
};

// Multi-layer Filtration visualization
const FiltrationStage = () => {
  const waterflowRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (waterflowRef.current) {
      waterflowRef.current.children.forEach((drop) => {
        drop.position.y -= 0.03;
        
        // Reset position when drops reach the bottom
        if (drop.position.y < -1.5) {
          drop.position.y = 1.5;
          drop.position.x = (Math.random() - 0.5) * 0.8;
          drop.position.z = (Math.random() - 0.5) * 0.8;
        }
      });
    }
  });
  
  return (
    <group>
      {/* Filter container */}
      <mesh>
        <cylinderGeometry args={[1, 1, 3, 32]} />
        <meshStandardMaterial color="#e0e0e0" transparent opacity={0.3} />
      </mesh>
      
      {/* Filter layers */}
      {/* Activated Carbon layer */}
      <mesh position={[0, 0.8, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.5, 32]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Zeolite layer */}
      <mesh position={[0, 0.2, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.5, 32]} />
        <meshStandardMaterial color="#a1887f" />
      </mesh>
      
      {/* Sand layer */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.5, 32]} />
        <meshStandardMaterial color="#e6c35a" />
      </mesh>
      
      {/* Gravel layer */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.95, 0.95, 0.5, 32]} />
        <meshStandardMaterial color="#808080" />
      </mesh>
      
      {/* Water flow visualization */}
      <group ref={waterflowRef}>
        {Array(30).fill(0).map((_, i) => (
          <Sphere
            key={i}
            position={[
              (Math.random() - 0.5) * 0.8,
              Math.random() * 3 - 1.5,
              (Math.random() - 0.5) * 0.8
            ]}
            args={[0.03, 8, 8]}
          >
            <meshBasicMaterial 
              color={i < 15 ? "#a7c8ff" : "#d4f1f9"} 
              transparent 
              opacity={0.8} 
            />
          </Sphere>
        ))}
      </group>
      
      {/* Labels */}
      <Text position={[1.3, 0.8, 0]} fontSize={0.1} color="black">
        Activated Carbon
      </Text>
      
      <Text position={[1.2, 0.2, 0]} fontSize={0.1} color="black">
        Zeolite
      </Text>
      
      <Text position={[1.1, -0.4, 0]} fontSize={0.1} color="black">
        Sand
      </Text>
      
      <Text position={[1.1, -1, 0]} fontSize={0.1} color="black">
        Gravel
        </Text>
    </group>
  );
};

// Reverse Osmosis visualization
const ReverseOsmosisStage = () => {
  const membraneRef = useRef<THREE.Mesh>(null);
  const waterParticlesRef = useRef<THREE.Group>(null);
  const saltParticlesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Animate particles
    if (waterParticlesRef.current && saltParticlesRef.current) {
      // Water molecules passing through
      waterParticlesRef.current.children.forEach((particle, i) => {
        // Different starting positions on the left side
        const startX = -1;
        const targetX = 1;
        
        // Calculate progress (0 to 1) based on time with offset for each particle
        const offset = (i * 0.1) % 2;
        const progress = ((time * 0.5 + offset) % 2) / 2;
        
        // Only move during the first half of the cycle
        if (progress < 0.5) {
          // Map progress from 0-0.5 to 0-1 for movement
          const moveProgress = progress * 2;
          
          // Apply easing function for smoother movement
          const easedProgress = easeInOutCubic(moveProgress);
          
          // Linear interpolation for position
          particle.position.x = startX + (targetX - startX) * easedProgress;
        } else {
          // Reset to start position when not visible
          particle.position.x = startX;
          particle.position.y = (Math.random() - 0.5) * 1.5;
          particle.position.z = (Math.random() - 0.5) * 1.5;
        }
      });
      
      // Salt particles being blocked
      saltParticlesRef.current.children.forEach((particle, i) => {
        // Different starting positions on the left side
        const startX = -1;
        const targetX = -0.1; // Only move to the membrane
        
        // Calculate progress (0 to 1) based on time with offset for each particle
        const offset = (i * 0.15) % 2;
        const progress = ((time * 0.5 + offset) % 3) / 3;
        
        // Only move during the first third of the cycle
        if (progress < 0.33) {
          // Map progress from 0-0.33 to 0-1 for movement
          const moveProgress = progress * 3;
          
          // Apply easing function for smoother movement
          const easedProgress = easeInOutCubic(moveProgress);
          
          // Linear interpolation for position
          particle.position.x = startX + (targetX - startX) * easedProgress;
          
          // Add slight bounce when hitting membrane
          if (moveProgress > 0.9) {
            particle.position.x = targetX + Math.sin((moveProgress - 0.9) * 20) * 0.05;
          }
        } else if (progress < 0.66) {
          // Stay at membrane for a moment
          particle.position.x = targetX;
        } else {
          // Move back and reset
          const returnProgress = (progress - 0.66) * 3; // 0 to 1
          particle.position.x = targetX + (startX - targetX) * returnProgress;
          
          if (returnProgress > 0.95) {
            // Reset to new random position
            particle.position.y = (Math.random() - 0.5) * 1.5;
            particle.position.z = (Math.random() - 0.5) * 1.5;
          }
        }
      });
    }
  });
  
  // Easing function for smoother animation
  const easeInOutCubic = (x: number): number => {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  };

  return (
    <group>
      {/* Main chamber */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 3, 32]} />
        <meshStandardMaterial color="#e0e0e0" transparent opacity={0.2} />
      </mesh>
      
      {/* Membrane */}
      <mesh ref={membraneRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.1, 1.1, 0.05, 32]} />
        <meshStandardMaterial color="#00bcd4" transparent opacity={0.5} />
      </mesh>
      
      {/* Pressure arrow */}
      <group position={[-1.8, 0, 0]}>
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[0.25, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.05, 0, 0.2, 8]} />
          <meshStandardMaterial color="red" />
      </mesh>
        <Text position={[0, 0.3, 0]} fontSize={0.12} color="red">
          Pressure
        </Text>
    </group>
      
      {/* Water molecules (passing through) */}
      <group ref={waterParticlesRef}>
        {Array(12).fill(0).map((_, i) => (
          <group key={`water-${i}`} position={[
            -1,
            (Math.random() - 0.5) * 1.5,
            (Math.random() - 0.5) * 1.5
          ]}>
            <Sphere args={[0.06, 8, 8]}>
              <meshStandardMaterial color="#2196f3" transparent opacity={0.7} />
            </Sphere>
            <Sphere position={[0.06, 0.06, 0]} args={[0.03, 8, 8]}>
              <meshStandardMaterial color="#ff5722" />
            </Sphere>
            <Sphere position={[-0.06, 0.06, 0]} args={[0.03, 8, 8]}>
              <meshStandardMaterial color="#ff5722" />
            </Sphere>
          </group>
        ))}
      </group>
      
      {/* Salt particles (not passing through) */}
      <group ref={saltParticlesRef}>
        {Array(8).fill(0).map((_, i) => (
          <Box 
            key={`salt-${i}`} 
            position={[
              -1,
              (Math.random() - 0.5) * 1.5,
              (Math.random() - 0.5) * 1.5
            ]}
            args={[0.12, 0.12, 0.12]}
          >
            <meshStandardMaterial color="#9e9e9e" />
          </Box>
        ))}
      </group>
      
      {/* Labels */}
      <Text position={[-0.8, 1.2, 0]} fontSize={0.12} color="#888">
        Contaminated Water
      </Text>
      
      <Text position={[0, 0, 0]} fontSize={0.15} color="#00bcd4">
        Semi-permeable
        <meshBasicMaterial color="#00bcd4" />
      </Text>
      
      <Text position={[0, -0.2, 0]} fontSize={0.15} color="#00bcd4">
        Membrane
        <meshBasicMaterial color="#00bcd4" />
      </Text>
      
      <Text position={[0.8, 1.2, 0]} fontSize={0.12} color="#2196f3">
          Purified Water
        </Text>
    </group>
  );
};

// Helper functions for stage info
const getStageTitle = (stageIndex: number): string => {
  const titles = [
    "Dissolved Air Flotation",
    "Natural Coagulation with Lemon Peels",
    "Multi-layer Filtration System",
    "Reverse Osmosis Purification"
  ];
  
  return titles[stageIndex] || "";
};

const getStageDescription = (stageIndex: number): string => {
  const descriptions = [
    "Air microbubbles attach to oil droplets, lowering their density and causing them to float to the surface where they can be easily separated from the water.",
    
    "Citric acid from lemon peels soaked in vinegar acts as a natural chelating agent, binding to heavy metals and forming complexes that can be filtered out.",
    
    "Water passes through multiple filter media: activated carbon removes chemicals and odors, zeolite captures heavy metals through ion exchange, while sand and gravel trap larger particles.",
    
    "High pressure forces water molecules through a semi-permeable membrane, blocking salts, contaminants, and larger molecules while allowing pure water to pass through."
  ];
  
  return descriptions[stageIndex] || "";
};

export default WaterTreatmentVisualization; 