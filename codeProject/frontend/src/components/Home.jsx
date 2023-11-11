// src/pages/Home.js

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchPosts } from "../redux/actions/postActions";

const Home = () => {
  const dispatch = useDispatch();
  const usenavigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      usenavigate("/login");
    }
    dispatch(fetchPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      {console.log("home", posts)}
      {posts.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
