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
import TvMovieVideoGame from '../../assets/project-images/tv-movie-videogame.png';
import FakeStore from '../../assets/project-images/fake-store.png';
import PupperNewsfeed from '../../assets/project-images/pupper-newsfeed.png';

const Projects = () => {
  const [letterClass] = useState('text-animate');

  const projectTitle = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

  // Project cards
  useEffect(() => {
    gsap.fromTo(
      '.card',
      { opacity: 0 },
      { stagger: 0.2, opacity: 1, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <>
      <motion.main
        className='container projects-page '
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className='project__title_wrapper'>
          <h1 className='project__title'>
            {' '}
            <LetterAnimations
              letterClass={letterClass}
              strArray={projectTitle}
              idx={20}
            />
          </h1>
        </div>

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
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://fitforall.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Personal Training</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://fitforall.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={PersonalTraining} alt='Personal Training' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 2 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://thecozicorgi.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>The Cozi Corgi</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://thecozicorgi.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={TheCoziCorgi} alt='The Cozi Corgi' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 3 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://github.com/LifestreamX/contact-manager'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Contact Manager</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://github.com/LifestreamX/contact-manager'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={ContactManager} alt='Contact Manager' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 4 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://mediamanager.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper long'>
                  <h1 className='project-title '>
                    TV-Movie-VideoGame-Manager-App
                  </h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://mediamanager.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={TvMovieVideoGame} alt='Grocery List ' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 5 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://fakestore.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Fake Store </h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://fakestore.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={FakeStore} alt='Grocery List ' />
                  </div>
                </div>
              </a>
            </div>

            {/* Project 6 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://corgiland.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Corgi Land</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://corgiland.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={CorgiLand} alt='Corgi Land' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 7 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://github.com/LifestreamX/name-username-app'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Name and Username</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://github.com/LifestreamX/name-username-app'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={NameUsername} alt='Name and Username' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 8 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://github.com/LifestreamX/rock-paper-scissors'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Rock Paper Scissors</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://github.com/LifestreamX/rock-paper-scissors'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={RockPaperScissors} alt='Rock Paper Scissors' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 9 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://github.com/LifestreamX/click-a-mole'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Click A Mole</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://github.com/LifestreamX/click-a-mole'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={ClickAMole} alt='Click A Mole' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 10 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://github.com/LifestreamX/grocery-list'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Grocery List</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://github.com/LifestreamX/grocery-list'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={GroceryList} alt='Grocery List ' />
                  </div>
                </div>
              </a>
            </div>
            {/* Project 11 */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://github.com/LifestreamX/grocery-list'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <h1 className='project-title'>Pupper Newsfeed</h1>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://github.com/LifestreamX/full-stack-CRUD-post-app'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={PupperNewsfeed} alt='Grocery List ' />
                  </div>
                </div>
              </a>
            </div>

            <div></div>
            <div className='bottom'></div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Projects;
