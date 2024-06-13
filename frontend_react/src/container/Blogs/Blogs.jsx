import React, {useState, useEffect} from 'react';
import  "./Blogs.scss";
import {AppWrap, MotionWrap} from "../../wrapper";
import { motion } from 'framer-motion';
import {SiHashnode} from "react-icons/si";
import { useTheme } from '../../context/theme-Context.js';

const Blogs = () => {
    const {theme} = useTheme();
    const [posts, setPosts] = useState([]);

    const fetchPosts = async (query) => {
      const data = await fetch('https://gql.hashnode.com/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      const response = await data.json();
      // console.log(response.data.publication.posts);
      setPosts(response.data.publication.posts.edges);
    };

    useEffect(()=>{
      
      //to fetch blogs from hashnode api [https://api.hashnode.com]
      const query = `
      query Publication {
        publication(host: "thedivyareddyy.hashnode.dev") {
          isTeam
          title
          posts(first: 20) {
            edges {
              node {
                title
                brief
                slug
                url
                coverImage {
                  url
                }
              }
            }
          }
        }
      }
      `;

      fetchPosts(query); 
    }, [])


  return (
    <>
        <h2 className={`head-text__${theme}`}>Blogs</h2>
        <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className={`app__blog-portfolio__${theme}`}
        >
        {posts.map((post, index) => (
          <div className="app__blog-item app__flex" key={index}>
            <div
              className="app__blog-img app__flex"
            >
              <img src={post.node.coverImage.url} alt={post.node.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__blog-hover app__flex"
              >
                <a href={`https://thedivyareddyy.hashnode.dev/${post.node.slug}`} target="_blank" rel="noreferrer">
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

            <div className="app__blog-content app__flex">
              <h4 className={`bold-text__${theme}`}>{post.node.title}</h4>
              {/* <p className="p-text" style={{ marginTop: 10 }}>{post.node.brief}</p> */}
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