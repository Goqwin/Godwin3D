import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

import profileImage from '../assets/Me.jpg';
import Aboutbg from '../assets/aboutbg.gif';


const ServiceCard = ({ index, title, subtitle, period, icon }) => (
  <Tilt options={{ max: 25 }}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.25, 0.8)}
      className='bg-white rounded-lg shadow-lg p-6'
      style={{
        border: '4px solid black',
      }}
    >
      <div className='flex justify-center items-center mb-4'>
        <img src={icon} alt='web-development' className='w-16 h-16 object-contain' />
      </div>
      <h3 className='text-black text-lg font-bold text-center mb-2'>{title}</h3>
      <h4 className='text-gray-600 text-lg font-medium text-center mb-2'>{subtitle}</h4>
      <h5 className='text-gray-400 text-sm font-semibold text-center'>{period}</h5>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Prologue I. Intro</p>
          <h2 className={styles.sectionHeadText}>Overview Story</h2>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ width: '60%' }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }} 
        className='mt-4 text-secondary text-small max-w-8xl leading-[60px] bg-black bg-opacity-60'
      >
        <motion.div className='flex justify-center'>
          <div
            style={{ backgroundImage: `url(${Aboutbg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundOpacity: 0.6 }}
            className='relative w-screen h-screen flex flex-col items-center justify-center'
          >
            <div className='rounded-full overflow-hidden w-80 h-80 ml-12' style={{ border: '4px solid', backgroundImage: 'linear-gradient(to right, #00FF00, #FF00FF)' }}>
              <img src={profileImage} alt='Profile' className='w-full h-full object-cover' />
            </div>
            <h2 className='text-2xl text-white font-bold mt-8'>Professional Statement</h2>
            
            <motion.p
  initial={{ width: '60%' }}
  animate={{ width: '100%' }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className={`mt-4 text-secondary text-small max-w-screen-lg mx-4 sm:mx-auto leading-[60px] bg-black bg-opacity-60 text-gradient transition-all duration-500 hover:text-lime hover:bg-opacity-80 hover:opacity-100 ${styles.zoomOnHover}`}
  style={{
    border: '4px solid',
    borderImage: 'linear-gradient(to right, #00FF00, #FF00FF) 1',
    textAlign: 'center'
  }}
  >
 With expertise in Object-Oriented Programming, Database Management, AGILE Methodology, Algorithms and Computations, and Front-End Web Design, I aim to bring wealth of knowledge and experience to every project at the same time gaining knowledge in the same areas. My knowledge extends to various programming languages, including C#, Java, Python, JavaScript, Node.js, SQL, and TypeScript.

 To turn your abstract and artistic ideas into tangible solutions are what motivates me to do what I do and I look forward working together, let's create remarkable solutions that surpass your expectations.
</motion.p>
          </div>
        </motion.div>
      </motion.div>

      <div className='mt-20 sm:mt-40 flex flex-wrap justify-center gap-10' id='servicesDiv'>
  <motion.h2
    variants={fadeIn("down", "spring", 0.5, 0.65)}
    className='text-3xl font-bold mb-10 underline'
    
  >
    My Education
  </motion.h2>
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>
</>
  );
};

export default SectionWrapper(About, 'about');
