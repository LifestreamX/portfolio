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
import NutritionTracker from '../../assets/project-images/nutritiontracker.png';
import LinkRay from '../../assets/project-images/linkray.png';
import HolidayHub from '../../assets/project-images/holiday-hub.png';
import MassTransport from '../../assets/project-images/mass-transport.png';

const Projects = () => {
  // We will NOT append UTMs to the visible URL; Outbound will POST UTM payloads instead.
  const utm = (url, campaign) => url;
  // Outbound link helper: POSTs a serverless Measurement Protocol hit, then opens the target.
  const Outbound = ({ href, campaign, children, ...props }) => {
    const target = href;
    const handleClick = async (e) => {
      e.preventDefault();
      const body = {
        destination: href,
        utm_source: 'portfolio',
        utm_medium: 'projects',
        utm_campaign: campaign,
        page_location: window.location.href,
        client_id: localStorage.getItem('ga_client_id'),
      };
      try {
        await fetch('/.netlify/functions/send-mp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
      } catch (err) {
        // fire-and-forget; ignore errors and continue to open the link
      } finally {
        window.open(href, '_blank');
      }
    };

    return (
      <a
        href={href}
        onClick={handleClick}
        target='_blank'
        rel='noopener noreferrer'
        {...props}
      >
        {children}
      </a>
    );
  };
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
        {/* 
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
        </div> */}

        {/* Cards */}
        <div className='scene'>
          <div className='cards'>
            {/* Project : linkray */}
            <div className='card-wrapper'>
              {/* Title */}
              <Outbound
                href='https://linkray.tyler-allen.com/'
                campaign='linkray'
                data-ga-category='Project'
                data-ga-action='click'
                data-ga-label='LinkRay'
              >
                <div className='project-title'>LinkRay</div>{' '}
              </Outbound>
              {/* Image */}
              <Outbound
                href='https://linkray.tyler-allen.com/'
                campaign='linkray'
                data-ga-category='Project'
                data-ga-action='click'
                data-ga-label='LinkRay Image'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={LinkRay} alt='Website Analysis' />
                  </div>
                </div>
              </Outbound>
            </div>
            {/* Project : Holiday Hub */}
            <div className='card-wrapper'>
              {/* Title */}
              <Outbound
                href='https://holiday-hub.tyler-allen.com'
                campaign='holiday_hub'
                data-ga-category='Project'
                data-ga-action='click'
                data-ga-label='Holiday Hub'
              >
                <div className='project-title'>Holiday Hub</div>{' '}
              </Outbound>
              {/* Image */}
              <Outbound
                href='https://holiday-hub.tyler-allen.com'
                campaign='holiday_hub'
                data-ga-category='Project'
                data-ga-action='click'
                data-ga-label='Holiday Hub Image'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={HolidayHub} alt='Website Analysis' />
                  </div>
                </div>
              </Outbound>
            </div>
            {/* Project : Nutrition Tracker */}
            <div className='card-wrapper'>
              {/* Title */}
              <Outbound
                href='https://nutritiontracker.tyler-allen.com/'
                campaign='nutrition_tracker'
                data-ga-category='Project'
                data-ga-action='click'
                data-ga-label='Nutrition Tracker'
              >
                <div className='project-title'>Nutrition Tracker</div>{' '}
              </Outbound>
              {/* Image */}
              <Outbound
                href='https://nutritiontracker.tyler-allen.com/'
                campaign='nutrition_tracker'
                data-ga-category='Project'
                data-ga-action='click'
                data-ga-label='Nutrition Tracker Image'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={NutritionTracker} alt='nutrition stats' />
                  </div>
                </div>
              </Outbound>
            </div>

            {/* Project:Mass Transport  */}
            <div className='card-wrapper'>
              {/* Title */}
              <Outbound
                href='https://massachusetts-transit-optimizer.tyler-allen.com/'
                campaign='mass_transport'
              >
                <div className='project-title'>
                  Massachusetts Transit Optimizer
                </div>{' '}
              </Outbound>
              {/* Image */}
              <Outbound
                href='https://massachusetts-transit-optimizer.tyler-allen.com/'
                campaign='mass_transport'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={MassTransport} alt='Mass Transport' />
                  </div>
                </div>
              </Outbound>
            </div>
            {/* Project : Personal Training */}
            <div className='card-wrapper'>
              {/* Title */}
              <Outbound
                href='https://fitforall.tyler-allen.com/'
                campaign='fitforall'
              >
                <div className='project-title'>FitForAll</div>{' '}
              </Outbound>
              {/* Image */}
              <Outbound
                href='https://fitforall.tyler-allen.com/'
                campaign='fitforall'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={PersonalTraining} alt='Personal Training' />
                  </div>
                </div>
              </Outbound>
            </div>

            {/* Project: Click A Mole */}
            <div className='card-wrapper'>
              {/* Title */}
              <Outbound
                href='https://click-a-mole.firebaseapp.com/'
                campaign='click_a_mole'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Click A Mole</div>{' '}
                </div>
              </Outbound>
              {/* Image */}
              <Outbound
                href='https://click-a-mole.firebaseapp.com/'
                campaign='click_a_mole'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={ClickAMole} alt='Click A Mole' />
                  </div>
                </div>
              </Outbound>
            </div>
            {/* Project: Rock Paper Scissors */}
            {/* <div className='card-wrapper'>
              <a
                href={utm(
                  'https://rockpaperscissors.tyler-allen.com',
                  'rock_paper_scissors',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Rock Paper Scissors</div>{' '}
                </div>
              </a>
              <a
                href={utm(
                  'https://rockpaperscissors.tyler-allen.com',
                  'rock_paper_scissors',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={RockPaperScissors} alt='Rock Paper Scissors' />
                  </div>
                </div>
              </a>
            </div> */}
            {/* Project: Pupper Newsfeed */}
            {/* <div className='card-wrapper'>
              <a
                href={utm(
                  'https://puppernewsfeed.tyler-allen.com/',
                  'pupper_newsfeed',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Pupper Newsfeed</div>{' '}
                </div>
              </a>
              <a
                href={utm(
                  'https://puppernewsfeed.tyler-allen.com/',
                  'pupper_newsfeed',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={PupperNewsfeed} alt='Pupper Newsfeed' />
                  </div>
                </div>
              </a>
            </div> */}
            {/* Project: The Cozi Corgi*/}
            {/* <div className='card-wrapper'>
              <a
                href={utm(
                  'https://thecozicorgi.tyler-allen.com',
                  'the_cozi_corgi',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>The Cozi Corgi</div>{' '}
                </div>
              </a>
              <a
                href={utm(
                  'https://thecozicorgi.tyler-allen.com/',
                  'the_cozi_corgi',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={TheCoziCorgi} alt='The Cozi Corgi' />
                  </div>
                </div>
              </a>
            </div> */}

            {/* Project: Contact Manager */}
            {/* <div className='card-wrapper'>
              <a
                href={utm(
                  'https://contactmanager.tyler-allen.com/',
                  'contact_manager',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Contact Manager</div>{' '}
                </div>
              </a>
              <a
                href={utm(
                  'https://contactmanager.tyler-allen.com/',
                  'contact_manager',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={ContactManager} alt='Contact Manager' />
                  </div>
                </div>
              </a>
            </div> */}

            {/* Project: Fake Store */}
            {/* <div className='card-wrapper'>
              <a
                href={utm('https://fakestore.tyler-allen.com', 'fake_store')}
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Fake Store </div>{' '}
                </div>
              </a>
              <a
                href={utm('https://fakestore.tyler-allen.com', 'fake_store')}
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={FakeStore} alt='Grocery List ' />
                  </div>
                </div>
              </a>
            </div> */}

            {/* Project: Nba Player Database */}
            {/* <div className='card-wrapper'>
              
              <a
                href='https://nbaplayerdatabase.tyler-allen.com/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>NBA Database</div>{' '}
                </div>
              </a>
             
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
            </div> */}

            {/* Project: Corgi Land */}
            {/* <div className='card-wrapper'>
              <a
                href={utm('https://corgiland.tyler-allen.com', 'corgi_land')}
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Corgi Land</div>{' '}
                </div>
              </a>
              <a
                href={utm('https://corgiland.tyler-allen.com', 'corgi_land')}
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={CorgiLand} alt='Corgi Land' />
                  </div>
                </div>
              </a>
            </div> */}

            {/* Project: Tv-Movie-Videogame-Manager */}
            {/* <div className='card-wrapper'>
              <a
                href={utm(
                  'https://mediamanager.tyler-allen.com',
                  'media_manager',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper long'>
                  <div className='project-title '>
                    TV-Movie-VideoGame-Manager
                  </div>{' '}
                </div>
              </a>
              <a
                href={utm(
                  'https://mediamanager.tyler-allen.com',
                  'media_manager',
                )}
                target='_blank'
                rel='noreferrer'
              >
                <div className='card'>
                  <div className='card__face card__face--front'>
                    <img src={TvMovieVideoGame} alt='Grocery List ' />
                  </div>
                </div>
              </a>
            </div> */}

            {/* Project: Grocery List */}
            {/* <div className='card-wrapper'>
              <a
                href='https://grocerylist.tyler-allen.com'
                target='_blank'
                rel='noreferrer'
              >
                <div className='project-title-wrapper'>
                  <div className='project-title'>Grocery List</div>{' '}
                </div>
              </a>
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
            </div> */}

            <div></div>
            <div className='bottom'></div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Projects;
