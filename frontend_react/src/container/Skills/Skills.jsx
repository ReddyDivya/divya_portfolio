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
          {skills.map((skill) => (
              <motion.div className="app__skills-list">
                <div
                  className="app__flex"
                  style={{ backgroundColor: "#F0EEEE" }}
                >
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
              </motion.div>
          ))}

          {/* <div
              className="app__flex"
              style={{ backgroundColor: "#F0EEEE" }}
          >
            
          </div> */}
          {/* <div className="app__flex">
            <div>
              <img src="https://skillicons.dev/icons?i=html,css,js,react,redux,tailwind,bootstrap,git,github" alt="skills"/>
            </div>
            <br/>
            <div>
              <img src="https://skillicons.dev/icons?i=materialui,nodejs,postman,styledcomponents,express,firebase,visualstudio,vite,netlify" alt="skills"/>
            </div>
          </div> */}
        {/* </motion.div> */}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);