import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostDetail from '../components/PostDetail';

const Post = () => {
  const { id } = useParams();
  const currentPost = useSelector(state => state.post.postList.find(f => f.id === parseInt(id)));
  return (
    <div className="post">
      <PostDetail data={currentPost} />
    </div>
  )
}

export default Post