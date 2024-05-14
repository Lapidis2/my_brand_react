// @ts-nocheck
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SingleBlogPage from './singleblog';
function BlogList() {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get('https://my-brand-backend-tsc3.onrender.com/blogs');
        const blogsArr = response.data;
        const blogsData = blogsArr.blogs;
        setBlogsData(blogsData);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    }

    fetchBlogs();
  }, []); 
 
  return (
    <div id="myblogs">
      {blogsData.map((blog) => (
        <div key={blog._id} className="blog">
          <div className="blog-content">
            <img src={blog.imageUrl} alt={blog.title} />
            <h1 className="title">{blog.title}</h1>
            <p className="blog-desc">{blog.description}</p>
            <a href={`/singleBlogPage?id=${blog._id}`}>Read More</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
