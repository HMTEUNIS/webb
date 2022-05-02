import {useState} from 'react'
import {Link} from 'react-router-dom'


function Navbar () {
    const [drop, open] = useState(false)

  
  return (
      <>
    <div className="navbar"><span onClick={() => open(!drop)}>нσℓℓу тєυηiѕ</span>
    {drop? <div className="drop" onClick={() => open(!drop)}>
     <Link to="portfolio" className="routelink"><span className="nav-option" > pσrtfσℓiσ</span></Link><br /><Link to="contact" className="routelink" ><span className="nav-option" >cσntact</span></Link></div> : <p className="hide"></p>}
    </div>
    </>
  )
}

export default Navbar