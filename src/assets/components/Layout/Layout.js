import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'></span>

        <Outlet />

        <span className='tags bottom-tags'>

        </span>
      </div>
    </div>
  );
};

export default Layout;
