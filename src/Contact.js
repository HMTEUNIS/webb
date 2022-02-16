import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {Link} from 'react-router-dom'
import gsap from 'gsap';
import Ball from './Ball';

function Contact () { 
    const [pos, setPos] = useState ([1.25, 50, 500])
    const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, {   scale: 1.15, zindex: 2 });};
    
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, {  scale: 1, zindex: 1 })
    }

  return <>
  
  <div className="leftSide"><div className="aboutglow" onMouseEnter={onEnter} onMouseLeave={onLeave}>
  <Link to="/"><div className="smallball" > <Canvas>
<Suspense fallback={null}>
<directionalLight position={[3, 2, 2]} color="rgba(222, 236, 26, 0.705)" />
  <Ball position={[9, 2, 2]} pos={pos}/> 
</Suspense>
</Canvas> 
</div></ Link></div>
<img className="leftPicture" src="./V98bC6mg.jpeg" /> <br />
<p className="leftBarText">For Connections & Collaboration</p>


</div>
<div className="centerBox"><header className="pageHead">get in touch</header>
<br />

<p className="middleText">If you'd like to get in touch with me, or just see what I'm doing on other platforms, you can click the links below. Or shoot me an email @ hmteunis4@gmail.com
<br />
<br />

<a href="https://www.linkedin.com/in/holly-teunis-80259322a/"> <img className="icon" src=".\linkedin-logo-2430.png" alt="linkedin"/></a>
<a href="https://twitter.com/hm_teunis"> <img className="icon" src=".\twitter.png" alt="twitter"/> </a>

<a href="https://github.com/HMTEUNIS" ><img className="icon" src=".\GitHub-Mark-64px.png"  alt="github"/></a>

</p>


</div>

</>;




};

export default Contact;