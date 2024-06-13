import React, { useState } from 'react';
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { useTheme } from '../../context/theme-Context.js';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const {theme, toggleTheme} = useTheme();
  
  const toggleMode = () => {
    toggleTheme();
  }

  return (
    <nav className={`app__navbar__${theme}`}>
      <ul className={`app__navbar-links__${theme}`}>

        {/*menu*/}
        {['home', 'projects', 'work experience', 'skills', 'blogs', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}__${theme}`}>
            <div />
            <a href={`#${item}__${theme}`}>{item}</a>
          </li>
        ))}

        {/*Light & Dark themes */}
        <li className={`app__flex p-text__${theme}`}>
          <div onClick ={toggleMode}>
            {
              theme === "dark" ? <MdLightMode/> : <MdDarkMode/>
            }
          </div>
        </li>
      </ul>

      <div className={`app__navbar-menu__${theme}`}>

         {/*displaying menu icon */}
        <HiMenuAlt4 onClick={() => setToggle(true)} /> {/*setToggle = true - to open up menu */}

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            {/*displaying X icon*/}
            <HiX onClick={() => setToggle(false)} />  {/*setToggle = false - to close menu */}
            <ul>
              {['home', 'projects', 'work experience', 'skills', 'blogs', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}__${theme}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}

              {/*Light & Dark themes */}
              {/* <li>
                <div onClick ={toggleMode}>
                  {
                    theme === "dark" ? <MdLightMode/> : <MdDarkMode/>
                  }
                </div>
              </li> */}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
