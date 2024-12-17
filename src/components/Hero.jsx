import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import heroLotti from '../assets/hero-lotti.json'
import Lottie from 'react-lottie-player';

const Hero = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row gap-5 text-white py-12'>
        <div className='md:w-1/2 flex flex-col gap-2 justify-center'>
          <h1 className='font-bold text-5xl'>Hi, I'm Shazzad Maruf</h1>
          <h2 className="text-4xl font-bold text-white">
              <Typewriter
                words={[
                  "I'm a MERN Stack Developer",
                  `I'm a Full Stack Developer`,
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
          <button className='w-[170px] btn bg-transparent text-white border-2 rounded-lg rounded-t-none text-xl font-bold hover:bg-white hover:text-[#1B1833] hover:border-none mt-5'>Download Resume</button>
        </div>
        <div className='md:w-1/2'>
        <Lottie
            loop
            animationData={heroLotti}
            play
            className="w-full h-[400px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;