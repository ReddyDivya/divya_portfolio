import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, sanityClient } from '../../client';
import './Skills.scss';

const skillsData = [
  {
    "_id": "307670b0-a971-4293-88a6-d7e3a6e5d296",
    "_rev": "xg2PsVir1zBZKaSxZfA3kw",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/31f11147f89dbd855a9b948e2ce643ea2f41c0a9-480x480.png",
        "_type": "reference"
      }
    },
    "name": "HTML",
    "_createdAt": "2023-04-08T10:55:24.152020271Z",
    "_updatedAt": "2023-04-08T23:27:31.477Z"
  },
  {
    "_id": "ffb43b56-baa4-4d30-8294-7291bcf57377",
    "_rev": "xg2PsVir1zBZKaSxZfA8pw",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/107574d887f1c07c9fbea0704de7f293e244a8f3-480x480.png",
        "_type": "reference"
      }
    },
    "name": "CSS",
    "_createdAt": "2023-04-08T10:56:23.407297962Z",
    "_updatedAt": "2023-04-08T23:28:30.717Z"
  },
  {
    "_id": "b3a90707-bb5d-40cf-8229-1b45d73c481d",
    "_rev": "wmlhfBOPIAheYb3lm3hZwd",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/66bbf9242b1ccffebb5d46f376f5036b527fad48-480x480.png",
        "_type": "reference"
      }
    },
    "name": "JavaScript",
    "_createdAt": "2023-04-08T10:53:53.089486111Z",
    "_updatedAt": "2023-04-08T23:26:00.444Z"
  },
  {
    "_id": "5518839b-8014-4c0f-bdfc-41f20374ed9d",
    "_rev": "wmlhfBOPIAheYb3lm3cMux",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png",
        "_type": "reference"
      }
    },
    "name": "React JS",
    "_createdAt": "2023-04-08T10:43:49.734249144Z",
    "_updatedAt": "2023-04-08T23:15:57.069Z"
  },
  {
    "_id": "7c3aa1ec-e4f6-4e1a-ab84-98c0ec1670f0",
    "_rev": "Skze6prVba2OofAS16RbvP",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/91716227a0183f05eb4c2c846dda4ec6d3ea433c-480x480.png",
        "_type": "reference"
      }
    },
    "name": "Redux",
    "_createdAt": "2023-04-08T10:58:06.184254709Z",
    "_updatedAt": "2023-04-08T23:30:13.513Z"
  },
  {
    "_id": "0337a3a3-d91b-40d7-9e0e-fef04a5ac583",
    "_rev": "xg2PsVir1zBZKaSxZfAQyS",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png",
        "_type": "reference"
      }
    },
    "name": "GIT",
    "_createdAt": "2023-04-08T11:00:09.062468802Z",
    "_updatedAt": "2023-04-08T23:32:16.400Z"
  },
  {
    "_id": "28cd3387-7342-4f88-b028-182b5f5d74dc",
    "_rev": "wmlhfBOPIAheYb3lm3iQ3f",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/2825d163301127c72b6121baebb5e570689596e5-480x480.png",
        "_type": "reference"
      }
    },
    "name": "Sass",
    "_createdAt": "2023-04-08T11:01:29.022839411Z",
    "_updatedAt": "2023-04-08T23:33:36.343Z"
  },
  {
    "_id": "c2ec4bc5-6421-4623-8f1b-1f9e5b2f8c46",
    "_rev": "wmlhfBOPIAheYb3lm3ibbv",
    "_type": "skills",
    "icon": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/d8c8025b1695a3f14f849b99afc71d917ef40813-480x480.png",
        "_type": "reference"
      }
    },
    "name": "Node JS",
    "_createdAt": "2023-04-08T11:03:01.613438899Z",
    "_updatedAt": "2023-04-08T23:35:08.989Z"
  }
];
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
  const [skills, setSkills] = useState(skillsData);

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
    setSkills(skillsData);
  }, []);

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name + index}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                {/* <img src={urlFor(skill.icon)} alt={skill.name} /> */}
                <img src={skill.icon.asset._ref} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year+index}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name+index}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
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

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);