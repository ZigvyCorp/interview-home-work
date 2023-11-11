// src/pages/CreatePost.js

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/actions/postActions";

const CreatePost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreatePost = () => {
    dispatch(createPost({ title, content }));
  };

  return (
    <div>
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleCreatePost}>Create Post</button>
    </div>
  );
};

export default CreatePost;
