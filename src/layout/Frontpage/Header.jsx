import React , {useEffect, useLayoutEffect, useState } from 'react';

// const theme = "nerothemes";
// const lazyLoadComponent = (component) => 
//   React.lazy(() => import(`../../themes/${theme}/${component}`));

// const TopNavigation = lazyLoadComponent("TopNavigation");

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
  
    const toggleMenu = () => setIsOpen(!isOpen)
  
    const menuItems = [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ]
  useLayoutEffect(()=>{
    //import('./style.css');
  } , [])

  
    return (
      <header>
        <div className="container">
            <div className="header-content">
                <div className="logo">Your Logo</div>
                <button className="menu-toggle" aria-label="Toggle menu">☰</button>
                <nav>
                    <ul>
                        {menuItems.map((item , index) =>(
                            <li><a href={item.href}>{item.name}</a></li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
};

export default Header;