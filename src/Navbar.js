import {useState} from 'react'
import {Link} from 'react-router-dom'
import gsap from "gsap";


function Navbar ({setCount}) {
    const [drop, open] = useState(false)

  
  return (
      <>
    <div className="navbar"><span onClick={() => open(!drop)}>нσℓℓу тєυηiѕ</span>
    {drop? <div className="drop" onClick={() => open(!drop)}>
     <Link to="portfolio" className="routelink"><span className="nav-option" onClick={() => setCount(0)}> pσrtfσℓiσ</span></Link><br /><Link to="contact" className="routelink" ><span className="nav-option" onClick={() => setCount(0)}>cσntact</span></Link></div> : <p className="hide"></p>}
    </div>
    </>
  )
}

export default Navbar