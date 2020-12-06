import React, { useState, useEffect } from 'react';
import '../styles/navbar.sass';
import Sidebar from './Sidebar';

const Navbar = props => {
  const [navScroll, setNavScroll] = useState('navTop');
  const [sidebarClass, setSidebarClass] = useState('sidebar');
  const [backgroundClass, setBackgroundClass] = useState('backgroundDisabled');
  const [hamburgerVisible, setHamburgerVisible] = useState('false');

  //function to make nav background when scroll is > 0
  const handleNavbarScroll = () => {
    window.pageYOffset > 0 ? setNavScroll('navScroll') : setNavScroll('navTop');
  };

  //escape from sidebar with the escape key
  const handleEscapeKey = e => {
    if (e.keyCode === 27 && sidebarClass === 'sidebar sidebarActive') {
      setSidebarClass('sidebar');
      setBackgroundClass('backgroundDisabled');
    }
  };

  //escape from sidebar when click on "X" or click outside the sidebar
  const handleEscapeClick = () => {
    setSidebarClass('sidebar');
    setBackgroundClass('backgroundDisabled');
  };

  //click on hamburger menu function
  const handleSidebarClick = () => {
    if (sidebarClass === 'sidebar') {
      setSidebarClass('sidebar sidebarActive');
      setBackgroundClass('backgroudActive');
      setTimeout(() => {
        setBackgroundClass('backgroundActiveBlack');
      }, 200);
    }
  };

  //event listeners
  useEffect(() => {
    window.addEventListener('scroll', e => handleNavbarScroll(e));
    window.addEventListener('keydown', handleEscapeKey);
    if (backgroundClass === 'backgroundActive') {
      setBackgroundClass('backgroundActiveBlack');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backgroundClass]);

  useEffect(() => {
    if (window.innerWidth < 1100 && !hamburgerVisible) {
      setHamburgerVisible(true);
    } else if (window.innerWidth >= 1100 && hamburgerVisible) {
      setHamburgerVisible(false);
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1100 && !hamburgerVisible) {
        setHamburgerVisible(true);
      } else if (window.innerWidth >= 1100 && hamburgerVisible) {
        setHamburgerVisible(false);
      }
    });
  }, [hamburgerVisible]);

  //nav data
  const navData = [
    { href: '#header', name: 'Hello' },
    { href: '#aboutMe', name: 'About Me' },
    { href: '#skillsTitles', name: 'Skills' },
    { href: '#projects', name: 'Projects' },
    { href: '#footer', name: 'Contact' }
  ];

  const navList = navData.map((navItem, index) => (
    <li key={index} className='navItem'>
      <div className='navLink'>
        <a href={navItem.href}>{navItem.name}</a>
        <div className='navLine'></div>
      </div>
    </li>
  ));
  return (
    <div id='nav-container' className={navScroll}>
      <div id='navbar'>
        <div id='brand'>
          <span>P.KALMAN</span> {'//'} PORTFOLIO
        </div>
        <div id='navlinks'>
          {!hamburgerVisible ? (
            <ul>{navList}</ul>
          ) : (
            <>
              <div></div>
              <div onClick={handleSidebarClick} className='hamburger'>
                <span className='hamburgerBox'>
                  <span className='hamburgerInner'></span>
                </span>
                <Sidebar className={sidebarClass} click={handleEscapeClick} />
                <div
                  id='sidebarBackground'
                  className={backgroundClass}
                  onClick={handleEscapeClick}
                ></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
