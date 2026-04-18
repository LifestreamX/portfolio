import './MobileNav.scss';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { NavLink } from 'react-router-dom';
import OutboundLink from '../OutboundLink';

const MobileNav = ({ click, setClick }) => {
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className='entire-wrapper'>
      <button
        type='button'
        className='menu-icon'
        onClick={handleClick}
        aria-label={click ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={click}
      >
        {click ? (
          <CloseIcon sx={{ fontSize: 30 }} className='close' />
        ) : (
          <MenuIcon sx={{ fontSize: 30 }} />
        )}
      </button>

      <nav className={click ? 'nav-menu nav-menu--open' : 'nav-menu'}>
        <ul>
          <li>
            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
              <span className='nav-item'>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span className='nav-item'>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/skills'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span className='nav-item'>Experience</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/projects'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span className='nav-item'>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span className='nav-item'>Contact</span>
            </NavLink>
          </li>
          <li>
            <OutboundLink
              href={'/Resume.pdf'}
              campaign={'resume_download'}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span className='nav-item nav-2'>Resume</span>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href={'https://github.com/LifestreamX'}
              campaign={'github_profile'}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span className='nav-item nav-2'>GitHub</span>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href={'https://www.linkedin.com/in/tylerallen1/'}
              campaign={'linkedin_profile'}
              className='nav-links'
              onClick={closeMobileMenu}
            >
              <span className='nav-item nav-2'>LinkedIn</span>
            </OutboundLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
