
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwindcss.png'
import express from '../assets/expressjs.png'
import node from '../assets/nodejs.png'
import mongo from '../assets/mongodb.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import programmingC from '../assets/programingc.png'
import vscode from '../assets/vscode.png'
import firebase from '../assets/firebase.png'
import stripe from '../assets/stripe.png'
import k from '../assets/k.png'
import Marquee from 'react-fast-marquee'

const skills = [
  {
    name:'HTML5',
    img: html,
  },
  {
    name:'CSS3',
    img: css,
  },
  {
    name:'Java Script',
    img: js,
  },
  {
    name: 'React',
    img: react,
  },
  {
    name:'Express Js',
    img: express,
  },
  {
    name:'Node Js',
    img: node,
  },
  {
    name: 'MongoDB',
    img: mongo,
  },
  {
    name: 'Vs Code',
    img: vscode,
  },
  {
    name: 'Programming C',
    img: programmingC,
  },
  {
    name: 'Github',
    img: github,
  },
  {
    name: 'Firbase',
    img: firebase,
  },
  {
    name: 'Tailwind',
    img: tailwind,
  },
  {
    name: 'Bootstrap',
    img: bootstrap,
  },
  {
    name: 'Git',
    img: git,
  },
  {
    name: 'Stripe',
    img: stripe,
  },
]

const MySkills = () => {

  return (
    <div id='skills' className='text-[#060414] flex flex-col gap-8 items-center overflow-hidden py-16'>
      <div>
        <h2 className='font-extrabold text-6xl flex items-center justify-center'><span>My S</span><span><img src={k} alt="" className='w-8 h-8 -mt-[14px]'/></span><span>ills</span></h2>
      </div>
      <div>
        <Marquee>
          <div className='flex flex-col gap-7'>
          <div className='flex justify-center items-center gap-5'>
          {
            skills.slice(0, 9).map((skill, idx) => (
              <div key={idx} className='flex flex-row gap-5'>
                <img src={skill.img} alt={skill.name} className='w-[72px] h-[72px] rounded-md'/>
              </div>
            ))
          }
          </div>
          <div className='flex justify-center items-center gap-5'>
          {
            skills.slice(10, 16).map((skill, idx) => (
              <div key={idx} className='flex flex-row gap-5'>
                <img src={skill.img} alt={skill.name} className='w-[72px] h-[72px] rounded-md'/>
              </div>
            ))
          }
          </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MySkills;