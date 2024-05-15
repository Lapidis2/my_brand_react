// @ts-nocheck
import React, { useState, useEffect } from "react";

function SingleBlogPage() {
  const [blog, setBlog] = useState(null);
  const [commentText, setCommentText] = useState("");
  const [error, setError] = useState(null);

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
        setError(error.message);
      }
    }

    fetchBlog();
  }, []);

  const handleAddComment = async () => {
    const userId = localStorage.getItem("userId");
    const blogId = window.location.href.split("=")[1];

    try {
      const response = await fetch(
        `https://my-brand-backend-tsc3.onrender.com/comments/createComment/${blogId}/user/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: commentText }),
        }
      );

      if (!response.ok) {
        throw Error("Network Error");
      }

      const data = await response.json();
      setBlog((prevBlog) => ({
        ...prevBlog,
        comment: [...prevBlog.comment, data],
      }));
      setCommentText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    const userId = localStorage.getItem("userId");

    const blogId = window.location.href.split("=")[1];

    try {
      const response = await fetch(
        `https://my-brand-backend-tsc3.onrender.com/like/${blogId}/user/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw Error("Network Error");
      }

      const data = await response.json();
      setBlog((prevBlog) => ({
        ...prevBlog,
        likes: [...prevBlog.likes, data],
      }));
    } catch (err) {
      console.log(err);
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        <button id="like" onClick={handleLike}>Like</button>
      </div>
      <div id="commentSection">
        <textarea
          name="comment"
          placeholder="comment here"
          id="commentText"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button id="comment" onClick={handleAddComment}>Add Comment</button>
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
