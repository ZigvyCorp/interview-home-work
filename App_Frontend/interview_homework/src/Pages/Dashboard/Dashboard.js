import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Dashboard.css';
import CommentSection from '../../Components/Comment';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const [expandedPost, setExpandedPost] = useState(null);

  const toggleComments = (postId) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
  }, [dispatch]);

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="logo">Logo</div>
        <nav>
          <span>Blogs</span>
        </nav>
        <div className="profile">Adam Levine</div>
      </header>
      {/* Posts */}
      <div className="posts">
        <Link to="/create" className='btn btn-success'>Add new post</Link>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <div className='d-flex'>
              <div>
                <p>
                  <strong>Author:</strong> {post.Owner.name}
                </p>
                <p>
                  <strong>Created at:</strong> {post.createdAt}
                </p>
              </div>
              {/* Tags */}
              <div className="tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag" style={{ backgroundColor: getRandomColor() }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p>{post.content}</p>

            {/* Replies */}
            <p onClick={() => toggleComments(post.id)} className="replies">
              {post.Comments.length} replies (Click to {expandedPost === post.id ? 'collapse' : 'expand'})
            </p>

            {/* Comments */}
            {expandedPost === post.id && post.Comments.length > 0 && (
              <div className="comments">
                {post.Comments.map((comment, index) => (
                  <div key={index} className="comment">
                    <p>
                      <strong>{comment.Owner.name}</strong> <span>{comment.createdAt}</span>
                    </p>
                    <p>{comment.content}</p>
                    <p className="reply">Reply to</p>
                  </div>
                ))}
              </div>
            )}
            <div className="CommentSection">
              <CommentSection postId={post.id} /> {/* Pass postId to CommentSection */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
