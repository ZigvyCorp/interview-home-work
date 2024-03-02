import React, { useState, useEffect } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import PropTypes from 'prop-types';
import moment from 'moment';

const PostCard = ({ post, comments, users }) => {

  const [expandedPostIds, setExpandedPostIds] = useState([]);

  const handleExpandComments = (postId) => {
    if (!expandedPostIds.includes(postId)) {
      setExpandedPostIds((prevIds) => [...prevIds, postId]);
    } else {
      setExpandedPostIds((prevIds) => prevIds.filter((id) => id !== postId));
    }
  };
  const commentList = comments.filter((comment) => comment.postId === post.id);
  const userDetail = users.find((usr) => usr.id === post.userId);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>Author: {userDetail?.name || 'Unknown'}</Card.Text>
        <Card.Text>Created At: {moment(post.createdAt).format("DD/MM/YYYY")}</Card.Text>
        <Card.Text>{post.body.slice(0, 100)}...</Card.Text>
        <Card.Text>Comments: {commentList.length}</Card.Text>
      </Card.Body>
      <Collapse in={expandedPostIds.includes(post.id)}>
        <div className='mt-3'>
          <h5>Comments:</h5>
          <ul>
            {commentList.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.name}: </strong>
                {comment.body}
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
      <Button onClick={() => handleExpandComments(post.id)}>
        {expandedPostIds.includes(post.id) ? 'Hide Comments' : 'Show Comments'}
      </Button>
      {/* <Button as={Link} to={`/post/${post.id}`} variant='primary'>
                  Read More
                </Button> */}
    </Card>
  );
};

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    users: PropTypes.array.isRequired,
};

export default PostCard;
