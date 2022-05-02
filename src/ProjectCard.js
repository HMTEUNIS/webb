import ReactPlayer from 'react-player/youtube'
import Popup from 'reactjs-popup';

function ProjectCard({name, description, image, video, github, url}) {
    
    const goGithub = () =>{
        window.open(github)
    }
    const goUrl = () =>{
        window.open(url)
    }
  return (
    <div className="projectCard">

    <Popup trigger={<div className="button"><header className="projectCard-header">{name}</header>
    <img className="projectImg" src={image} alt="project" /> </div>} modal nested>

    {close => (<div className="projectDrop">
     <p>{description}</p>
       <img onClick={goGithub} alt="github" className="gitIcon" src="../imgs/GitHub.png"/> {url.length > 5 ? <img onClick={goUrl} className="gitIcon" alt="internet" src="../imgs/internet.jpg"/> : <span></span>}
       <div className="video">  <ReactPlayer url={video}   controls="true"    width='60%' height='100%'

       /> </div>
   </div>
   
    )}
  </Popup>



       
        



  
       
   
</div>
    
  )
}
export default ProjectCard