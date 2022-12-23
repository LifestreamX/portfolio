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
import RockPaperScissors from '../../assets/project-images/rock-paper-scissors.png';
import GroceryList from '../../assets/project-images/grocery-list.png';
import TvMovieVideoGame from '../../assets/project-images/tv-movie-videogame.png';
import FakeStore from '../../assets/project-images/fake-store.png';
import PupperNewsfeed from '../../assets/project-images/pupper-newsfeed.png';
import NBA from '../../assets/project-images/nba.png';
import NBA2 from '../../assets/project-images/nba2.png';

const Projects = () => {
  const [letterClass] = useState('text-animate');

  const projectTitle = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

  // Project cards
  useEffect(() => {
    // gsap.fromTo(
    //   '.card',
    //   { opacity: 0 },
    //   { stagger: 0.2, opacity: 1, duration: 1, delay: 0.5 }
    // );
    // gsap.fromTo(
    //   '.project-title',
    //   { opacity: 0 },
    //   { stagger: 0.2, opacity: 1, duration: 1, delay: 0.5 }
    // );
  }, []);

  return (
    <>
      <motion.main
        className='container projects-page '
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
      >
        <div className='project-page-title'>
          {' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={projectTitle}
            idx={20}
          />
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
            {/* Project : Personal Training */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://fitforall.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title'>FitForAll</div>{' '}
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
            {/* Project: Pupper Newsfeed */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://puppernewsfeed.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Pupper Newsfeed</div>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://puppernewsfeed.tyler-allen.com/'
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
            {/* Project: The Cozi Corgi*/}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://thecozicorgi.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>The Cozi Corgi</div>{' '}
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
            {/* Project: Contact Manager */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://contactmanager.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Contact Manager</div>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://contactmanager.tyler-allen.com/'
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

            {/* Project: Fake Store */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://fakestore.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Fake Store </div>{' '}
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

            {/* Project: Nba Player Database */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://nbaplayerdatabase.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>NBA Database</div>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://nbaplayerdatabase.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={NBA2} alt='Grocery List ' />
                  </div>
                </div>
              </a>
            </div>

            {/* Project: Corgi Land */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://corgiland.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Corgi Land</div>{' '}
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
            {/* Project: Tv-Movie-Videogame-Manager */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://mediamanager.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper long'>
                  <div className='project-title '>
                    TV-Movie-VideoGame-Manager
                  </div>{' '}
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

            {/* Project: Rock Paper Scissors */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://rockpaperscissors.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Rock Paper Scissors</div>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://rockpaperscissors.tyler-allen.com'
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
            {/* Project: Click A Mole */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://click-a-mole.firebaseapp.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Click A Mole</div>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://click-a-mole.firebaseapp.com/'
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
            {/* Project: Grocery List */}
            <div className='card-wrapper'>
              {/* Title */}
              <a
                href='https://grocerylist.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Grocery List</div>{' '}
                </div>
              </a>
              {/* Image */}
              <a
                href='https://grocerylist.tyler-allen.com'
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

            <div></div>
            <div className='bottom'></div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Projects;
