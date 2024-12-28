import React from 'react';
import fireO from '../assets/fire-o-icon.png'
import service from '../assets/service.png'
import jobPortal from '../assets/job-portal.png'
import jobPortal2 from '../assets/job-portal-2.png'
import movieLover from '../assets/movie-lover.png'
import movieLover2 from '../assets/movie-lover-2.png'
import { Link } from 'react-router-dom';
import { LuTvMinimalPlay } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';

const MyProject = () => {
  return (
    <div className='bg-base-200'>
    <div id='project' className='text-[#060414] py-16 max-w-7xl mx-auto px-5'>
      <h2 
      className='font-extrabold text-6xl flex items-center justify-center'>
        <span>My Pr</span>
        <span>
          <img
          className='w-9 h-8 -mt-2' 
          src={fireO} 
          alt="" />
          </span>
        <span>ject</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>

        {/* project 1 */}
        <div className='shadow-sm shadow-[#1B1833] rounded-md py-4 px-2 '>
          <div className='flex h-[200px]'>
            <img 
            className='w-1/2 h-full object-cover rounded-t-md'
            src={movieLover} alt="" />
            <img 
            className='w-1/2 h-full object-cover rounded-t-md'
            src={movieLover2} alt="" />
          </div>
          <div className='flex flex-col gap-3 mt-5'>
          <h3 className='font-bold text-2xl'>Movie Portal Website</h3>
          <p className='font-bold text-lg text-gray-500'>This is a Full Stack Movie Portal Website.You also can login and logout to our website and also post articles and read articles. For full information visit github.</p>
          <p className='font-bold text-xl'>Tech Used :- React; Firebase; ExpressJs;
             MongoDB; TailwindCss; ReactRouter</p>
          <div className='flex mt-14 justify-between items-center'>
            <Link
            to='https://movie-lover-a62ea.web.app/' 
            target='_blank'
            className='flex items-center gap-2 justify-center font-bold text-xl text-white btn bg-gradient-to-br from-[#1B1833] to-[#1C325B] hover:from-[#1C325B] hover:to-[#1B1833]'>
              <span><LuTvMinimalPlay/></span><span>Live Preview</span>
            </Link>
            <Link 
            to='https://github.com/Shazzad501/Movie-portal'
            target='_blank'
            className='flex items-center gap-2 justify-center font-bold text-xl text-white btn bg-gradient-to-bl from-[#1B1833] to-[#1C325B] hover:from-[#1C325B] hover:to-[#1B1833]'>
              <span><FaGithub/></span><span>View Github</span>
            </Link>
          </div>
          </div>
        </div>

        {/* project 2 */}
        <div className='shadow-sm shadow-[#1B1833] rounded-md py-4 px-2 '>
          <div className='flex h-[200px]'>
            <img 
            className='w-1/2 h-full object-cover rounded-t-md'
            src={jobPortal} alt="" />
            <img 
            className='w-1/2 h-full object-cover rounded-t-md'
            src={jobPortal2} alt="" />
          </div>
          <div className='flex flex-col gap-3 mt-5'>
          <h3 className='font-bold text-2xl'>Job Portal Website</h3>
          <p className='font-bold text-lg text-gray-500'>It's a Full Stack Job Portal Website.You also can login and logout to our website and also post and read articles. You create a job and also apply a job. For full
             info visit github.</p>
          <p className='font-bold text-xl'>Tech Used :- React; Firebase; ExpressJs; MongoDB; JWT; TailwindCss; ReactRouter</p>
          <div className='flex mt-14 justify-between items-center'>
            <Link
            to='https://job-portal-cb309.web.app/' 
            target='_blank'
            className='flex items-center gap-2 justify-center font-bold text-xl text-white btn bg-gradient-to-br from-[#1B1833] to-[#1C325B] hover:from-[#1C325B] hover:to-[#1B1833]'>
              <span><LuTvMinimalPlay/></span><span>Live Preview</span>
            </Link>
            <Link 
            to='https://github.com/Shazzad501/job-portal-web'
            target='_blank'
            className='flex items-center gap-2 justify-center font-bold text-xl text-white btn bg-gradient-to-bl from-[#1B1833] to-[#1C325B] hover:from-[#1C325B] hover:to-[#1B1833]'>
              <span><FaGithub/></span><span>View Github</span>
            </Link>
          </div>
          </div>
        </div>

        {/* project 3 */}
        <div className='shadow-sm shadow-[#1B1833] rounded-md py-4 px-2 '>
          <div className='flex h-[200px]'>
            <img 
            className='w-full h-full object-cover rounded-t-md'
            src={service} alt="" />
          </div>
          <div className='flex flex-col gap-3 mt-5'>
          <h3 className='font-bold text-2xl'>Service Review Website</h3>
          <p className='font-bold text-lg text-gray-500'>This is an amazing service provider website where you can access a variety of services. You can visit individual service pages, rate services, and even add, update, or delete your own services. Additionally, you can manage your posted reviews.</p>
          <p className='font-bold text-xl'>Tech Used :-React; Firebase; MongoDB; JWT; Express;  TailwindCss; ReactRouter; Axios</p>
          <div className='flex justify-between items-center'>
            <Link
            to='https://service-review-5ac25.web.app/' 
            target='_blank'
            className='flex items-center gap-2 justify-center font-bold text-xl text-white btn bg-gradient-to-br from-[#1B1833] to-[#1C325B] hover:from-[#1C325B] hover:to-[#1B1833]'>
              <span><LuTvMinimalPlay/></span><span>Live Preview</span>
            </Link>
            <Link 
            to='https://github.com/Shazzad501/Service-client'
            target='_blank'
            className='flex items-center gap-2 justify-center font-bold text-xl text-white btn bg-gradient-to-bl from-[#1B1833] to-[#1C325B] hover:from-[#1C325B] hover:to-[#1B1833]'>
              <span><FaGithub/></span><span>View Github</span>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyProject;