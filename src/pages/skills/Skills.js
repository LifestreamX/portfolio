import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

import '../../App.scss';
import LetterAnimations from '../../components/letteranimations/LetterAnimations';
import './Skills.scss';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'TypeScript',
      'SQL',
      'Python',
    ],
  },
  {
    title: 'Front-End',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Redux',
      'Preact',
      'SASS',
      'Bootstrap',
      'Material UI',
      'Tailwind CSS',
      'Styled Components',
      'Ant Design',
      'Bulma',
      'Gatsby',
      'Remix',
    ],
  },
  {
    title: 'Back-End & Databases',
    skills: [
      'Node.js',
      'Express.js',
      'Firebase',
      'Prisma',
      'Drizzle',
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'CockroachDB',
      'Supabase',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      'AWS',
      'EC2',
      'S3',
      'Lambda',
      'RDS',
      'CloudFront',
      'Amplify',
      'EventBridge',
      'Secrets Manager',
      'Docker',
      'Git / GitHub',
      'Cloudflare',
    ],
  },
  {
    title: 'Integrations & Tools',
    skills: [
      'n8n',
      'Zapier',
      'ActiveCampaign',
      'Kajabi',
      'Jest',
      'Claude Code',
      'GitHub Copilot',
      'ChatGPT',
      'Gemini',
    ],
  },
  {
    title: 'CMS & E-Commerce',
    skills: [
      'WordPress (Elementor, Oxygen, Kadence)',
      'Shopify (Liquid customization)',
    ],
  },
];

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const aboutTitle = ['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e'];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    gsap.fromTo(
      '.sentence',
      { opacity: 0 },
      { stagger: 2, opacity: 1, duration: 2, delay: 0.3 },
    );

    gsap.fromTo(
      '.skill-category',
      { opacity: 0, y: 20 },
      { stagger: 0.15, opacity: 1, y: 0, duration: 0.6, delay: 0.5 },
    );

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.main
      className='container skills-page'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <div className='text-zone-skills'>
        <span className='skills-title'>
          {' '}
          <LetterAnimations
            letterClass={letterClass}
            strArray={aboutTitle}
            idx={20}
          />
        </span>

        <h2 className='sentence'>
          These are the technologies that I've worked with
        </h2>
      </div>

      <div className='skills-categories'>
        {skillCategories.map((category) => (
          <div className='skill-category' key={category.title}>
            <h3 className='category-title'>{category.title}</h3>
            <div className='skill-badges'>
              {category.skills.map((skill) => (
                <span className='skill-badge' key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.main>
  );
};

export default Skills;
