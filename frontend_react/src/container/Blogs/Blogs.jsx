import React, {useState, useEffect} from 'react';
import  "./Blogs.scss";
import {AppWrap, MotionWrap} from "../../wrapper";
import { motion } from 'framer-motion';
import {SiHashnode} from "react-icons/si";

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const fetchPosts = async (query) => {
      const data = await fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      const response = await data.json();
      setPosts(response.data.user.publication.posts);
    };

    useEffect(()=>{
      
      //to fetch blogs from hashnode api [https://api.hashnode.com]
      const query = `
      {
        user(username: "ReddyDivya") {
          publication {
            posts{
              slug
              title
              brief
              coverImage
            }
          }
        }
      }
      `;

      fetchPosts(query); 
    }, [])


  return (
    <>
        <h2 className="head-text">Blogs</h2>
        {/* <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__blog-portfolio"
        >
            {posts.map((post, index) => (

              <div className="app__blog-item app__flex" key={index}>
                <div
                  className="app__blog-img app__flex"
                >
                    <a key={index} 
                        href={`https://blog.reddydivya.dev/${post.slug}`} >
                        <div>
                            <img src={post.coverImage} alt={post.title}/>
                        </div>
                        <div className="app__blog-content app__flex">
                          <h4 className="bold-text">{post.title}</h4>
                          <p className="p-text" style={{ marginTop: 10 }}>{post.brief}</p>
                        </div>
                    </a>
                </div>
              </div>  
            ))}
        </motion.div> */}

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
        {posts.map((post, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={post.coverImage} alt={post.title} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={`https://thedivyareddyy.hashnode.dev/${post.slug}`} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <SiHashnode />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{post.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{post.brief}</p>
            </div>
          </div>
        ))}
      </motion.div>
        
    </>
  )
}

export default AppWrap(MotionWrap(Blogs, 'app__blogs'), 
"blogs", 
"app__whitebg");