import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const CommentSection = ({ postId }) => {
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (commentContent.trim()) {
      // Dispatch an action to add a comment (you need to define this action in your Redux setup)
      dispatch({
        type: 'FETCH_COMMENTS_REQUEST',
        payload: { postId, content: commentContent },
      });

      // Clear the input after submission
      setCommentContent('');
    }
  };

  return (
    <div className="comment-section">
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add a comment..."
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CommentSection;
