
import React from 'react';
import setting from "./setting.json";
// const theme = setting.theme;
const lazyLoadComponent = (component) => 
  React.lazy(() => import(`../../themes/${setting.theme}/${component}`));

const TopNavigation = lazyLoadComponent("TopNavigation");

const Header = ({eventNavEnlarge}) => {
 

  return (
    <div className="top_nav">
          <div className="nav_menu">
             <TopNavigation eventNavEnlarge={eventNavEnlarge}/>
          </div>
        </div>
  );
};


export default Header;