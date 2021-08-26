import { useState, useEffect } from 'react';
import axios from 'axios';
import CommentList from './CommentList';

const PostList = () => {
  const [post, setPost] = useState([]);

  async function requestPost() {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:4000/posts/1',
    });

    setPost(res.data.data.data);
  }

  useEffect(() => {
    requestPost();
  }, []);

  console.log(post);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {
        <div className="card" style={{ width: '100%', marginBottom: '20px' }}>
          <div className="card-body">
            <h3 className="text-center">{post.title}</h3>
            <span className="text-danger">Author: </span>
            <span>{post && post.author ? post.author[0].name : ''}</span>
            <br />
            <span className="text-danger">Created at: </span>
            <span>
              {post && post.created_at ? post.created_at.split('T')[0] : ''}
            </span>
            <br />
            <br />
            <p>{post && post.content ? post.content.substring(0, 100) : ''}</p>
            {<CommentList />}
          </div>
        </div>
      }
    </div>
  );
};

export default PostList;
