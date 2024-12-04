import React , {useState , useRef} from 'react';
import avatars1 from '../../../assets/images copy/avatars/2.jpg';

const ProfileDisplay = () => {
  return (
  
    <>
     <div className="profile clearfix">
        <div className="profile_pic">
          <img src={avatars1} alt="..." className="img-circle profile_img"/>
        </div>
        <div className="profile_info">
          <span>Welcome,</span>
          <h2>John Doe</h2>
        </div>
      </div>
      </>
  );
};


export default ProfileDisplay;