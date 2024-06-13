import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client.js';
import './Skills.scss';
import { useTheme } from '../../context/theme-Context.js';

const Skills = () => {
  const {theme} = useTheme();
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className={`head-text__${theme}`}>Technical Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className={`app__skills-item__${theme} app__flex`}
              key={skill.name}
            >
              <div
                className={`app__skills-item__${theme} app__flex`}
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className={`p-text__${theme}`}>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__primarybg',
);