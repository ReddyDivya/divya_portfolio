import React from 'react';
import { useTheme } from '../context/theme-Context.js';

const NavigationDots = ({ active }) => {
  const {theme} = useTheme();

  return (<div className={`app__navigation__${theme}`}>
    {['home', 'projects', 'work experience', 'skills', 'blogs',  'contact'].map((item, index) => (
      <a href={`#${item}__${theme}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#244e6a'} : {}}
      />
    ))}
  </div>)
};

export default NavigationDots;
