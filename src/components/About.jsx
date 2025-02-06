import React from 'react';
import me from '../assets/me.png'
import { Typewriter } from 'react-simple-typewriter';

const About = () => {
  return (
   <div className='bg-base-200 py-12'>
     <div id='about' className='max-w-7xl mx-auto flex flex-col gap-5 lg:flex-row text-[#060414]'>
      <div className='lg:w-1/2 h-auto p-10'>
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
                  `Frontend Development`,
                  "Frontend Porjects",
                ]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
      />
      </p>
      <p className='font-bold text-xl mt-4'>👋 Hey there! I’m a passionate frontend-focused MERN stack developer with a strong expertise in React and Tailwind CSS. I specialize in crafting scalable, high-performance, and visually stunning web applications that offer seamless user experiences.
      With a deep understanding of modern frontend development, I love transforming ideas into intuitive and interactive digital solutions. My journey in web development is fueled by a commitment to innovation, efficiency, and user-centric design.
      I’m always excited to explore new technologies and collaborate on projects that push the boundaries of frontend excellence. Let’s connect and build something extraordinary together! 🚀
      </p>
      </div>
    </div>
   </div>
  );
};

export default About;