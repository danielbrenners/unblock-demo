import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
const url = "192.168.1.152";
// const url = 'localhost'

export default function Girl() {
  const meshRef = useRef();
  const gltf = useGLTF(`http://${url}:3000/models/hoodie/scene.gltf`);
  const children = [...gltf.scene.children];
  const mesh = children[0];
  // animations
  const { scale } = useSpring({
    from: { scale: 1 },
    to: { scale: 10 },
    config: { mass: 1, tension: 180, friction: 30 },
  });
  useFrame((state, delta) => (meshRef.current.rotation.z += 0.01));

  return (
    <animated.primitive
      object={mesh}
      ref={meshRef}
      position={[0, -0.83, 1.4]}
      //scale={[10, 10, 10]}
      scale={scale}
    />
  );
}
