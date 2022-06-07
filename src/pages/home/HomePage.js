import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LetterAnimations from '../../components/LetterAnimations';
import SidebarText from '../../components/NavTextAnimation';
import TAnimation from '../../components/TAnimation';
import './HomePage.scss';

const HomePage = () => {
  const [timer, setTimer] = useState(false);

  const [letterClass, setLetterClass] = useState('text-animate');

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

  console.log(firstLine.length + secondLine.length + thirdLine.length);

  useEffect(() => {
    setTimeout(() => {
      setTimer(!timer);
      setLetterClass('text-animate-hover');
    }, '10000');
  }, []);

  return (
    <div className='container home-page'>
      {/* Top section */}
      <div className='typing-text'>
        {timer === false ? (
          <SidebarText />
        ) : (
          <h1 className='portfolio-title '>Tyler's Portfolio</h1>
        )}
      </div>

      {/* Left section */}
      <div className='text'>
        <h1>
          <LetterAnimations
            letterClass={letterClass}
            strArray={firstLine}
            idx={15}
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
    </div>
  );
};

export default HomePage;
