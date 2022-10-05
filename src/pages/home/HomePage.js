import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import SidebarText from '../../components/NavTextAnimation';
import TAnimation from '../../components/textanimations/TAnimation';
import './HomePage.scss';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [timer, setTimer] = useState(false);

  const [letterClass, setLetterClass] = useState('text-animate');

  const titleSection = [
    't',
    'y',
    'l',
    'e',
    'r',
    "'",
    's',
    ' ',
    'p',
    'o',
    'r',
    't',
    'f',
    'o',
    'l',
    'i',
    'o',
  ];

  const firstLine = ['h', 'e', 'l', 'l', 'o', ','];

  const secondLine = [
    "i'",
    'm',
    ' ',
    't',
    'y',
    'l',
    'e',
    'r',
    ' ',
    'a',
    'l',
    'l',
    'e',
    'n ',
  ];

  const thirdLine = [
    "i'",
    'm',
    ' ',
    'a',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    setTimeout(() => {
      setTimer(!timer);
      setLetterClass('text-animate-hover');
    }, '10000');
  }, []);

  return (
    <motion.div
      className='container home-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      {/* Top section */}
      <div className='typing-text'>
        {timer === false ? (
          <div className='portfolio-title'>
            <SidebarText className='portfolio-title' />
          </div>
        ) : (
          <div className='portfolio-title'>
            {' '}
            <LetterAnimations
              letterClass={letterClass}
              strArray={titleSection}
              idx={35}
            />
          </div>
        )}
      </div>

      {/* T Animation */}
      <div className='t-animation-wrapper'>
        <TAnimation />
      </div>

      {/* Left section */}
      <div className='text'>
        <div>
          <LetterAnimations
            letterClass={letterClass}
            strArray={firstLine}
            idx={21}
          />{' '}
          <br />{' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={secondLine}
            idx={35}
          />
          <br />{' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={thirdLine}
            idx={53}
          />
        </div>

        <div className='frontend-react-dev'>Frontend React Developer</div>
        <Link to='/contact' className='flat-button'>
          CONTACT ME
        </Link>
      </div>

      {/* Right section */}
    </motion.div>
  );
};

export default HomePage;
