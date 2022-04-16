import React, { Suspense, useState } from "react";
import {Link} from 'react-router-dom'
import gsap from 'gsap';

function About ()  {
    const [pos, setPos] = useState ([1.25, 50, 500])
    const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, {   scale: 1.15, zindex: 2 });};
    
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, {  scale: 1, zindex: 1 })
    }

  return <>
  
  <div className="leftSide"><div className="aboutglow" onMouseEnter={onEnter} onMouseLeave={onLeave}>
 </div>
<img className="leftPicture" src=".\yDfqsAlw.jpeg" /> <br />
<p className="leftBarText">Inspired Tenacity & Creative Solutions</p>


</div>
<div className="centerBox"><header className="pageHead">newish to software, creating aℓℓ my life</header>
<p className="middleText">I've always been curious, creative and a lover of challenge. I take things apart just to put them back together. I like to experiment. I've built houses and art spaces, invented new tools and methods for doing work of all sorts and keep larger visions of possibility in the things I design. I've also always been obsessed with the creation of worlds. The way that infrastructure holds space, and defines the possibilities. I take things apart and I create things that make new ways to Do and Be.</p></div>

</>;
};


export default About;
