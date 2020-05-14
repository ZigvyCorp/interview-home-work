import React from 'react';

const PostItem = ({ post }) => {
  let date = new Date(post.created_at).toDateString();
  return (
    <div className="post">
      <div className="header-post">
        <h3 className="text-center">{post.title}</h3>
        <p> <span className="font-weight-bold">Author:</span> <span> {post.owner}</span></p>
        <p> <span className="font-weight-bold">Created Date:</span> <span> {date}</span></p>
      </div>
      <div className="content-post"><span>{post.content}</span></div>
      <hr />
    </div>
  )
};



export default PostItem;