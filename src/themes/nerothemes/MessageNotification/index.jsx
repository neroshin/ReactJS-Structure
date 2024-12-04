import React , {useState , useRef , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';
import './style.css';

const MessageNotification = () => {
  
  
  const [showNoftification , setShowNoftification ] = useState(false);
  const noftificationtRef = useRef(null);

  const handleClickOutside = (event) => {
    if (noftificationtRef.current && !noftificationtRef.current.contains(event.target)) {
      setShowNoftification(false);
    }
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
    <div className={`nav-item dropdown open ${showNoftification ? "show" : ""}`}>
      <a href="javascript:;"  ref={noftificationtRef} onClick={()=>setShowNoftification(!showNoftification)} className="dropdown-toggle info-number" id="navbarDropdown1" data-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faEnvelope}  />
                    <span className="badge bg-green">6</span>
                  </a>
                  <ul className={`dropdown-menu list-unstyled msg_list ${showNoftification ? "show" : ""}`} role="menu" aria-labelledby="navbarDropdown1">
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="dropdown-item">
                        <span className="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                        <span>
                          <span>John Smith</span>
                          <span className="time">3 mins ago</span>
                        </span>
                        <span className="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <div className="text-center">
                        <a className="dropdown-item">
                          <strong>See All Alerts</strong>
                          <i className="fa fa-angle-right"></i>
                        </a>
                      </div>
                    </li>
                  </ul>
         </div>
      </>
  );
};


export default MessageNotification;