import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from '../components/mobilenav/MobileNav';
import Sidebar from '../components/sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [click, setClick] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1025) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);



  return (
    <div>
      {window.innerWidth < 1025 && (
        <MobileNav click={click} setClick={setClick} />
      )}
      {window.innerWidth > 1025 && <Sidebar />}

      <div className='page' id={click && 'hide-background'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
