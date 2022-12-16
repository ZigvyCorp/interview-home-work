import React from 'react';
import PostItem from '../PostItem';
const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((item) => {
        return <PostItem post={item} />;
      })}
    </div>
  );
};
export default Posts;
