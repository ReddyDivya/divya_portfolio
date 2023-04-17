import React, {useState, useEffect} from 'react';
import  "./Blogs.scss";
import {AppWrap, MotionWrap} from "../../wrapper";

const Blogs = () => {
    const [blogs, setBlogs] = useState({posts:''});

    //to fetch blogs from hashnode api [https://api.hashnode.com]
    const query = `query {
        user(username:"ReddyDivya")
        {
          publication{
            posts{
              slug
              title
              brief
              coverImage
            }
          }
        }
      }`;

    const fetchBlogPosts = async () => {
        const response = await fetch('https://api.hashnode.com', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ query }),
          });

          const blogsData = await response.json(); //.json() method parses the JSON response into a JS object literal
          setBlogs({ posts: blogsData.data.user.publication.posts});
          
          console.log(blogsData.data.user.publication.posts);   
          console.log(blogs.posts)
    }

    useEffect(()=>{
        fetchBlogPosts();
    }, [])

  return (
    <>
        <div className="head-text">Blogs</div>
        <div>
            { 
                // blogs.posts.maps((blog, index) => (
                //     <p>{blog.posts[0].title}</p>
                //     // <a key={index} href={`https://blog.ReddyDivya.dev/${blog.slug}`}>
                //     //     <img src={blog.coverImage} alt={blog.title}/>
                //     //     <p>{blog.brief}</p>
                //     // </a>
                // ))
            }
        </div>
    </>
  )
}

export default AppWrap(MotionWrap(Blogs, 'app__blogs'), 
"blogs", 
"app__primarybg");