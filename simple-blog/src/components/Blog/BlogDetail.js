// PostDetail.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";

const PostDetail = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await Axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPost(response.data);
    };

    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
