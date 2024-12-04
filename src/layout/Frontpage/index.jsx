import React , {useEffect, useLayoutEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../../provider/AuthContext';

const Layout = ({ children , navmenu , footer}) => {

  const { authState } = useAuth();

 
  return (

    <>
     {navmenu && <Header/>}
     <div className="container body frontpage">
        <div className="row">
      
           { children }
        </div>
    </div>
    {footer && <Footer/>}
    </>
    

  );
};

export default Layout;