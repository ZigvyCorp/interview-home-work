import React, { useState } from 'react';
import { List, Spin, Collapse } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import CommentItem from './CommentItem'; 

const { Panel } = Collapse;

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const [activeKeys, setActiveKeys] = useState([]);
  const fetchComments = (keys) => {
    setLoadingComments(true);
    console.log(keys);
    setActiveKeys(keys);
    if (keys.includes('1')) {
      console.log('Panel 1 is open');
    } else {
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoadingComments(false);
      })
      .catch(() => setLoadingComments(false));
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
