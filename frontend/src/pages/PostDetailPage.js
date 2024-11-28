import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.posts.find(p => p.id === parseInt(id)));

  if (!post) return <p>Post not found!</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Created:</strong> {post.createdDate}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetailPage;
