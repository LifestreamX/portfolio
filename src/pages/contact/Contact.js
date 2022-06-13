import React, { useEffect, useState } from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';
import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import '../../pages/home/HomePage.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, '3000');
  }, []);

  return (
    <motion.div
      className='container contact-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 1 } }}
    >
      <div className='container'>
        <div className='inner'>
          <div className='panel panel-left'>
            <div className='panel-content'>
              <div className='image-background'></div>
            </div>
          </div>
          <div className='panel panel-right'>
            <div className='panel-content'>
              <form className='form'>
                <h1>CONTACT ME</h1>
                <div className='group'>
                  <input type='text' required />
                  <span className='highlight'></span>
                  <label>Name</label>
                </div>
                <div className='group'>
                  <input type='text' required />
                  <span className='highlight'></span>
                  <label>Email</label>
                </div>
                <div className='group'>
                  <input type='text' required />
                  <span className='highlight'></span>
                  <label>Topic</label>
                </div>
                <div className='group message-wrapper'>
                  <textarea required className='message-box' />
                  <label>Message</label>
                </div>
                {/* <input type='submit' className='send-btn' /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='menu'></div>
    </motion.div>
  );
};

export default Contact;
