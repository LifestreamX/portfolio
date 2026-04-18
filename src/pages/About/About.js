import React, { useEffect, useState } from 'react';
import './About.scss';
import '../../App.scss';
import TylerPhoto from '../../assets/images/tyler.jpeg';
import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import { motion } from 'framer-motion';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const aboutTitle = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e'];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.main
      className='container about-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className='about-hero'>
        <img src={TylerPhoto} alt='Tyler Allen' className='about-hero-img' />
        <p className='about-hero-caption'>Tyler Allen — Full-Stack Developer</p>
      </div>
      <div className='text-zone-about'>
        <span className='about-me-title'>
          {' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={aboutTitle}
            idx={20}
          />
        </span>
        <p className='about-me-text-1 text-top'>
          I’m a dedicated Full-Stack Developer with a passion for building and
          maintaining modern web applications. I thrive in collaborative
          environments where I can contribute to innovative projects while
          continuing to expand my technical skill set.
        </p>

        <p className='about-me-text-2'>
          I’m always eager to learn new technologies and stay ahead in the
          ever-evolving field of development. Whether solving complex backend
          challenges or improving front-end user experiences, I enjoy building
          efficient, scalable solutions that deliver real value.
        </p>
      </div>
    </motion.main>
  );
};

export default About;
