import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'projects', 'work experience', 'skills', 'blogs',  'contact'].map((item, index) => (
      <a href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#244e6a'} : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
