import { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);

  async function requestComments() {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:4000/comments?postId=1',
    });

    setComments(res.data.data.data);
    setCount(res.data.result);
  }

  useEffect(() => {
    requestComments();
  }, []);

  return (
    <div>
      <div className="card-body">
        <p>
          <button
            className="btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            {count} replies
          </button>
        </p>
      </div>
      {comments.map((comment) => (
        <div className="collapse" id="collapseExample">
          <div className="card card-body mt-2">
            <span className="text-danger">
              {comment.author[0].name}{' '}
              <span className="text-secondary">
                {comment.created_at.split('T')[0]}
              </span>
            </span>
            <br />
            <p className="px-5">{comment.content}</p>
            <span>Reply to</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
