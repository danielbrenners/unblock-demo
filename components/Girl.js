import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const url = "192.168.1.152";
// const url = 'localhost'

export default function Girl() {
  const meshRef = useRef();
  const gltf = useGLTF(`http://${url}:3000/models/girl/scene.gltf`);
  const children = [...gltf.scene.children];
  const mesh = children[0];

  return <primitive object={mesh} ref={meshRef} position={[0, -1, 0]} />;
}
