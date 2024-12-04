import React , {useEffect, useLayoutEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './style.css' ;
import './glypicon.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from '../../provider/AuthContext';

const Layout = ({ children }) => {
  const { authState } = useAuth();


  const [enlargeMenu , setEnlargeMenu] = useState(true);

  const styleAdmin = (
    <style></style>
  )


  const clockEventNavEnlarge = () => {
    setEnlargeMenu(!enlargeMenu);
  }

 
  return (
    <div className='admin'>
      <div className={enlargeMenu ? 'nav-md' : 'nav-sm'}>
          <div className="container body">
              <div className="main_container">
                      <Sidebar />
                      <div className="wrapper d-flex flex-column min-vh-100">
                          <Header eventNavEnlarge={clockEventNavEnlarge} />
                          <div className="right_col min-vh-100">
                                
                                  {children}
                          
                          </div>
                      </div>

                    
                      <Footer />
              </div>
          </div>
    </div>
  </div>
  );
};



export default Layout;