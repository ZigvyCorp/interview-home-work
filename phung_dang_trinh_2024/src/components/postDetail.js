import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const PostDetail = () => {
  const { id } = useParams();
  const posts  = useSelector((state) => state.posts);
  const post = posts.find(p => p?.id === parseInt(id));
  console.log("post:",post);
  

  return (
    <div className="container mt-4">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <ul>
        {post.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
