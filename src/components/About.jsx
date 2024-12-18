import React from 'react';
import me from '../assets/me.jpg'
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
    <div id='about' className='max-w-7xl mx-auto flex flex-col gap-5 lg:flex-row mt-14 text-[#060414]'>
      <div className='lg:w-1/2 h-[500px] p-10'>
        <img 
        className='w-full h-full object-cover rounded-md'
        src={me} 
        alt="" />
      </div>
      <div className='lg:w-1/2 px-5 py-10 flex flex-col justify-center md:items-center lg:items-start'>
      <h2 className='font-extrabold text-5xl'>About Me</h2>
      <h3 className='font-bold text-2xl'>I'm Available For</h3>
      <p className='font-bold text-2xl text-[#2c2272]'>
      <Typewriter
                words={[
                  `Full Stack Development Porjects`,
                  "MERN Stack Development Porjects",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
      />
      </p>
      <p className='font-bold text-xl mt-4'>👋 Hey there!! I am a passionate MERN stack developer with a knack for creating dynamic and efficient web applications.<br className='hidden md:block' /> With expertise in MongoDB, Express.js, React, and Node.js, I enjoy building full-stack solutions that are not only scalable but also user-friendly and intuitive. My journey in web development has been driven by a deep love for problem-solving and a commitment to crafting meaningful digital experiences.
      <br className='hidden md:block' />
      I’m excited about the future of technology and look forward to collaborating on projects that push the boundaries of what’s possible. Let’s connect and create something extraordinary together!
      </p>
      </div>
    </div>
  );
};

export default About;