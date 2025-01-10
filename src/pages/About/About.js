import React, { useEffect, useState } from 'react';
import './About.scss';
import '../../App.scss';
import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import ReactLogo from '../../components/reactlogo/ReactLogo';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const aboutTitle = ['a', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, '2000');

    // Text
    // gsap.fromTo(
    //   'p',
    //   { opacity: 0 },
    //   { stagger: 1, opacity: 1, duration: 0.1, delay: 0.5 }
    // );

    // React-logo
    gsap
      .timeline()
      .fromTo(
        '.right-side',
        {
          opacity: 1,
        },
        {
          scale: 1,
          duration: 10,
          opacity: 1,
          ease: 'power2.out',
        }
      )
      .fromTo(
        '.right-side',
        {
          rotation: 0,
        },
        {
          rotation: 360,
          duration: 10,
          repeat: -1,
          ease: 'linear',
        },
        0
      )
      .timeScale(1);
  }, []);

  // About me text

  return (
    <motion.main
      className='container about-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      {/* Right sections with animation */}
      <section className='right-side-about'>
        <ReactLogo className='react-logo' />
      </section>

      {/* Left section */}
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
          I’m a dedicated web developer with a passion for creating and
          maintaining web applications. I thrive in collaborative environments,
          where I can contribute to innovative projects and continue to expand
          my skill set.
        </p>

        <p className='about-me-text-2'>
          I am always eager to learn new technologies and techniques to stay
          ahead in the ever-evolving field of development. Whether tackling
          front-end challenges or improving user experiences, I enjoy the
          process of problem-solving and delivering high-quality results.
        </p>
      </div>
    </motion.main>
  );
};

export default About;
