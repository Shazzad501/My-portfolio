import React from 'react';
import { FaDownload } from 'react-icons/fa';

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
    <div>
      <div className="navbar bg-base-100">
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
          className="btn font-bold text-xl hidden lg:flex">Resume <span className='text-base'><FaDownload/></span></button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn bg-transparent hover:bg-transparent border-none lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-bold">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;