import React , {useState , useRef , useEffect} from 'react';
import avatars1 from '../../../assets/images copy/avatars/2.jpg';
import { useAuth } from '../../../provider/AuthContext';
import './style.css';

const ProfileSettingMenu = ({eventNavEnlarge}) => {
  // className={`nav-item dropdown open ${showNoftification ? "show" : ""}`}
  const { authState } = useAuth();
  const [showListPop , setShowListPop ] = useState(false);
  const elemRef = useRef(null);

  const handleClickOutside = (event) => {
    if (elemRef.current && !elemRef.current.contains(event.target)) {
      setShowListPop(false);
    }
  };
  
    const logout = async (event) => {
        event.preventDefault();
        
        await authState.logout( ); 
    };
  
  useEffect(() => {
    // Attach event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Clean up event listener on component unmount
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
  
    <>
     <div  className={`nav-item dropdown open ${showListPop ? "show" : ""}`}>
      <a href="javascript:;"  ref={elemRef} onClick={()=>setShowListPop(!showListPop)}  className="user-profile dropdown-toggle" aria-haspopup="true" id="navbarDropdown" data-toggle="dropdown" aria-expanded="false">
          <img src={avatars1} alt="..." />John Doe
        </a>
        <div className={`dropdown-menu dropdown-usermenu pull-right ${showListPop ? "show" : ""}`} aria-labelledby="navbarDropdown">
          <a className="dropdown-item"  href="javascript:;"> Profile</a>
            <a className="dropdown-item"  href="javascript:;">
            
              <span>Settings</span>
              <span className="badge bg-red pull-right">50%</span>
            </a>
        <a className="dropdown-item"  href="javascript:;">Help</a>
          <a className="dropdown-item"  onClick={logout}><i className="fa fa-sign-out pull-right"></i> Log Out</a>
        </div>
    </div> 
      </>
  );
};


export default ProfileSettingMenu;