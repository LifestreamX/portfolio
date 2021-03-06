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
      { stagger: 0.5, opacity: 1, duration: .5, delay: 0 }
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
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
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
          to being part of a team creating and maintaining web applications. I'm
          ambitious and believe in continuous learning, always discovering new
          tools to increase my skills.
        </p>
        <p>
          I am easy to work with, collaborative, and always open to learning new
          things to further my knowledge. I always try to keep up to date with
          new technologies as the development field is always changing.
        </p>
        <p>
          When I'm not on the computer, I like to stay active and help others
          stay active through being a personal trainer. I also love animals and
          own two corgis that you can see featured in some of my projects.
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
