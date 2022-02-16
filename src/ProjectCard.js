import {useState} from 'react'
import ReactPlayer from 'react-player/youtube'

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
      
   <div className="projectCard" onClick={handleDrop}>
       
        <header className="projectCard-header">{name}</header>
        
        <img className="projectImg" src={image} /> 

    {open === true ? <div className="projectDrop">
        <p>{description}</p>
       <img onClick={goGithub} className="gitIcon" src=".\GitHub-Mark-64px.png"/> {url.length > 5 ? <img onClick={goUrl} className="gitIcon" src=".\a1e372fd4ded38a22ef8c61741d9cf33.png"/> : <span></span>}
       <div className="video">  <ReactPlayer url={video} width="20.3vw" height="20vh" controls="true" style={{marginBottom: ".5vh", marginLeft: ".1vw"}} /> </div>

    </div> :<> <br /> <br /> <br /><span style={{fontSize: "5vh"}}> 🔎 </span><br /> <br /> <br /> <br /></>}
</div>
    
  )
}
export default ProjectCard