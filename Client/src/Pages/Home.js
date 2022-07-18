import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3005/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      {posts.map((post, key) => {
        return (
          <div
            className="post"
            key={key}
            onClick={() => {
              history.push(`/post/${post.id}`);
            }}
          >
            <div className="title">{post.title}</div>
            <div className="body"> {post.postText}</div>
            <div className="footer">{post.username}</div>
          </div>
        );
      })}
    </>
  );
};

export default Home;
