import React, {useState, useEffect} from 'react';
import './About.scss';
import {motion} from "framer-motion";
import {images} from "../../constants";
import { urlFor, client } from '../../client';
import {AppWrap} from "../../wrapper";

const abouts = [
      {title:'Web Development', description: 'Web development is one of my strong suits', imgUrl : images.about01 },
      {title:'Frontend Development', description: 'My expertise lies in frontend development', imgUrl : images.about02 },
      {title:'UI/UX Design', description: 'It is my pleasure to design UI/UX for my clients', imgUrl : images.about04 }
  ];

const About = () => {

  // const [abouts, setAbouts] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "abouts"]';

  //   client.fetch(query).then((data) => {
  //     setAbouts(data);
  //   });
  // }, []);


  return (
    <>
      <h2 className="head-text">I know that 
      <span>Good Apps</span> <br/> means <span>Good Business</span></h2>
      <div className="app__profiles">
        {
          abouts.map((about, index) => (
            <motion.div whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
              {/* <img src={urlFor(about.imgUrl)} alt={about.title}/> */}
              <img src={about.imgUrl} alt={about.title}/> 
              <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
              <p className="p-text" style={{marginTop:10}}>{about.description}</p>
            </motion.div> 
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(About, "about");