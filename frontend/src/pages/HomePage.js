import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Button, Collapse } from 'antd';
import { fetchPostsRequest } from '../redux/postsSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 5,
      }}
      dataSource={posts}
      renderItem={post => (
        <List.Item key={post.id}>
          <List.Item.Meta
            title={<Link to={`/post/${post.id}`}>{post.title}</Link>}
            description={`Author: ${post.author} | Created: ${post.createdDate}`}
          />
          {post.content.substring(0, 100)}...
          <Collapse>
            <Collapse.Panel header={`Comments (${post.comments.length})`} key="1">
              {post.comments.map(comment => (
                <div key={comment.id}>
                  <p><strong>{comment.name}</strong> - {comment.time}</p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </Collapse.Panel>
          </Collapse>
        </List.Item>
      )}
    />
  );
};

export default HomePage;
