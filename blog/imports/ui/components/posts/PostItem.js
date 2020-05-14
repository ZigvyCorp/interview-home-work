import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
  let date = new Date(post.created_at).toDateString();
  return (
    <div className="post-summary">
      <div className="header-post">
        <h3 className="text-center">
          <Link to={`/post/${post.id}`} className="ui button primary">
            {post.title}
          </Link>
        </h3>
        <p> <span className="font-weight-bold">Author:</span> <span> {post.owner}</span></p>
        <p> <span className="font-weight-bold">Created Date:</span> <span> {date}</span></p>
      </div>
      <div className="content-post"><span>{post.content}</span></div>
      <hr />
    </div>
  )
};



export default PostItem;