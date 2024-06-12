import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client.js';
import './Experience.scss';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = `*[_type == "experiences"]`;

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Work Experience</h2>
        <div className="app__experience">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__experience-item"
              key={experience.year+index}
            >
              <div className="app__experience-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__experience-works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__experience-work"
                      data-tip
                      data-for={work.name}
                      key={work.name+index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                      <p className="p-text">{work.desc}</p>
                    </motion.div>

                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, 'app__experiences'),
  'work experience',
  'app__primarybg',
);