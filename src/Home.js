import './App.css';
import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Popup from 'reactjs-popup';
import gsap from 'gsap';
import Ball from './Ball'
import { Link } from "react-router-dom"


function Home() {
const [show, setShow] = useState(false);
const [pos, setPos] = useState ([2.8, 100, 500])
const onEnter = ({ currentTarget, poster }) => {
  gsap.to(currentTarget, {  backgroundColor: "rgba(181, 245, 33, 0.09)", scale: 1, zindex: 2 });};

const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: "rgba(255, 255, 255, 0)", scale: .9, zindex: 1 })
  
};

  return (
    <div className="Home">
             <span className="name">hoℓℓy teunis </span>
            <div className="glow" onMouseEnter={onEnter} onMouseLeave={onLeave}>
          <Popup trigger={ <div className="balls" > <Canvas>
        <Suspense fallback={null}>
        <directionalLight position={[8, 2, 2]} color="rgba(222, 236, 26, 0.705)" />
          <Ball position={[9, 2, 2]} setPos={setPos} pos={pos} show={show} setShow={setShow}/> 
        </Suspense>
      </Canvas> </div> }
                   position="right top"   on="hover" closeOnDocumentClick      mouseLeaveDelay={300}      mouseEnterDelay={0}      contentStyle={{ padding: '0px', border: 'none' }}      arrow={false}    >
     <Link to="about"><span className="thatsP" onMouseEnter={onEnter} onMouseLeave={onLeave}>About</span></Link><br /><br /> <br /> <br /><br />  <br /> <Link to="portfolio"> <span className="alsoP" onMouseEnter={onEnter} onMouseLeave={onLeave}>Portfoℓio</span></Link><br /><br /> <br /> <br /><br />  <br /><Link to="contact"> <span className="links" onMouseEnter={onEnter} onMouseLeave={onLeave}>Contact</span></Link>
       </Popup>
  </div>
      </div>
      
  );
}
export default Home