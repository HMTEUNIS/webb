import './App.css';
import React, { useState, useRef, useEffect } from "react";
import Home from "./Home"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import { Routes, Route } from "react-router-dom"
import { Canvas, useFrame } from '@react-three/fiber'
import { LayerMaterial, Depth, Noise } from 'lamina'
import * as THREE from 'three'
import Navbar from "./Navbar"

export default function App() {
const [mainBoxStyle, setMainBoxStyle] = useState({})
const [nNum, setNum] = useState(10)
const nameBar = useRef();
const [num3, setNum3] = useState(.5)
const [count, setCount] = useState(0);



useEffect(() => {
  if (count < .08) {
 count < 1 ? setCount(count + .00019) : count > .8 ? setCount(count - (num3 - 5)) : console.log("its zero")
 count > .01 ? setNum(num3 + .00001) : setNum3(num3 + .01)}
 
}, [count])
  return (
    <div className="App">
      <div className="three">
      <Navbar setCount={setCount}/>
      <Canvas>
       <mesh scale={(600 + num3)}>
       <boxGeometry args={[1, count, (num3 - 1)]}  />

      <boxGeometry args={[num3, count, 0 ]} />
      <LayerMaterial side={THREE.BackSide} >
        <Depth colorB="red" colorA="purple" alpha={ 1.9} mode="subtract" near={900 + num3} far={200} origin={[(500 + num3), (20 + num3), nNum]} />
        <Noise mapping="local" type="pink" scale={(800 - nNum)} colorA="white" colorB="black" mode="sutract" alpha={num3} />
      </LayerMaterial>

</mesh>
</Canvas>
     {count >= .015 ?
      <div className="router" >


        <Routes>
        <Route path='/' element={<Home />} />

       <Route path='/about' element={<About />} />
       <Route path='/portfolio' element={<Portfolio />} />
       <Route path='/contact' element={<Contact />} />


       </Routes>
       </div>
       : <p className="hide"></p>}
       </div>    
      </div>
      
  );
}

