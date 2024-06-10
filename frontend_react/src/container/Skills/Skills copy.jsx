import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client.js';
import './Skills.scss';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Technical Skills</h2>
      <div className="app__skills-container">
        <div
          className="app__flex"
          // style={{ backgroundColor: "#F0EEEE" }}
        >
          {/* <img src={urlFor(skill.icon)} alt={skill.name} /> */}
          <img src="https://skillicons.dev/icons?i=html,css,js,react,redux,tailwind,bootstrap,git,github,materialui,graphql,netlify,nodejs,postman,styledcomponents,express,firebase,visualstudio,vite" alt="skills"/>
        </div>
        
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);