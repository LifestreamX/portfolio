import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss';
import { motion, AnimatePresence, useCycle  } from 'framer-motion';
import '../../pages/home/HomePage.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';


const Contact = () => {
  library.add(faEnvelope);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    // Left side logo
    gsap.fromTo(
      '.animation-wrapper',
      {
        x: '-500%',
      },
      {
        duration: 3,
        delay: 1,

        x: '0%',
        ease: 'bounce',
      }
    );

    // Form section
    gsap.fromTo('h1', { x: '1000%' }, { stagger: 0.3, duration: 1.5, x: '0' });

    gsap.fromTo(
      '.group',
      { x: '1000%' },
      { stagger: 0.3, duration: 1, delay: 0.7, x: '0' }
    );
    gsap.fromTo(
      'button',
      { opacity: 0 },
      { stagger: 0.3, duration: 1.4, delay: 3, opacity: 1 }
    );
  }, []);

  // Email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nhlx8vb',
        'template_95sbm8s',
        form.current,
        'VGREUHM3uBzR_I_AT'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSent(true);
    e.target.reset();

    setTimeout(() => {
      setSent(false);
    }, '5000');
  };

  console.log(sent);


  return (
    <motion.div
      className='container'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
    >
      <main className='container'>
        {/* Left side animation logo */}
        <div className='animation-wrapper'>
          <FontAwesomeIcon icon='envelope' className=' contact-page-logo ' />
        </div>

        {/* Right side form */}
        <div className='inner'>
          <div className='panel panel-left'>
            <div className='panel-content'>
              <div className='image-background'></div>
            </div>
          </div>
          <div className='panel panel-right'>
            <div className='panel-content'>
              {/* Form */}
              <form className='form' ref={form} onSubmit={sendEmail}>
                <h1 className='input-1'>CONTACT ME</h1>

                {sent === true && (
                  <Alert className='alert' severity='success'>
                    Email has been sent.
                  </Alert>
                )}

                {/* Name input */}
                <div className='group input-2'>
                  <input type='text' required name='name' />
                  <span className='highlight'></span>
                  <label>Name</label>
                </div>
                {/* Email input */}
                <div className='group input-3'>
                  <input type='email' required name='email' />
                  <span className='highlight'></span>
                  <label for='email'>Email</label>
                </div>
                {/* Subject input */}
                <div className='group input-4'>
                  <input type='text' required name='subject' />
                  <span className='highlight'></span>
                  <label>Subject</label>
                </div>
                {/* Message input */}
                <div className='group message-wrapper input-5'>
                  <textarea required className='message-box' name='message' />
                  <label>Message</label>
                </div>
                {/* Send button  */}
                <button type='submit'>
                  <div class='svg-wrapper-1'>
                    <div class='svg-wrapper'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        width='24'
                        height='24'
                      >
                        <path fill='none' d='M0 0h24v24H0z'></path>
                        <path
                          fill='currentColor'
                          d='M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z'
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Contact;
