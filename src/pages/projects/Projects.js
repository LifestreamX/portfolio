import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import React, { useEffect, useState } from 'react';
import './Projects.scss';
import '../../App.scss';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import PersonalTraining from '../../assets/project-images/personal-training.png';

const Projects = () => {
  const [letterClass] = useState('text-animate');

  const projectTitle = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's'];

  // Project cards
  useEffect(() => {
    gsap.fromTo(
      '.card',
      { opacity: 0 },
      { stagger: 0.3, opacity: 1, duration: 4, delay: 1 }
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

        <div className='container2'>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>
          <div className='circle-container'>
            <div className='circle'></div>
          </div>{' '}
        </div>

        {/* Cards */}
        <div className='scene'>
          <div className='cards'>
            {/* Project 1 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src={PersonalTraining} />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 2 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 3 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 4 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 5 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 6 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 7 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 8 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
            {/* Project 9 */}
            <div className='card'>
              <div className='card__face card__face--front'>
                <img src='https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg' />
              </div>
              <div className='card__face card__face--back'>
                <h1 className='project-title'>Personal Training</h1>{' '}
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Projects;
