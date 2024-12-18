
import html from '../assets/html.jpg'
import css from '../assets/css.png'
import js from '../assets/js.png'
import react from '../assets/react.jpg'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.jpg'
import express from '../assets/express.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import programmingC from '../assets/programmin-c.jpg'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import k from '../assets/k.png'
import Marquee from 'react-fast-marquee'


const MySkills = () => {
  return (
    <div id='skills' className='text-[#060414] flex flex-col gap-8 items-center overflow-hidden py-16'>
      <div>
        <h2 className='font-extrabold text-6xl flex items-center justify-center'><span>My S</span><span><img src={k} alt="" className='w-8 h-8 -mt-[14px]'/></span><span>ills</span></h2>
      </div>
      <div>
        <Marquee>
          <div className='flex flex-col gap-7'>
          <div className='flex justify-center items-center'>
              <img src={html} alt=""  className='w-28 h-20 rounded-md'/>
              <img src={css} alt=""  className='w-24 h-20 rounded-md'/>
              <img src={js} alt=""  className='w-20 h-16 rounded-md ml-7'/>
              <img src={node} alt=""  className='w-20 h-[70px] rounded-md ml-8'/>
              <img src={react} alt=""  className='w-24 h-20 rounded-md ml-6'/>
              <img src={express} alt=""  className='w-24 h-20 rounded-md ml-2'/>
              <img src={mongo} alt=""  className='w-16 h-16 rounded-md ml-7'/>
              <img src={vscode} alt=""  className='w-20 h-22 rounded-md ml-7'/>
              <img src={programmingC} alt=""  className='w-[75px] h-16 rounded-md ml-5'/>
          </div>
          <div className='flex justify-center items-center'>
              <img src={github} alt=""  className='w-20 h-[70px] rounded-md'/>
              <img src={firebase} alt=""  className='w-24 h-20 rounded-md ml-5'/>
              <img src={tailwind} alt=""  className='w-20 h-[70px] rounded-md ml-5'/>
              <img src={bootstrap} alt=""  className='w-20 h-20 rounded-md ml-10'/>
              <img src={git} alt=""  className='w-24 h-20 rounded-md ml-6'/>
              
          </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MySkills;