import React, { useState, useEffect } from 'react';
import { List, Spin, Collapse, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import CommentItem from './CommentItem';

const { Panel } = Collapse;

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [activeKeys, setActiveKeys] = useState([]);

  const fetchComments = async (keys) => {
    setLoadingComments(true);
    setActiveKeys(keys);

    if (!keys.includes('1')) {
      setLoadingComments(false);
      return;
    }

    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setComments(data);
    } catch (error) {
      message.error('Failed to load comments. Please try again later.');
    } finally {
      setLoadingComments(false);
    }
  };

  return (
    <Collapse onChange={fetchComments} activeKey={activeKeys}>
      <Panel header={activeKeys.includes('1') ? `${comments.length} Comments` : 'Comments'} key="1">
        {loadingComments ? (
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
        ) : (
          <List
            dataSource={comments}
            renderItem={(comment) => (
              <CommentItem key={comment.id} comment={comment} />
            )}
          />
        )}
      </Panel>
    </Collapse>
  );
};

export default CommentList;
