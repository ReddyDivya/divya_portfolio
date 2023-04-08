import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import {images} from "../../constants";

// const filterWork = [
//   {title:'Modern UI/UX Website', description: 'A modern UI/UX Portfolio Website', projectLink:'https://github.com', imgUrl : images.about01 },
//   {title:'Frontend Development', description: 'My expertise lies in frontend development', imgUrl : images.about02 },
//   {title:'UI/UX Design', description: 'It is my pleasure to design UI/UX for my clients', imgUrl : images.about04 }
// ];

const filterWork = [
  {
    "_createdAt": "2023-04-06T12:52:37Z",
    "_id": "60e0a60c-45f5-420a-81ef-e1b60696168e",
    "_rev": "wmlhfBOPIAheYb3llqpRvr",
    "_type": "works",
    "_updatedAt": "2023-04-06T12:52:37Z",
    "codeLink": "https://github.com",
    "description": "A modern UI/UX Portfolio Website",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "image-65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900-png",
        "_type": "reference"
      }
    },
    "projectLink": "https://github.com",
    "tags": [
      "UI/UX",
      "All",
      ""
    ],
    "title": "Modern UI/UX Website"
  }
]

const Work = () => {
  const [works, setWorks] = useState([]);
  // const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = `*[_type == "works"]`;

    fetch(query).then((data) => {
      setWorks(data);
      // setFilterWork(data);
    }).catch((error) => console.log(error));
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      // if (item === 'All') {
      //   setFilterWork(works);
      // } else {
      //   setFilterWork(works.filter((work) => work.tags.includes(item)));
      // }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              {/* <img src={urlFor(work.imgUrl)} alt={work.name} /> */}
              <img src={work.imgUrl} alt={work.name} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                {/* <p className="p-text">{work.tags[0]}</p> */}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Work;