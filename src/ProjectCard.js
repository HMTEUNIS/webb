import {useState} from 'react'
import ReactPlayer from 'react-player/youtube'
import Popup from 'reactjs-popup';

function ProjectCard({name, description, image, video, github, url}) {
    const [open, setOpen] = useState(false)
    const handleDrop = () =>  {
        setOpen(!open)}
    const goGithub = () =>{
        window.open(github)
    }
    const goUrl = () =>{
        window.open(url)
    }
  return (
    <div className="projectCard">

    <Popup trigger={<div className="button"><header className="projectCard-header">{name}</header>
    <img className="projectImg" src={image} /> </div>} modal nested>

    {close => (<div className="projectDrop">
     <p>{description}</p>
       <img onClick={goGithub} className="gitIcon" src="../imgs/GitHub.png"/> {url.length > 5 ? <img onClick={goUrl} className="gitIcon" src=".\a1e372fd4ded38a22ef8c61741d9cf33.png"/> : <span></span>}
       <div className="video">  <ReactPlayer url={video}   controls="true"    width='90%'

       /> </div>
   </div>
   
    )}
  </Popup>



       
        



  
       
   
</div>
    
  )
}
export default ProjectCard