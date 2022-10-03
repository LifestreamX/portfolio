import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from '../components/mobilenav/MobileNav';
import Sidebar from '../components/sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 769) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <div>
      {isMobile ? <MobileNav /> : <Sidebar />}

      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
