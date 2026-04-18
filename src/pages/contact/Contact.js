import React, { useEffect, useRef, useState } from 'react';
import './Contact.scss';
import { motion } from 'framer-motion';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';
import Alert from '@mui/material/Alert';
import analytics from '../../analytics';
import { useSpring, animated, config } from 'react-spring';

const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_n9kx9lu';
const EMAILJS_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_95sbm8s';
const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'VGREUHM3uBzR_I_AT';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 35,
  (x - window.innerWidth / 2) / 35,
  1.03,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: config.gentle,
  }));

  useEffect(() => {
    gsap.fromTo(
      '.animation-wrapper',
      {
        x: '-500%',
      },
      {
        duration: 1,
        delay: 1,

        x: '0%',
        ease: 'back',
      },
    );

    gsap.fromTo(
      '.contact-page-title',
      { x: '1000%' },
      { stagger: 0.3, duration: 1, x: '0', delay: 0 },
    );

    gsap.fromTo(
      '.group',
      { x: '1000%' },
      { stagger: 0.3, duration: 1.0, delay: 0.5, x: '0' },
    );
    gsap.fromTo(
      '.submit-button',
      { opacity: 0 },
      { stagger: 0.3, duration: 1.4, delay: 2.3, opacity: 1 },
    );
  }, []);

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY,
      );

      setStatus('sent');
      analytics.trackEvent({
        category: 'Contact',
        action: 'submit',
        label: 'Contact Form',
      });
      form.current.reset();
    } catch (error) {
      setStatus('error');
    }

    window.setTimeout(() => {
      setStatus('idle');
    }, 5000);
  };

  return (
    <motion.div
      className='contact-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className='contact-intro'>
        <h1 className='contact-page-title'>Contact Me</h1>
      </div>

      <animated.div
        className='animation-wrapper'
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.to(trans),
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} className='contact-page-logo' />
      </animated.div>

      <form className='form' ref={form} onSubmit={sendEmail}>
        {status === 'sent' && (
          <Alert className='alert' severity='success'>
            Message sent successfully.
          </Alert>
        )}

        {status === 'error' && (
          <Alert className='alert' severity='error'>
            Something went wrong. Please try again in a moment.
          </Alert>
        )}

        <div className='form-wrapper'>
          <div className='group'>
            <label htmlFor='contact-name' className='labels'>
              Name
            </label>
            <input id='contact-name' type='text' required name='name' />
          </div>

          <div className='group'>
            <label htmlFor='contact-email' className='labels'>
              Email
            </label>
            <input id='contact-email' type='email' required name='email' />
          </div>

          <div className='group'>
            <label htmlFor='contact-subject' className='labels'>
              Subject
            </label>
            <input id='contact-subject' type='text' required name='subject' />
          </div>

          <div className='group'>
            <label htmlFor='contact-message' className='labels'>
              Message
            </label>
            <textarea
              id='contact-message'
              required
              className='message-box'
              name='message'
            />
          </div>

          <button
            type='submit'
            className='submit-button'
            disabled={status === 'sending'}
            data-ga-category='Contact'
            data-ga-action='click'
            data-ga-label='Send Button'
          >
            <span className='button-icon'>
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
            </span>
            <span className='send-button'>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
