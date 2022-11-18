import './MobileNav.scss';
// import React from 'react';
// import Menu from '@mui/material/Menu';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
// import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

// 2nd nav

import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const MobileNav = ({click, setClick}) => {
  // const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = useState(false);

  return (
    <main className='entire-wrapper'>
      <div className='menu-icon' onClick={handleClick}>
        {click ? (
          <CloseIcon sx={{ fontSize: 30 }} className='close' />
        ) : (
          <MenuIcon sx={{ fontSize: 30 }} />
        )}
      </div>
      <nav className={click ? 'active' : 'nav-menu'}>
        <ul>
          {/* Home */}
          <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
            <li className='nav-item'>Home</li>
          </NavLink>
          {/* About */}
          <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
            <li className='nav-item'>About</li>
          </NavLink>
          {/* Experience */}
          <NavLink to='/skills' className='nav-links' onClick={closeMobileMenu}>
            <li className='nav-item'>Experience</li>
          </NavLink>
          {/* Projects */}
          <NavLink
            to='/projects'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <li className='nav-item'>Projects</li>
          </NavLink>
          {/* Contact */}
          <NavLink
            to='/contact'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <li className='nav-item '>Contact</li>
          </NavLink>

          {/* Contact */}
          <a
            href='https://github.com/LifestreamX'
            target='_blank'
            rel='noreferrer'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <li className='nav-item nav-2'>Github</li>
          </a>
          <a
            href='https://www.linkedin.com/in/tylerallen1/'
            target='_blank'
            rel='noreferrer'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            <li className='nav-item nav-2'>Linkedin</li>
          </a>
        </ul>

        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </nav>
    </main>
  );
};

export default MobileNav;
