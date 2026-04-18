import React from 'react';
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
import ArticleIcon from '@mui/icons-material/Article';
import OutboundLink from '../OutboundLink';

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '18px',
          background: 'white',
          color: 'black',
          padding: '10px 12px',
        },
        arrow: {
          color: 'white',
        },
      },
    },
  },
});

const Sidebar = () => {
  const activeStyle = ({ isActive }) => ({
    color: isActive ? '#fc8a68' : undefined,
    textDecoration: 'none',
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='navigation-wrapper'>
        <nav className='nav-links-1-wrapper'>
          <NavLink to='/' className='about-nav-link' style={activeStyle}>
            <Tooltip title='Home' placement='right' arrow>
              <HomeIcon id='icons' />
            </Tooltip>
          </NavLink>

          <NavLink to='/about' className='about-nav-link' style={activeStyle}>
            <Tooltip title='About' placement='right' arrow>
              <PersonIcon id='icons' />
            </Tooltip>
          </NavLink>

          <NavLink to='/skills' className='about-nav-link' style={activeStyle}>
            <Tooltip title='Experience' placement='right' arrow>
              <SettingsIcon id='icons' />
            </Tooltip>
          </NavLink>

          <NavLink
            to='/projects'
            className='about-nav-link'
            style={activeStyle}
          >
            <Tooltip title='Projects' placement='right' arrow>
              <VisibilityIcon id='icons' />
            </Tooltip>
          </NavLink>

          <NavLink
            to='/contact'
            className='contact-nav-link'
            style={activeStyle}
          >
            <Tooltip title='Contact' placement='right' arrow>
              <ContactMailIcon id='icons' />
            </Tooltip>
          </NavLink>

          <li className='about-nav-link'>
            <OutboundLink
              href={'/Resume.pdf'}
              campaign={'resume_download'}
              className='nav-links-2'
              data-ga-category='Portfolio'
              data-ga-action='download'
              data-ga-label='Resume'
            >
              <Tooltip title='Resume' placement='right' arrow>
                <ArticleIcon className='nav-2-icons' id='icons2' />
              </Tooltip>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href={'https://github.com/LifestreamX'}
              campaign={'github_profile'}
              className='nav-links-2'
              data-ga-category='Social'
              data-ga-action='click'
              data-ga-label='Github'
            >
              <Tooltip title='Github' placement='right' arrow>
                <GitHubIcon className='nav-2-icons' id='icons2' />
              </Tooltip>
            </OutboundLink>
          </li>
          <li>
            <OutboundLink
              href={'https://www.linkedin.com/in/tylerallen1/'}
              campaign={'linkedin_profile'}
              className='nav-links-2'
              data-ga-category='Social'
              data-ga-action='click'
              data-ga-label='LinkedIn'
            >
              <Tooltip title='Linkedin' placement='right' arrow>
                <LinkedInIcon className='nav-2-icons' id='icons2' />
              </Tooltip>
            </OutboundLink>
          </li>
        </nav>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
