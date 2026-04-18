import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MobileNav from '../components/mobilenav/MobileNav';
import Sidebar from '../components/sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  const [click, setClick] = useState(false);

  return (
    <div className='layout-shell'>
      <MobileNav click={click} setClick={setClick} />

      <Sidebar />

      <div className={click ? 'page page--muted' : 'page'}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
