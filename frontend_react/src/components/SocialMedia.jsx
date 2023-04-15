import React from 'react';
import {BsTwitter, BsLinkedin} from "react-icons/bs";
import {AiFillGithub, AiOutlineCodepen, AiOutlineCodeSandbox} from "react-icons/ai";
import {SiHashnode} from "react-icons/si";


function SocialMedia() {
  return (
    <div className="app__social">
         <div>
            <BsLinkedin/>
         </div>
         <div>
            <SiHashnode/>
         </div>
         <div>
            <AiFillGithub/>
         </div>
         <div>
            <AiOutlineCodepen/>
         </div>
         <div>
            <AiOutlineCodeSandbox/>
         </div>
         <div>
            <BsTwitter/>
         </div>
    </div>
  )
}

export default SocialMedia