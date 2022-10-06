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

const MobileNav = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = useState(false);

  return (
    <>
      <nav className='navbar-mobile-wrapper'>
        <div className='menu-icon' onClick={handleClick}>
          {click ? (
            <CloseIcon sx={{ fontSize: 30 }} />
          ) : (
            <MenuIcon sx={{ fontSize: 30 }} />
          )}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {/* Home */}
          <li className='nav-item'>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </NavLink>
          </li>
          {/* About */}
          <li className='nav-item'>
            <NavLink
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>
          {/* Experience */}
          <li className='nav-item'>
            <NavLink
              to='/skills'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Experience
            </NavLink>
          </li>
          {/* Projects */}
          <li className='nav-item'>
            <NavLink
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Projects
            </NavLink>
          </li>
          {/* Contact */}
          <li className='nav-item'>
            <NavLink
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact
            </NavLink>
          </li>

          {/* Contact */}
          <li className='nav-item'>
            <a
              href='https://github.com/LifestreamX'
              target='_blank'
              rel='noreferrer'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Github
            </a>
          </li>
          <li className='nav-item'>
            <a
              href='https://www.linkedin.com/in/tylerallen1/'
              target='_blank'
              rel='noreferrer'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Linkedin
            </a>
          </li>
        </ul>
        {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
      </nav>
    </>
  );
};

export default MobileNav;

// export default function MobileNav() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className='mobile-nav-wrapper'>
//       <div
//         id='basic-button'
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup='true'
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         <MenuIcon id='icons' />
//       </div>
//       <Menu
//         id='basic-menu'
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         {/* Home */}
//         <MenuItem onClick={handleClose}>
//           <NavLink to='/' className='mobile-links'>
//             Home
//           </NavLink>
//         </MenuItem>

//         {/* About */}
//         <MenuItem onClick={handleClose}>
//           <NavLink to='/about' className='mobile-links'>
//             About
//           </NavLink>
//         </MenuItem>

//         {/* Experience */}
//         <MenuItem onClick={handleClose}>
//           <NavLink to='/skills' className='mobile-links'>
//             Experience
//           </NavLink>
//         </MenuItem>
//         {/* Projects */}
//         <MenuItem onClick={handleClose}>
//           <NavLink to='/projects' className='mobile-links'>
//             Projects
//           </NavLink>
//         </MenuItem>
//         {/* Contacts */}
//         <MenuItem onClick={handleClose}>
//           <NavLink to='/contact' className='mobile-links'>
//             Contact
//           </NavLink>
//         </MenuItem>
//         <br />

//         {/* Github */}
//         <MenuItem onClick={handleClose}>
//           <a
//             href='https://github.com/LifestreamX'
//             target='_blank'
//             rel='noreferrer'
//             className='mobile-links'
//           >
//             Github
//           </a>
//         </MenuItem>
//         {/* Linkedin */}
//         <MenuItem onClick={handleClose}>
//           <a
//               href='https://www.linkedin.com/in/tylerallen1/'
//               target='_blank'
//             rel='noreferrer'
//             className='mobile-links'
//           >
//             Linkedin
//           </a>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
