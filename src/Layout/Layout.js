import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import './Layout.scss';


const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className='page'>
        {/* <span className='tags top-tags'></span> */}
        <Outlet />
        {/* <span className='tags bottom-tags'>
          &alt;/body&gt;
          <br />
          <span className='bottle-tag-html'>&lt;/html&gt;</span>
        </span> */}
      </div>
    </div>
  );
};

export default Layout;
