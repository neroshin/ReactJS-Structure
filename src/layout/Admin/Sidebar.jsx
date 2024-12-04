

import React , {useState , useRef} from 'react';

const theme = "nerothemes";
const lazyLoadComponent = (component) => 
  React.lazy(() => import(`../../themes/${theme}/${component}`));

const NavigationMenu = lazyLoadComponent("NavigationMenu");
const ProfileDisplay = lazyLoadComponent("ProfileDisplay");
const Logo = lazyLoadComponent("Logo");

const Sidebar = () => {
  return (
    <div className="col-md-3 left_col animate-width">
          <div className="left_col scroll-view">
            <Logo/>
            <div className="clearfix"></div>
            <ProfileDisplay/>
            <br />
            <NavigationMenu/>
          </div>
   </div>
  );
};


export default Sidebar;