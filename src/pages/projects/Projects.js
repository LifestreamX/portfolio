import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import React, { useEffect, useState } from 'react';
import './Projects.scss';
import '../../App.scss';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import PersonalTraining from '../../assets/project-images/personal-training.png';
import ClickAMole from '../../assets/project-images/click-a-mole.png';
import TheCoziCorgi from '../../assets/project-images/the-cozi-corgi.png';
import ContactManager from '../../assets/project-images/contact-manager.png';
import CorgiLand from '../../assets/project-images/corgi-land.png';
import NameUsername from '../../assets/project-images/name-username.png';
import RockPaperScissors from '../../assets/project-images/rock-paper-scissors.png';
import GroceryList from '../../assets/project-images/grocery-list.png';

const Projects = () => {
  const [letterClass] = useState('text-animate');

  const projectTitle = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

  // Project cards
  useEffect(() => {
    gsap.fromTo(
      '.card',
      { opacity: 0 },
      { stagger: 0.4, opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <>
      <motion.main
        className='container projects-page '
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.7 } }}
      >
        <h1 className='project__title'>
          {' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={projectTitle}
            idx={20}
          />
        </h1>

        <div class='container'>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
          <div class='circle-container'>
            <div class='circle'></div>
          </div>
        </div>

        {/* Cards */}
        <div className='scene'>
          <div className='cards'>
            {/* Project 1 */}
            <a
              href='https://github.com/LifestreamX/personal-training'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={PersonalTraining} alt='Personal Training' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>Personal Training</h1>{' '}
                </div>
              </div>
            </a>
            {/* Project 2 */}
            <a
              href='https://github.com/LifestreamX/the-cozi-corgi'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={TheCoziCorgi} alt='The Cozi Corgi' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>The Cozi Corgi</h1>{' '}
                </div>
              </div>
            </a>
            {/* Project 3 */}
            <a
              href='https://github.com/LifestreamX/contact-manager'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={ContactManager} alt='Contact Manager' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>Contact Manager</h1>{' '}
                </div>
              </div>
            </a>
            {/* Project 4 */}
            <a
              href='https://github.com/LifestreamX/click-a-mole'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={ClickAMole} alt='Click A Mole' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>Click A Mole</h1>{' '}
                </div>
              </div>
            </a>

            {/* Project 5 */}
            <a
              href='https://github.com/LifestreamX/corgi-land-merch'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={CorgiLand} alt='Corgi Land' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>Corgi Land</h1>{' '}
                </div>
              </div>
            </a>
            {/* Project 6 */}
            <a
              href='https://github.com/LifestreamX/name-username-app'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={NameUsername} alt='Name and Username' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>Name and Username</h1>{' '}
                </div>
              </div>
            </a>
            {/* Project 7 */}
            <a
              href='https://github.com/LifestreamX/rock-paper-scissors'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={RockPaperScissors} alt='Rock Paper Scissors' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>Rock Paper Scissors</h1>{' '}
                </div>
              </div>
            </a>
            {/* Project 8 */}
            <a
              href='https://github.com/LifestreamX/grocery-list'
              target='_blank'
              rel='noreferrer'
            >
              <div className='card'>
                <div className='card__face card__face--front'>
                  <img src={GroceryList} alt='Grocery List ' />
                </div>
                <div className='card__face card__face--back'>
                  <h1 className='project-title'>Grocery List</h1>{' '}
                </div>
              </div>
            </a>
            {/* Project 9 */}
            <div></div>
            <div className='bottom'></div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Projects;
