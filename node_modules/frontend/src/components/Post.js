/**
 * Post component should display the post title, content, owner, created_at, and tags.
 *
 * @component
 * @example
 * const post = {
 *   id: 1,
 *   owner: 1,
 *   title: 'Sample Post',
 *   content: 'This is a sample post content.',
 *   created_at: 1627849923000,
 *   tags: ['sample', 'post']
 * };
 * return <Post post={post} />;
 *
 * @param {Object} props - Component props
 * @param {Object} props.post - Post object
 * @param {number} props.post.id - Post ID
 * @param {number} props.post.owner - Owner ID
 * @param {string} props.post.title - Post title
 * @param {string} props.post.content - Post content
 * @param {number} props.post.created_at - Post creation timestamp
 * @param {string[]} props.post.tags - Array of tags
 *
 * @note Post.defaultProps provides default values for the post object.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const Post = ({ post }) => (
  <Card title={post.title}>
    <p>{post.content}</p>
    <p><strong>Owner:</strong> {post.owner}</p>
    <p><strong>Created At:</strong> {new Date(post.created_at).toLocaleString()}</p>
    <p><strong>Tags:</strong> {post.tags.join(', ')}</p>
  </Card>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

Post.defaultProps = {
  post: {
    id: 0,
    owner: 0,
    title: '',
    content: '',
    created_at: Date.now(),
    tags: [],
  },
};

export default Post;