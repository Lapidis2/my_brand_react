// @ts-nocheck
import React, { useState, useEffect } from "react";

function SingleBlogPage() {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      const singleBlogId = window.location.href.split("=")[1];
      try {
        const response = await fetch(
          `https://my-brand-backend-tsc3.onrender.com/blogs/${singleBlogId}`
        );
        if (!response.ok) {
          throw Error("Network error");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchBlog();
  }, []);

  return (
    <div id="theBlog">
      <h2>Single blog page</h2>
      {blog && (
        <div className="singleimage">
          <img src={blog.imageUrl} alt="Blog" />
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
        </div>
      )}
      <div id="likesCont">
        <div id="likesNumber">{blog ? blog.likes.length : 0}</div>
        <button id="like">Like</button>
      </div>
      <div id="commentSection">
        <textarea name="comment" placeholder="comment here" id="commentText"></textarea>
        <button id="comment">Add Comment</button>
      </div>
      <div id="commentsContainer">
        <h1>Comments:</h1>
        {blog &&
          blog.comment.map((comment, index) => (
            <div key={index}>
              <div>User: {comment.user}</div>
              <div>{comment.text}</div>
              <div>Created at: {comment.createdAt}</div>
            </div>
          ))}
      </div>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
}

export default SingleBlogPage;
