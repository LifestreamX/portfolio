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
    }, '3000');
    // Animations

    gsap.fromTo(
      'p',
      { opacity: 0 },
      { stagger: 2, opacity: 1, duration: 4, delay: 1 }
    );
  }, []);
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
  // About me text

  return (
    <motion.main
      className='container about-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
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
      <section className='right-side'>
        <ReactLogo className='react-logo' />
      </section>
    </motion.main>
  );
};

export default About;
