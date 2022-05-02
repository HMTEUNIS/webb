import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model from './Model'
import { OrbitControls } from '@react-three/drei'


export default function Home() {
  
  return (
    <div className="head">
      <Canvas>
        <Suspense fallback={null}>
        <Model />
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / .5} />
        <ambientLight intensity={2.5} />

        </Suspense>
      </Canvas>
    </div>
  );
}
