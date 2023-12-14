// DataFetchingComponent.js
import React, { useState, useEffect } from 'react';

const DataFetchingComponent = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));

    // Fetch comments
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} - {post.body}
          </li>
        ))}
      </ul>

      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name} - {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetchingComponent;
