import React, { Suspense, useState } from "react";
import {Link} from 'react-router-dom'
import gsap from 'gsap';

import ProjectCard from "./ProjectCard";
function Portfolio () { 
    const [pos, setPos] = useState ([1.25, 50, 500])
    const onEnter = ({ currentTarget }) => {
      gsap.to(currentTarget, {   scale: 1.15, zindex: 2 });};
    
    const onLeave = ({ currentTarget }) => {
      gsap.to(currentTarget, {  scale: 1, zindex: 1 })
    }

const projects = [{"name": "Savvy", "description": "My capstone project for Flatiron School was an app I called Savvy. Savvy integrates React.js, Ruby on Rails, speech to text, and the CORE api to create a light Social Media site based to facilitate informal conversation of academic papers.", "image": "https://i.ibb.co/Jvht2SV/Screenshot-138.png", "video":"https://youtu.be/jNwec14O0So", "github": "https://github.com/HMTEUNIS/savvy", "url":"https://savvycore.herokuapp.com/"}, {"name": "React Beats", "description": "A drum sequencer using React.js function components. Based on the React 808 by Joe Seifi, with added ability to switch out samples, save progressions, and a keyboard to play along. Please forgive the audio quality in the video.", "image": "https://i.ibb.co/2ckQ9yM/Screenshot-140.png", "video":"https://youtu.be/lI_gZQQqZes", "github": "http://github.com/", "url":"https://reactbeats.herokuapp.com/"}]


  return <>
  
  


<div className="container-page">
{projects.map( project => <ProjectCard name={project.name} description={project.description} image={project.image} video={project.video} github={project.github} url={project.url}/>)}
</div>

</>;




};

export default Portfolio;