import React from 'react';
import { FaDownload, FaHamburger } from 'react-icons/fa';
import { FiAlignJustify } from 'react-icons/fi';
import resume from '../assets/Maruf.pdf'

const Navbar = () => {
  const links = <>
   <li><a href='#home'>Home</a></li>            
   <li><a href='#about'>About</a></li>
   <li><a href='#skills'>Skills</a></li>
   <li><a href='#project'>Projects</a></li>
   <li><a href='#education'>Education</a></li>
   <li><a href='#contact'>Contact</a></li>
  </>
  return (
    <div className='text-white'>
      <div className="navbar px-10">
        <div className="navbar-start">
          <a className="text-3xl font-bold">Shazzad Maruf</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a href={resume} download=''>
          <button 
          className="btn bg-transparent font-bold text-xl hidden lg:flex text-white hover:bg-transparent">Resume <span className='text-base'><FaDownload/></span></button>
          </a>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent border-none lg:hidden">
              <p className='font-bold text-2xl text-white'><FiAlignJustify/></p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl font-bold text-black">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;