import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';

const experienceData = [
  {
    "_id": "e617576d-7888-4f4e-bc04-94eb6bfd3c01",
    "_rev": "wmlhfBOPIAheYb3lm3b8YZ",
    "_type": "experiences",
    "works": [
      {
        "_key": "69792c9b337b",
        "_type": "workExperience",
        "company": "TeleServices International Company",
        "desc": "I have worked as a Sotware Engineer at TeleServices International Company",
        "name": "Software Engineer"
      }
    ],
    "year": "2017",
    "_createdAt": "2023-04-08T10:31:49.663307817Z",
    "_updatedAt": "2023-04-08T23:03:57.008Z"
  },
  {
    "_id": "e617576d-7888-4f4e-bc04-94eb6bfd3c01",
    "_rev": "wmlhfBOPIAheYb3lm3b8YZ",
    "_type": "experiences",
    "works": [
      {
        "_key": "69792c9b337b",
        "_type": "workExperience",
        "company": "TeleServices International Company",
        "desc": "I have worked as a Sotware Engineer at TeleServices International Company",
        "name": "Software Engineer"
      }
    ],
    "year": "2018",
    "_createdAt": "2023-04-08T10:31:49.663307817Z",
    "_updatedAt": "2023-04-08T23:03:57.008Z"
  },
  {
    "_id": "c2e28a6e-5a80-427a-acd4-ac2095adf842",
    "_rev": "wmlhfBOPIAheYb3lm3btSt",
    "_type": "experiences",
    "works": [
      {
        "_key": "309bf4de7443",
        "_type": "workExperience",
        "company": "TeleServices International Company",
        "desc": "I have worked as a Software Engineer at TeleServices International Company",
        "name": "Software Engineer"
      }
    ],
    "year": "2019",
    "_createdAt": "2023-04-08T10:39:37.487875707Z",
    "_updatedAt": "2023-04-08T23:11:44.821Z"
  },
  {
    "_id": "c2e28a6e-5a80-427a-acd4-ac2095adf842",
    "_rev": "wmlhfBOPIAheYb3lm3btSt",
    "_type": "experiences",
    "works": [
      {
        "_key": "309bf4de7443",
        "_type": "workExperience",
        "company": "TeleServices International Company",
        "desc": "I have worked as a Software Engineer at TeleServices International Company",
        "name": "Software Engineer"
      }
    ],
    "year": "2020",
    "_createdAt": "2023-04-08T10:39:37.487875707Z",
    "_updatedAt": "2023-04-08T23:11:44.821Z"
  },
  {
    "_id": "c2e28a6e-5a80-427a-acd4-ac2095adf842",
    "_rev": "wmlhfBOPIAheYb3lm3btSt",
    "_type": "experiences",
    "works": [
      {
        "_key": "309bf4de7443",
        "_type": "workExperience",
        "company": "TeleServices International Company",
        "desc": "I have worked as a Software Engineer at TeleServices International Company",
        "name": "Software Engineer"
      }
    ],
    "year": "2021",
    "_createdAt": "2023-04-08T10:39:37.487875707Z",
    "_updatedAt": "2023-04-08T23:11:44.821Z"
  }
]
const Skills = () => {
  const [experiences, setExperiences] = useState(experienceData);
  // const [skills, setSkills] = useState([]);

  useEffect(() => {
    // const query = `*[_type == "experiences"]`;
    // const skillsQuery = `*[_type == "skills"]`;

    // client.fetch(query).then((data) => {
    //   setExperiences(data);
    // });

    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data);
    // });

    setExperiences(experiences);
    // setSkills(data);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        {/* <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div> */}
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
// export default AppWrap(
//   MotionWrap(Skills, 'app__skills'),
//   'skills',
//   'app__whitebg',
// );