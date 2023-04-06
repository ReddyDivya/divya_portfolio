import React from 'react';
import {BsTwitter, BsInstagram} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

function NavigationDots({active}) {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item, index) => 
            (
                <a 
                href={`#${item}`} 
                key={item+index}
                className="app__navigation-dot"
                style={active === item ? {backgroundColor: "#313BAC"} : {} }>
                {item}
                </a>
            )
        )}
    </div>
  )
}

export default NavigationDots