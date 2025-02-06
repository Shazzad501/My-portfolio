import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import heroLotti from '../assets/hero-lotti.json'
import Lottie from 'react-lottie-player';
import resume from '../assets/Maruf.pdf'
import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id='home'>
      <div className='max-w-7xl px-5 md:px-10 mx-auto flex flex-col md:flex-row gap-5 text-white py-12'>
        <div className='md:w-1/2 flex flex-col gap-2 justify-center'>
          <h1 className='font-bold text-5xl'>Hi, I'm Shazzad Maruf</h1>
          <h2 className="text-4xl font-bold text-white">
              <Typewriter
                words={[
                  "I'm a MERN Stack Developer",
                  `I'm a Frontend Developer`,
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
          </h2>
          <p className='font-bold text-xl text-gray-400'>Hi there! I'm a Web Developer who specializes in the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. I would like to creating websites and applications that look amaizing and work smoothly.</p>
          <a href={resume} download=''>
          <div className='flex gap-5 my-4'>
          <Link to='https://github.com/Shazzad501' target='_blank' className='font-bold text-3xl'><FaGithub/></Link>
          <Link to='https://www.linkedin.com/in/md-maruf-162799255/' target='_blank' className='font-bold text-3xl'><FaLinkedin/></Link>
          <Link to='https://x.com/SMaruf3950' target='_blank' className='font-bold text-3xl'><FaTwitter/></Link>
          <Link to='mailto:assazzad501@gmail.com' target='_blank' className='font-bold text-3xl'><FaEnvelope/></Link>
        </div>
          <button className='w-[170px] btn bg-transparent text-white border-2 rounded-lg rounded-t-none text-xl font-bold hover:bg-white hover:text-[#1B1833] hover:border-none mt-5'>Download Resume</button>
          </a>
        </div>
        <div className='md:w-1/2'>
        <Lottie
            loop
            animationData={heroLotti}
            play
            className="w-full h-[450px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;