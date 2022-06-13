import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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

  return (
    <ThemeProvider theme={theme}>
      <div className='navigation-wrapper'>
        <div className='logo'>
        </div>

        {/* Page links */}
        <nav>
          <NavLink to='/' exact='true' activeclassname='active'>
            <Tooltip title='Home' placement='right' arrow>
              <HomeIcon className='icons' />
            </Tooltip>
          </NavLink>
          <NavLink
            to='/about'
            className='about-nav-link'
            exact='true'
            activeclassname='active'
          >
            <Tooltip title='About' placement='right' arrow>
              <PersonIcon className='icons' />
            </Tooltip>
          </NavLink>
          <NavLink
            to='/contact'
            className='contact-nav-link'
            exact='true'
            activeclassname='active'
          >
            <Tooltip title='Contact' placement='right' arrow>
              <ContactMailIcon className='icons' />
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
