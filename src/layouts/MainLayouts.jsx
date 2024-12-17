import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const MainLayouts = () => {
  return (
    <div>
      <div className='bg-gradient-to-tr from-[#1B1833] to-[#1C325B]'>
      <Navbar></Navbar>
      <Hero></Hero>
      </div>
    </div>
  );
};

export default MainLayouts;