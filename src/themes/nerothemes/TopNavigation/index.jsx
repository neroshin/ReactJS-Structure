import React , {useState , useRef , useEffect} from 'react';
import avatars1 from '../../../assets/images copy/avatars/2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faEnvelope} from '@fortawesome/free-solid-svg-icons';
import MessageNotification from '../MessageNotification';
import ProfileSettingMenu from '../ProfileSettingMenu';

import './style.css';


const TopNavigation = ({eventNavEnlarge}) => {
  
  
  return (
  
    <>
     <div className="nav toggle">
                <a id="menu_toggle"><FontAwesomeIcon icon={faBars} onClick={eventNavEnlarge} /></a>
              </div>
              <nav className="nav navbar-nav">
              <ul className=" navbar-right">
                <li style={{paddingLeft:"15px"}}>
                  <ProfileSettingMenu/>
                </li>

                <li role="presentation" >
                  <MessageNotification/>
                </li>
              </ul>
            </nav>
      </>
  );
};


export default TopNavigation;