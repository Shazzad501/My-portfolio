import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-gradient-to-tr from-[#1B1833] to-[#1C325B] flex flex-col gap-4 items-center justify-center py-14 text-white'>
      <h2 className='font-bold text-4xl'>Shazzad Hossain Maruf</h2>
      <div className='flex gap-5'>
        <Link to='https://github.com/Shazzad501' target='_blank' className='font-bold text-3xl'><FaGithub/></Link>
        <Link to='https://www.linkedin.com/in/md-maruf-162799255/' target='_blank' className='font-bold text-3xl'><FaLinkedin/></Link>
        <Link to='https://x.com/SMaruf3950' target='_blank' className='font-bold text-3xl'><FaTwitter/></Link>
      </div>
      <p className='font-bold text-xl'>Copyright © {new Date().getFullYear()} - All right reserved by Maruf</p>
    </div>
  );
};

export default Footer;