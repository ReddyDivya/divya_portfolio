import React from 'react';
import './Header.scss';
import {motion} from "framer-motion";
import {images} from "../../constants";
import {AppWrap, MotionWrap} from "../../wrapper";
import { useTheme } from '../../context/theme-Context.js';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  const {theme} = useTheme();

   return(
    <div className={`app__header__${theme} app__flex`}>
       <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className={`app__header-badge__${theme}`}>
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className={`p-text__${theme}`}>Hello, I am</p>
                <h1 className={`head-text__${theme}`}>Divya</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
              <p className={`p-text__${theme}`}>React JS Developer</p>
              <p className={`p-text__${theme}`}>Blogger</p>
            </div>
          </div>
        </motion.div>

        <motion.div whileInView={{opacity : [0, 1]}}
          transition={{duration:0.5, delayChildren:0.5}} 
          className={`app__header-img__${theme}`}>
            <img src={images.profile} alt="profile_bg"></img>
            {/*motion.img - scale, ease attributes are must*/}
            <motion.img whileInView={{scale : [0, 1]}}
              transition={{duration:1, ease:'easeInOut'}} 
              className="overlay_circle" src={images.circle} 
              alt="profile_circle"/>
        </motion.div>
        
        <motion.div variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className={`app__header-circles__${theme}`}>
            {[images.react, images.redux, images.tailwindcss].map((circle, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt="circle"/>
            </div>
          ))}
        </motion.div>
    </div>
   )
}

export default AppWrap(
  MotionWrap(Header, 'app__header'),
  'home',
  'app__primarybg',
);