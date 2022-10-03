import React from 'react';
import './MobileNav.scss';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='mobile-nav-wrapper'>
      <div
        id='basic-button'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon id='icons' />
      </div>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* Home */}
        <MenuItem onClick={handleClose}>
          <NavLink to='/' className='mobile-links'>
            Home
          </NavLink>
        </MenuItem>

        {/* About */}
        <MenuItem onClick={handleClose}>
          <NavLink to='/about' className='mobile-links'>
            About
          </NavLink>
        </MenuItem>

        {/* Experience */}
        <MenuItem onClick={handleClose}>
          <NavLink to='/skills' className='mobile-links'>
            Experience
          </NavLink>
        </MenuItem>
        {/* Projects */}
        <MenuItem onClick={handleClose}>
          <NavLink to='/projects' className='mobile-links'>
            Projects
          </NavLink>
        </MenuItem>
        {/* Contacts */}
        <MenuItem onClick={handleClose}>
          <NavLink to='/contact' className='mobile-links'>
            Contact
          </NavLink>
        </MenuItem>
        <br />

        {/* Github */}
        <MenuItem onClick={handleClose}>
          <a
            href='https://github.com/LifestreamX'
            target='_blank'
            rel='noreferrer'
            className='mobile-links'
          >
            Github
          </a>
        </MenuItem>
        {/* Linkedin */}
        <MenuItem onClick={handleClose}>
          <a
              href='https://www.linkedin.com/in/tylerallen1/'
              target='_blank'
            rel='noreferrer'
            className='mobile-links'
          >
            Linkedin
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
