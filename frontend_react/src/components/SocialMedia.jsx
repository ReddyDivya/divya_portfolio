import React from 'react';
import {BsTwitter, BsLinkedin} from "react-icons/bs";
import {AiFillGithub, AiOutlineCodepen, AiOutlineCodeSandbox} from "react-icons/ai";
import {SiHashnode} from "react-icons/si";


function SocialMedia() {
  return (
    <div className="app__social">
         <div>
            <a href="https://www.linkedin.com/in/reddy-divya-58025a12b/" target='_blank'>
               <BsLinkedin/>
            </a>
         </div>
         <div>
            <a href="https://thedivyareddyy.hashnode.dev/" target='_blank'>
               <SiHashnode/>
            </a>
         </div>
         <div>
            <a href="https://github.com/ReddyDivya" target='_blank'>
               <AiFillGithub/>
            </a>
         </div>
         <div>
            <a href="https://codepen.io/Reddy_Divya" target='_blank'>
               <AiOutlineCodepen/>
            </a>               
         </div>
         <div>
            <a href="https://codesandbox.io/u/divyareddy0205" target='_blank'>
               <AiOutlineCodeSandbox/>
            </a>               
         </div>
         <div>
            <a href="https://twitter.com/thedivyareddyy" target='_blank'>
               <BsTwitter/>
            </a>
         </div>
    </div>
  )
}

export default SocialMedia