import React , {useState , useRef} from 'react';
import logo from '../../../assets/brand/Logo.png';
import { useNavigate , Link} from "react-router-dom";

const Logo = () => {
 
  return (
  
    <>
     <Link to="/">
     <div className="navbar nav_title" style={{"border" : 0}}  >
        <a className="site_title"> 
          <img style={{height:"26px"}} src={logo} alt="..." /> <span>Gentelella Alela!</span></a>
      </div>
      </Link>
      </>
  );
};


export default Logo;