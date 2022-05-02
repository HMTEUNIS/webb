import './App.css';
import React, { useState, useEffect } from "react";
import Home from "./Home"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import { Routes, Route } from "react-router-dom"
import { Canvas } from '@react-three/fiber'
import { LayerMaterial, Depth, Noise } from 'lamina'
import * as THREE from 'three'
import Navbar from "./Navbar"

export default function App() {
const [nNum, setNum] = useState(10)
const [num3, setNum3] = useState(.3)
const [count, setCount] = useState(0);



useEffect(() => {
  if (count < .07) {
 count < 1 ? setCount(count + .00019) : count > .8 ? setCount(count - (num3 - 5)) : console.log("its zero")
 count > .01 ? setNum(num3 + .00001) : setNum3(num3 + .02)}
 
}, [count, num3])
  return (
    <div className="App">
      <div className="three">
      <Navbar />
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
     {count >= .0003 ?
      <div className="router" >
        

        <Routes>
        <Route path='/' element={<Home />} />

       <Route path='/portfolio' element={<Portfolio />} />
       <Route path='/contact' element={<Contact />} />


       </Routes>
       </div>
       : <p className="hide"></p>}
       </div>    
      </div>
      
  );
}

