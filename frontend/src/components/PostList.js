/**
 * PostList Component
 * 
 * This component renders a list of posts using Ant Design's List component.
 * Each post displays its title, owner ID, creation date, a snippet of its content, and associated tags.
 * It also includes actions to read more about the post and view comments.
 * 
 * @component
 * @example
 * const posts = [
 *   {
 *     id: 1,
 *     owner: 123,
 *     title: "Sample Post",
 *     content: "This is a sample post content...",
 *     created_at: 1616161616161,
 *     tags: ["tag1", "tag2"]
 *   }
 * ];
 * return <PostList posts={posts} />;
 * 
 * @param {Object[]} posts - Array of post objects to be displayed.
 * @param {number} posts[].id - Unique identifier for the post.
 * @param {number} posts[].owner - ID of the post owner.
 * @param {string} posts[].title - Title of the post.
 * @param {string} posts[].content - Content of the post.
 * @param {number} posts[].created_at - Timestamp of when the post was created.
 * @param {string[]} posts[].tags - Array of tags associated with the post.
 * 
 * @returns {JSX.Element} A list of posts.
 */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!Array.isArray(posts)) {
    return <div>Error: Posts data is not an array.</div>;
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={posts}
      renderItem={post => (
        <List.Item
          key={post.id}
          actions={[
            <Link to={`/posts/${post.id}`}>Read More</Link>,
            <Button type="link">Comments (0)</Button> // Assuming no comments data in the provided JSON
          ]}
        >
          <List.Item.Meta
            title={post.title}
            description={`Owner ID: ${post.owner} | Created At: ${new Date(post.created_at).toLocaleString()}`}
          />
          {post.content.substring(0, 100)}...
          <div><strong>Tags:</strong> {post.tags.join(', ')}</div>
        </List.Item>
      )}
    />
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    owner: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.number.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

PostList.defaultProps = {
  posts: [],
};

export default PostList;