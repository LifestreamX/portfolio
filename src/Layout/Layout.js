import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import './Layout.scss';

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className='page'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
