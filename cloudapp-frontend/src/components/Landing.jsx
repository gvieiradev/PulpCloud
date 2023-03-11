import '../styles/index.css'
import {Link} from "react-router-dom"

function Landing (){
    return <div className="title">
      <h1>Pulp.Cloud</h1>
      <img className='imgLanding' src="https://i.ibb.co/Mspm1Gq/octo-night.png"></img>
      <Link to='/register'>
        <button  id='btnLanding' className="btnRegister">Register</button>
      </Link>
      <Link to='/login'>
        <button id='btnLanding' className="btnLogin">Login</button>
      </Link>
  </div>
}

export default Landing;