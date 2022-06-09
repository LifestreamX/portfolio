import React, { useEffect, useState } from 'react';
import './About.scss';
import '../../App.scss';
import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import ReactLogo from '../../components/reactlogo/ReactLogo';
import { motion } from 'framer-motion';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const aboutTitle = ['a', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, '3000');
  }, []);

  return (
    <motion.div
      className='container about-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      {/* Left section */}
      <div className='text-zone'>
        <h1>
          {' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={aboutTitle}
            idx={20}
          />
        </h1>

        <p>
          I'm a very passionate self-taught front-end developer looking forward
          to be part of a team to help develop and maintain web applications. I
          ambitious when it comes to continuous learning as a web developer
          always discovering new thing tools to increase my skills.
        </p>
        <p>
          I am easy to work with along with always being open to learn new
          things to help further my knowledge. I always try to keep up to date
          with the new technology coming out as this field is always changing.
        </p>
        <p>
          A couple fun facts about me is I like to stay active as well as
          helping others stay active as by being a personal trainer . I also
          love animals and own 2 corgis.
        </p>
      </div>

      {/* Right sections with animation */}
      <div className='right-side'>
        <ReactLogo />
      </div>
    </motion.div>
  );
};

export default About;
