import React, { useEffect, useState } from "react";
import Post from "./Post";
import "./Blogs.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { usePost } from "../redux/store/usePost";

function Blogs() {
  const [postState, postDispatch, postActions] = usePost();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) => {
      postDispatch(postActions.setPost(res.data));
    });
  }, []);

  return (
    <div className="blogs-wrapper">
      <div className="search-box">
        <input type="text" placeholder="Search for post ..." />
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      {postState.posts.map((post, i) => (
        <div key={i}>
          <Post
            id={i}
            username={post.owner}
            title={post.title}
            content={post.content}
            created_at={post.created_at}
            tags={post.tags}
          />
        </div>
      ))}
    </div>
  );
}

export default Blogs;
