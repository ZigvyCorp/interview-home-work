import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts';

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(p => p?.id === parseInt(id));

  return (
    <div className="container mt-4">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h3>Comments</h3>
      <ul>
        {[1].map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
