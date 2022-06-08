import React, { useEffect, useState } from 'react';
import './About.scss';
import '../../App.scss';
import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import ReactLogo from '../../components/reactlogo/ReactLogo';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const aboutTitle = ['a', 'b', 'o', 'u', 't', ' ', 'm', 'e'];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, '3000');
  }, []);

  return (
    <div className='container about-page'>
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          atque recusandae ex laborum nemo quas pariatur, suscipit dolore iure,
          reiciendis praesentium, deserunt adipisci incidunt voluptas sapiente
          expedita tenetur eligendi minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          atque recusandae ex laborum nemo quas pariatur, suscipit dolore iure,
          reiciendis praesentium, deserunt adipisci incidunt voluptas sapiente
          expedita tenetur eligendi minima.
        </p>
      </div>

      {/* Right sections with animation */}
      <div className='right-side'>
        <ReactLogo />
      </div>
    </div>
  );
};

export default About;
