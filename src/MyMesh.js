import React, { useRef, Suspense, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'




function TwitterBox({hovered, setHovered}) {
  
  const texture = useLoader(TextureLoader, 'imgs/twitter-logo.png')

  
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  const goTwitter= () => {
    window.open("https://twitter.com/hm_teunis");
  };
  return (
    <mesh ref={mesh}    position={[ 0 , 2, 0]} onClick={goTwitter} onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)} 
    >
      <boxBufferGeometry  attach="geometry" />
    
      <meshStandardMaterial map={texture} attach="material" />
    </mesh>
    
  )
}

function LinkedInBox({hovered, setHovered}) {
 
    const texture = useLoader(TextureLoader, 'imgs/linkedin.png')
    const mesh = useRef()
    const goLink= () => {
        window.open("https://www.linkedin.com/in/holly-teunis-80259322a");
      };
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y -= 0.01
    })
    return (

        <mesh ref={mesh}  onClick={goLink}  onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)} >
        <boxBufferGeometry attach="geometry" />
       
        <meshStandardMaterial map={texture} attach="material"  />
      </mesh>
    )
  }
  function GitHubBox({hovered, setHovered}) {

    const texture = useLoader(TextureLoader, 'imgs/GitHub.png')
    const mesh = useRef()
    
    useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.009
    })
    const goLink= () => {
        window.open("https://github.com/HMTEUNIS/");
      };
     

    return (
      <mesh ref={mesh} position={[0, -2, 0]} onClick={goLink} onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}  >
        <boxBufferGeometry attach="geometry" />
       
        <meshStandardMaterial map={texture} attach="material" color="aqua" />
      </mesh>
    )
  }

export default function MyMesh() {
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered])
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={null}>
        <TwitterBox hovered={hovered} setHovered={setHovered} />
     <LinkedInBox hovered={hovered} setHovered={setHovered} />
    <GitHubBox hovered={hovered} setHovered={setHovered}  /> 
      </Suspense>
    </Canvas>
  )
}
