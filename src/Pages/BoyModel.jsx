import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

const BoyModel = () => {
  const model = useGLTF("/boy_coding.glb");

  return (
    <Suspense fallback={null}>
      <primitive object={model.scene} scale={1.5} position={[0, -1, 0]} />
    </Suspense>
  );
};

export default BoyModel;
