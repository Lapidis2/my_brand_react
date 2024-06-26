// @ts-nocheck
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Guest from '../Portal/Guest';

function BlogManagement() {
  const [showNewBlogModal, setShowNewBlogModal] = useState(true);
  const [showUpdateBlogModal, setShowUpdateBlogModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [notifyMsg, setNotifyMsg] = useState('');
  const [blogIdToUpdate, setBlogIdToUpdate] = useState('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://my-brand-backend-tsc3.onrender.com/blogs');
        setBlogs(response.data.blogs);
      } catch (error) {
        console.error('Error fetching blogs:', error.message);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (showUpdateBlogModal && blogIdToUpdate) {
      const blogToUpdate = blogs.find(blog => blog._id === blogIdToUpdate);
      if (blogToUpdate) {
        setImage(blogToUpdate.imageUrl);
        setTitle(blogToUpdate.title);
        setDescription(blogToUpdate.description);
      }
    }
  }, [showUpdateBlogModal, blogIdToUpdate, blogs]);

  const handleNewBlogSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(formData)
    formData.append('title', title);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const token = getToken();

      const response = await axios.post('https://my-brand-backend-tsc3.onrender.com/blogs', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      setNotifyMsg('Blog created successfully!');
      setShowNewBlogModal(true);
      setTimeout(() => {
        setNotifyMsg('');
      }, 6000);
    } catch (error) {
      console.error('Error creating blog:', error.message);
    }
  };

  const handleUpdateBlogSubmit = async (e) => {
    e.preventDefault();
    
    const updatedTitle = document.getElementById("updateTitle").value;
    const updatedDescription = document.getElementById("updateDescription").value;
    const updatedImage = document.getElementById('imageUrl').files[0];
  
  
    const formData = new FormData();
             formData.append('title', updatedTitle);
             formData.append('description', updatedDescription);
             formData.append('image', updatedImage);
            console.log(formData)
    try {
      const token = getToken();
      
  
      const response = await axios.put(`https://my-brand-backend-tsc3.onrender.com/blogs/${blogIdToUpdate}`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
        
      });
  
      console.log('Response:', response);
  console.log('Response Data:', response.data); 
      setShowUpdateBlogModal(false);
    } catch (error) {
      console.error('Error updating blog:', error.message);
    }
  };
  
  

  const handleDeleteBlog = async (blogId) => {
    try {
      const token = getToken();
      const confirmDelete = window.confirm('Are you sure you want to delete this blog?');
      if (confirmDelete) {
        const response = await axios.delete(`https://my-brand-backend-tsc3.onrender.com/blogs/${blogId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log(response.data);
      }
    } catch (error) {
      console.error('Error deleting blog:', error.message);
    }
  };

  const getToken = () => {
    try {
      const token = localStorage.getItem('token');
      console.log("token", token);
      return token;
    } catch (error) {
      console.error('Error retrieving token:', error.message);
      return null;
    }
  };

  return (
    <main >
      <header style={{ textAlign: 'center' }}>
        <h1>Blog Management</h1>
      </header>
      <div className="blog__list" style={{textAlign:'center'}}>
        <ul>
          {blogs.map(blog => (
            <li key={blog._id}>
              {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} style={{ maxWidth: '100%', height: 'auto' }} />}
              <h2>{blog.title}</h2>
              <p>{blog.description}</p>
              <button onClick={() => { setShowUpdateBlogModal(true); 
                                   setBlogIdToUpdate(blog._id);
                               }}>Update</button>
              <button onClick={() => handleDeleteBlog(blog._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      {showNewBlogModal && (
        <div >
          <h2>New Blog</h2>
          <form onSubmit={handleNewBlogSubmit} >
            <input type="file" name="image" placeholder="file" id="blogimage" onChange={(e) => setImage(e.target.files[0])} />
            <input type="text" name="title" placeholder="Title" id="blogtitle" required onChange={(e) => setTitle(e.target.value)} />
            <textarea name="description" placeholder="Description" id="blogdesc" required onChange={(e) => setDescription(e.target.value)} ></textarea>
            <button type="submit" id="createBtn">Create Blog</button>
          </form>
        </div>
      )}
      {showUpdateBlogModal && (
        <div>
          <h2>Update Blog</h2>
          <form onSubmit={handleUpdateBlogSubmit}   >
            <input type="file" id="imageUrl" name="updateImage" accept="image/jpg, image/png" onChange={(e) => setImage(e.target.files[0])} />
            <input type="hidden" id="blogId" value={blogIdToUpdate} />
            <input type="text" id="updateTitle" name="updateTitle" value={title} required onChange={(e) => setTitle(e.target.value)} />
            <textarea id="updateDescription" name="updateDescription" rows="6" value={description} required onChange={(e) => setDescription(e.target.value)} ></textarea>
            <button type="submit" value="submit" id="updatebtn">Submit</button>
          </form>
        </div>
      )}
      {notifyMsg && <p>{notifyMsg}</p>}
    </main>
  );
}

export default BlogManagement;
