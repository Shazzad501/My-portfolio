import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import MySkills from '../components/MySkills';
import MyProject from '../components/MyProject';
import Education from '../components/Education';

const MainLayouts = () => {
  return (
    <div>
      <div className='sticky top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#1B1833] to-[#1C325B]'>
      <Navbar></Navbar>
      </div>
      <div className='bg-gradient-to-tr from-[#1B1833] to-[#1C325B]'>
      <Hero></Hero>
      </div>
      <About></About>
      <MySkills></MySkills>
      <MyProject></MyProject>
      <Education></Education>
    </div>
  );
};

export default MainLayouts;