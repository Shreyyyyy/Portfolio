import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo } from "react";

function Orb() {
  const colors = useMemo(() => ({
    a: "#23f5ff",
    b: "#c935ff",
    c: "#a3ff2b",
  }), []);

  return (
    <Float speed={1.3} rotationIntensity={1.1} floatIntensity={1.0}>
      <mesh>
        <icosahedronGeometry args={[1.05, 4]} />
        <meshStandardMaterial
          color={colors.a}
          emissive={colors.b}
          emissiveIntensity={0.55}
          metalness={0.85}
          roughness={0.2}
        />
      </mesh>
      <mesh scale={1.32}>
        <sphereGeometry args={[1, 48, 48]} />
        <meshStandardMaterial color={colors.c} transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

export default function AvatarOrb() {
  return (
    <div style={{ width: 220, height: 220 }} aria-hidden>
      <Canvas camera={{ position: [0, 0, 3.4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[3, 2, 3]} intensity={1.0} />
        <pointLight position={[-3, -2, -3]} intensity={0.9} color="#23f5ff" />
        <Orb />
      </Canvas>
    </div>
  );
}
