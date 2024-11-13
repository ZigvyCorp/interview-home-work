import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate, getRandomColor, getRandomDaysAgo, getRandomAvatar } from '../utils/utils';

const Post = ({ post }) => {
  const [open, setOpen] = useState(false);

  const toggleComments = () => {
    setOpen(!open);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <Link to={`/post/${post._id}`} className='text-decoration-none text-dark'>
          <h1 className="card-title text-center">{post.title}</h1>
        </Link>
      </div>
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-body">
            <p className="mt-0 fw-bold">
              Author: {post.userId.name} <br />
              Created at: {formatDate(new Date())}
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            {['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'].map(tag => {
              const tagColor = getRandomColor();
              return (
                <span
                  key={tag}
                  className={`badge badge-pill bg-${tag} me-1 m-1`}
                  style={{
                    color: tagColor,
                    border: `1px solid ${tagColor}`,
                    padding: '0.2rem 0.5rem',
                  }}
                >
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className="card-body">
        <h4 className='card-text'>{post.body}</h4>
        <h6 className='mt-5 text-secondary'>{post.comments && post.comments.length > 0 ? post.comments.length : 0} replies</h6>
        <div className="text-center">
          <button className="btn btn-link" onClick={toggleComments}>
            {open ? 'Hide Comments' : 'Show Comments'}
          </button>
        </div>
        <hr/>
        <div className={`collapse ${open ? 'show' : ''}`} id="comment-collapse">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map(comment => (
              <div key={comment._id} className="d-flex border p-2 mb-2 rounded m-1">
                <img
                  src={getRandomAvatar()}
                  alt={`${comment.name}'s avatar`}
                  className="rounded-circle m-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <div>
                  <strong>{comment.name}</strong> {getRandomDaysAgo()}<br />
                  <span>{comment.body}</span><br />
                  <button className="btn p-0 mt-3 mb-3">Reply to</button>
                </div>
              </div>
            ))
          ) : (
            <p>No Reply yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
