import React from 'react';
import { FaDownload, FaHamburger } from 'react-icons/fa';
import { FiAlignJustify } from 'react-icons/fi';

const Navbar = () => {
  const links = <>
   <li><a>Home</a></li>            
   <li><a>About</a></li>
   <li><a>Skills</a></li>
   <li><a>Projects</a></li>
   <li><a>Education</a></li>
   <li><a>Contact</a></li>
  </>
  return (
    <div className='text-white'>
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-3xl font-bold">Shazzad Maruf</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-xl">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button 
          className="btn bg-transparent font-bold text-xl hidden lg:flex text-white">Resume <span className='text-base'><FaDownload/></span></button>
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