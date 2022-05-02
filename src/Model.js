
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("imgs/head.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        name="FBHead"
        castShadow
        receiveShadow
        geometry={nodes.FBHead.geometry}
        material={materials.FBHead_preview_mat}
        morphTargetDictionary={nodes.FBHead.morphTargetDictionary}
        morphTargetInfluences={nodes.FBHead.morphTargetInfluences}
        position={[0, 0.3, 1.3]}
        rotation={[-3, 3.1, -3.14]}
      />
    </group>
  );
}

useGLTF.preload("/head.glb");
