import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from '../components/mobilenav/MobileNav';
import Sidebar from '../components/sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [click, setClick] = useState(false);

  return (
    <div>
      <MobileNav click={click} setClick={setClick} />

      <Sidebar />

      <div className='page' id={click && 'hide-background'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
