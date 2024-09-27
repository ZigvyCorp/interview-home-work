import React, { useState } from 'react';
import Search from './search';
import { Card, Collapse, Button } from 'react-bootstrap';

const PostList = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [open, setOpen] = useState(false);

  const handleSearch = (keyword) => {
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      {filteredPosts.map((post) => (
        <Card className="mb-3" key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Author: {post.author} - {post.createdAt}
            </Card.Subtitle>
            <Card.Text>{post.summary}</Card.Text>

            <Button
              variant="link"
              onClick={() => setOpen(!open)}
              aria-controls="collapse-comments"
              aria-expanded={open}
            >
              Comments ({post.comments.length})
            </Button>
            <Collapse in={open}>
              <div id="collapse-comments">
                {post.comments.map((comment, index) => (
                  <p key={index}>{comment}</p>
                ))}
              </div>
            </Collapse>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
