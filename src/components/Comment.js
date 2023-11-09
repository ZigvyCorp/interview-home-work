import React from 'react';
import './comment.scss'

const Comment = ({ comment }) => {
  return (
    <div className='comment'>
      <div className='imgComment'>
        <img src='https://icon-icons.com/icons2/884/PNG/512/person_4_icon-icons.com_68900.png' alt='author' />
      </div>
      <div className='contentComment'>
        {comment.user && (
          <p className='author-comment-name mb-0'>{comment.user.name || 'Unknown'}  <span>{comment.created_at}</span></p>
        )}
        <p className='content mt-0'>{comment.content}</p>
        <p className='reply'>Reply to</p>
      </div>
    </div>
  );
}

export default Comment;
