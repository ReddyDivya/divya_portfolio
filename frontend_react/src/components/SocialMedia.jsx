import React from 'react';
import {BsTwitter, BsLinkedin} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
import {SiHashnode} from "react-icons/si";
import { useTheme } from '../context/theme-Context.js';

function SocialMedia({app__Socials}) {
  const {theme} = useTheme();

  return (
    // <div className={`app__social__${theme}`}>
    <div className={`${app__Socials}__${theme}`}>
         <div>
            <a href="https://www.linkedin.com/in/reddy-divya-58025a12b/" target='_blank' rel="noreferrer">
               <BsLinkedin/>
            </a>
         </div>
         <div>
            <a href="https://thedivyareddyy.hashnode.dev/" target='_blank' rel="noreferrer">
               <SiHashnode/>
            </a>
         </div>
         <div>
            <a href="https://github.com/ReddyDivya" target='_blank' rel="noreferrer">
               <AiFillGithub/>
            </a>
         </div>
         <div>
            <a href="https://twitter.com/thedivyareddyy" target='_blank' rel="noreferrer">
               <BsTwitter/>
            </a>
         </div>
    </div>
  )
}

export default SocialMedia;