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
      exit={{ x: window.innerWidth, transition: { duration: .7 } }}

    >
      {/* Top section */}
      <div className='typing-text'>
        {timer === false ? (
          <SidebarText />
        ) : (
          <h1 className='portfolio-title '>
            {' '}
            <LetterAnimations
              letterClass={letterClass}
              strArray={titleSection}
              idx={35}
            />
          </h1>
        )}
      </div>

      {/* Left section */}
      <div className='text'>
        <h1>
          <LetterAnimations
            letterClass={letterClass}
            strArray={firstLine}
            idx={53}
          />{' '}
          <br />{' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={secondLine}
            idx={21}
          />
          <br />{' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={thirdLine}
            idx={35}
          />
        </h1>

        <h2>Frontend React Developer</h2>
        <Link to='/contact' className='flat-button'>
          CONTACT ME
        </Link>
      </div>

      {/* Right section */}
      <div className='t-animation-wrapper'>
        <TAnimation />
      </div>
    </motion.div>
  );
};

export default HomePage;
