import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Sphere } from "@react-three/drei";

const SphereShape = () => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() * 0.05;
  });

  return (
    <Sphere ref={ref} position={[0, 0, 0]} args={[5, 10, 5]}>
      <meshStandardMaterial
        color="#ff6600"
        emissive="gray"
        emissiveIntensity={0.5}
        roughness={0.1}
        wireframe
      />
    </Sphere>
  );
};

export default SphereShape;
