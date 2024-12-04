import React from 'react';

import setting from "./setting.json";
const lazyLoadComponent = (component) => 
  React.lazy(() => import(`../../themes/${setting.theme}/${component}`));

const FooterContent = lazyLoadComponent("FooterContent");

const Footer = () => {
  return (
    <footer>
        <FooterContent/>
    </footer>
  );
};


export default Footer;