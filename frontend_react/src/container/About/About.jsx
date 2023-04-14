import React, {useState, useEffect} from 'react';
import './About.scss';
import {motion} from "framer-motion";
import {images} from "../../constants";
import { urlFor, sanityClient } from '../../client';
import {AppWrap, MotionWrap} from "../../wrapper";

// const abouts = [
//       {title:'Web Development', description: 'Web development is one of my strong suits', imgUrl : images.about01 },
//       {title:'Frontend Development', description: 'My expertise lies in frontend development', imgUrl : images.about02 },
//       {title:'UI/UX Design', description: 'It is my pleasure to design UI/UX for my clients', imgUrl : images.about04 }
//   ];

const aboutsData = [
  {
    "_createdAt": "2023-04-06T10:37:04Z",
    "_id": "ecbc3123-a776-45cb-b6d6-688a914a3bc3",
    "_rev": "xg2PsVir1zBZKaSxZSvhAg",
    "_type": "abouts",
    "_updatedAt": "2023-04-06T10:37:04Z",
    "description": "I am a React Developer with a passion for building beautiful and functional web applications",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/65ed72deac647aa84f75c5af8f6284ab926931b0-1200x900.png",
        "_type": "reference"
      }
    },
    "title": "React Developer"
  },
  {
    "_createdAt": "2023-04-06T10:36:18Z",
    "_id": "7a9aa5ba-7dfc-43e6-abb2-ecea5327dce6",
    "_rev": "wmlhfBOPIAheYb3llpVC3L",
    "_type": "abouts",
    "_updatedAt": "2023-04-06T10:36:18Z",
    "description": "I am a React Native developer with a passion for building beautiful and functional web applications",
    "imgUrl": {
      "_type": "image",
      "asset": {
        "_ref": "https://cdn.sanity.io/images/8rkkr4xz/portfolio/90d71de50f2c6659156500e7a4d76a618e1fcd63-1200x900.png",
        "_type": "reference"
      }
    },
    "title": "React Native Developer"
  }
]

 const About = () => {

  const [abouts, setAbouts] = useState(aboutsData);

  // useEffect(() => {
  //   // const query = `*[_type == "abouts"]`;

  //   sanityClient.fetch(`*[_type == "abouts"]{
  //     title,
  //     description,
  //     imgUrl{
  //       asset->{
  //         _id,
  //         url
  //       },
  //       alt
  //     }
  //   }`).then((data) => {
  //     setAbouts(data);
  //   })
  //   .catch(console.error);
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
              <img src={about.imgUrl.asset._ref} alt={about.title}/> 
              <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
              <p className="p-text" style={{marginTop:10}}>{about.description}</p>
            </motion.div> 
          ))
        }
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 
"about", 
"app__whitebg");