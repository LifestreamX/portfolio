import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { createTheme, ThemeProvider } from '@mui/material';

const Sidebar = () => {
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: '24px',
            background: 'white',
            color: 'black',
            padding: '10px',
          },
          arrow: {
            color: 'white',
          },
        },
      },
    },
  });

  // Button icon color change on active link
  let activeStyle = {
    color: '#fc8a68',
    fontSize: '48px',
    textDecoration: 'none',
  };

  return (
    <ThemeProvider theme={theme}>
      <div className='navigation-wrapper'>

        {/* Page links */}
        <nav>
          {/* Home icon link */}
          <NavLink
            to='/'
            className='about-nav-link'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Tooltip title='Home' placement='right' arrow>
              <HomeIcon
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                id='icons'
              />
            </Tooltip>
          </NavLink>

          {/* About icon link */}
          <NavLink
            to='/about'
            className='about-nav-link'
            exact='true'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Tooltip title='About' placement='right' arrow>
              <PersonIcon
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                id='icons'
              />
            </Tooltip>
          </NavLink>

          {/* Experience */}
          <NavLink
            to='/skills'
            className='about-nav-link'
            exact='true'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Tooltip title='Experience' placement='right' arrow>
              <SettingsIcon
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                id='icons'
              />
            </Tooltip>
          </NavLink>
          {/* Projects */}
          <NavLink
            to='/projects'
            className='about-nav-link'
            exact='true'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Tooltip title='Projects' placement='right' arrow>
              <VisibilityIcon
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                id='icons'
              />
            </Tooltip>
          </NavLink>

          {/* Contact icon link */}
          <NavLink
            to='/contact'
            className='contact-nav-link'
            exact='true'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <Tooltip title='Contact' placement='right' arrow>
              <ContactMailIcon
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
                id='icons'
              />
            </Tooltip>
          </NavLink>
        </nav>
        {/* Links for Github and Linkedin */}
        <div className='links-wrapper-2'>
          <li>
            <a
              href='https://github.com/LifestreamX'
              target='_blank'
              rel='noreferrer'
              className='nav-links-2'
            >
              <Tooltip title='Github' placement='right' arrow>
                <GitHubIcon className='nav-2-icons' />
              </Tooltip>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/tylerallen1/'
              target='_blank'
              rel='noreferrer'
              className='nav-links-2'
            >
              <Tooltip title='Linkedin' placement='right' arrow>
                <LinkedInIcon className='nav-2-icons' />
              </Tooltip>
            </a>
          </li>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
