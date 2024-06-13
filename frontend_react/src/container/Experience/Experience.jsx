import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations
// import { Tooltip as ReactTooltip } from 'react-tooltip';
import { AppWrap, MotionWrap } from '../../wrapper'; // Importing HOC wrappers for additional functionality
import { urlFor, client } from '../../client.js'; // Importing utilities for fetching data from the client
import './Experience.scss';
import { useTheme } from '../../context/theme-Context.js'; // Importing custom hook to get the current theme

const Experience = () => {
  const {theme} = useTheme(); // Getting the current theme from context
  const [experiences, setExperiences] = useState([]); // Initializing state to hold experience data

  useEffect(() => {
    // Fetch experiences data when the component mounts
    const query = `*[_type == "experiences"]`; // Query to fetch experiences from the client

    client.fetch(query).then((data) => {
      setExperiences(data); // Set the fetched data to state
    }).catch((error) => {
      console.error("Error fetching experiences:", error); // Log any errors during fetching
    });
  }, []); // Empty dependency array ensures this runs only once after initial render

  return (
    <>
      {/* Dynamic heading based on the current theme */}
      <h2 className={`head-text__${theme}`}>Work Experience</h2>
      
      <div className="app__experience">
        {experiences.map((experience, index) => (
          // Motion div for each experience item with unique key
          <motion.div
            className="app__experience-item"
            key={`${experience.year}-${index}`}
          >
            <div className={`app__experience-year__${theme}`}>
              <p className={`bold-text__${theme}`}>{experience.year}</p>
            </div>
            
            <motion.div className="app__experience-works">
              {experience.works.map((work, idx) => (
                // Motion div for each work item within an experience with unique key
                <motion.div
                  whileInView={{ opacity: [0, 1] }} // Animation for appearing in view
                  transition={{ duration: 0.5 }} // Duration of the animation
                  className="app__experience-work"
                  data-tip
                  data-for={work.name}
                  key={`${work.name}-${idx}`}
                >
                  {/* Work name and company dynamically styled based on the current theme */}
                  <h4 className={`bold-text__${theme}`}>{work.name}</h4>
                  <p className={`p-text__${theme}`}>{work.company}</p>
                  <p className={`p-text__${theme}`}>{work.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// Exporting the component wrapped with higher-order components for additional functionality
export default AppWrap(
  MotionWrap(Experience, 'app__experiences'), // Wrapping Experience with MotionWrap for animations
  'work experience', // ID for AppWrap
  'app__primarybg' // Class name for AppWrap
);
