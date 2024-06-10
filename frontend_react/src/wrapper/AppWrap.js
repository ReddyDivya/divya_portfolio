import React from 'react';
import {NavigationDots, SocialMedia} from "../components";

const AppWrap = (Component, idName, classNames) => function HOC(){
  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Component/>

            {/* Copyright is moved to Footer.jsx */}
            {/* <div className="copyright">
                <p className="p-text">Developed with Passion</p>
                <p className="p-text">
                  <a href="https://www.linkedin.com/in/reddy-divya-58025a12b/" target='_blank' rel="noreferrer">
                    Reddy Divya
                  </a>
                </p>
            </div> */}
        </div>

        <NavigationDots active={idName}/>
    </div>
  )
}

export default AppWrap;