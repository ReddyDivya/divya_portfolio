import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import {images} from "../../constants";

const worksData = [
  {
    "_createdAt": "2023-04-06T12:52:37Z",
    "_id": "60e0a60c-45f5-420a-81ef-e1b60696168e",
    "_rev": "xg2PsVir1zBZKaSxZeXMA6",
    "_type": "works",
    "codeLink": "https://github.com/ReddyDivya/Plutus-Bank",
    "description": "Accessing our bank account through the internet.",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/12bee02710f48791eeaffb89dd377563c57b15fe-1350x1046.png",
        "_type": "reference"
      }
    },
    "projectLink": "https://github.com/ReddyDivya/Plutus-Bank",
    "tags": [
      "Java",
      "All"
    ],
    "title": "Plutus Bank",
    "_updatedAt": "2023-04-08T20:44:15.291Z"
  },
  {
    "_createdAt": "2023-04-08T07:56:18Z",
    "_id": "b7aad010-4670-4deb-b3d7-650bcc07d845",
    "_rev": "xg2PsVir1zBZKaSxZeX4tm",
    "_type": "works",
    "_updatedAt": "2023-04-08T08:09:30Z",
    "codeLink": "https://github.com/ReddyDivya/disney-clone",
    "description": "Using React JS, it's a Disney clone.",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/36032d22eee112d655aa2d7a8ef2a7fe848d8e53-600x321.png",
        "_type": "reference"
      }
    },
    "projectLink": "https://github.com/ReddyDivya/disney-clone",
    "tags": [
      "React JS",
      "All"
    ],
    "title": "Disney+ Clone"
  },
  {
    "_id": "863495c9-6394-423c-863d-9b835c848135",
    "_rev": "xg2PsVir1zBZKaSxZeZA6G",
    "_type": "works",
    "codeLink": "https://github.com/ReddyDivya/RockPaperScissors",
    "description": "This is a Rock, Paper & Scissors game between user and computer.",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/0faf37aa14fbb24d71ddb56ee0a33cbecca67f77-742x283.png",
        "_type": "reference"
      }
    },
    "projectLink": "https://github.com/ReddyDivya/RockPaperScissors",
    "tags": [
      "JavaScript",
      "All"
    ],
    "title": "Rock, Paper, Scissors Game",
    "_createdAt": "2023-04-08T08:27:58.461680944Z",
    "_updatedAt": "2023-04-08T21:00:05.908Z"
  },
  {
    "_createdAt": "2023-04-08T08:26:14Z",
    "_id": "6ebfb709-8d23-4ebc-ac27-779516824657",
    "_rev": "Skze6prVba2OofAS15o6Wh",
    "_type": "works",
    "_updatedAt": "2023-04-08T08:26:14Z",
    "codeLink": "https://github.com/ReddyDivya/Meme-Generator",
    "description": "This is a Meme Generator using an open API where we can write on it too.",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/aa6c6477c8a507b0572b04df755222c881638de7-635x373.png",
        "_type": "reference"
      }
    },
    "projectLink": "https://github.com/ReddyDivya/Meme-Generator",
    "tags": [
      "React JS",
      "All"
    ],
    "title": "Meme Generator"
  },
  {
    "_createdAt": "2023-04-08T08:24:36Z",
    "_id": "18d917f3-5aa1-4978-bae9-7722595ed894",
    "_rev": "xg2PsVir1zBZKaSxZeYrna",
    "_type": "works",
    "_updatedAt": "2023-04-08T08:24:36Z",
    "codeLink": "https://github.com/ReddyDivya/Voice-Controlled-Notes",
    "description": "This a voice-to-text converter, we can store the audio and can listen later.",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/bfabc7a96c006bed0bfaf29fdcbf26132693bc16-443x329.png",
        "_type": "reference"
      }
    },
    "projectLink": "https://github.com/ReddyDivya/Voice-Controlled-Notes",
    "tags": [
      "JavaScript",
      "All"
    ],
    "title": "Voice Controlled Notes"
  }
]

const Work = () => {
  const [works, setWorks] = useState(worksData);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = `*[_type == "works"]`;

    // fetch(query).then((data) => {
    //   // setWorks(data);
    //   // setFilterWork(data);
    //   setWorks(worksData);
    //   setFilterWork(worksData);
    // }).catch((error) => console.log(error));
    
    setWorks(worksData);
    setFilterWork(worksData);
    
  }, []);

  const handleWorkFilter = (item) => {
  
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
        console.log(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">My Creative <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['Java', 'JavaScript', 'CSS', 'React JS', 'All'].map((item, index) => (
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
              <img src={work.imgUrl.asset._ref} alt={work.name} />
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
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"),
 "work",
 "app__primarybg");