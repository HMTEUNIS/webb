import React, { Suspense, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import gsap from 'gsap';

function Ball({position, show, setShow, pos}) {
    
    const name = (type) => `Terrain004_1K_Color.jpg`;
    const myMesh = React.useRef();
    const [active, setActive] = useState(false);
    const [light, setLight] = useState(.2)



    useFrame(({ clock }) => {
      const a = clock.getElapsedTime()/20;
      show ? myMesh.current.rotation.y = -a :
      myMesh.current.rotation.y = a;
    });
    const [
      colorMap,
      displacementMap,
      normalMap,
      roughnessMap,
      aoMap
    ] = useLoader(TextureLoader, [
      name("Color"),
      name("Displacement"),
      name("Normal"),
      name("Roughness"),
      name("AmbientOcclusion")
    ]);
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
 
    const handleBall = () => {
        setShow(!show)
       
        
    }
    const lightup = () => {
setLight(1)
console.log(light)
    }

    

    return (
        <>
      <>
      
      <mesh
      onClick={handleBall}
      ref={myMesh}
      {...position}
    >
         <ambientLight intensity={[.4]} /> 

          <sphereBufferGeometry args={pos} />
          <meshStandardMaterial
            displacementScale={.25}
            map={colorMap}
            displacementMap={displacementMap}
            normalMap={normalMap}
            roughnessMap={roughnessMap}
            aoMap={aoMap}
          />
        
        </mesh>
      
        
      </>
    
       
         
       
      </>
    );
  }
  export default Ball