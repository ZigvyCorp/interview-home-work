import styled from 'styled-components';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Collapse } from 'antd';

const { Panel } = Collapse;

const Title = styled.div`
  font-size: 20px;
  text-align: center;
`;

const Content = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 25px;
`;

const Container = styled.div`
  margin-top: 30px;
  padding: 16px;
`;

const CardWrapper = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin: 0;
  }
`;

const Post = ({ post, fetchComments, comments = [] }) => {
  useEffect(() => {
    fetchComments(post.id);
  }, [fetchComments, post.id]);

  return (
    <Container key={post.id}>
      <Card title={<Title>{post.title}</Title>} style={{ width: '100%' }}>
        <Content>{post.body}</Content>
        <Collapse onChange={() => ({})}>
          <Panel header={`${comments.length} replies`} key='1'>
            {comments.length === 0 ? null : (
              <div>
                {comments.map((comment) => (
                  <CardWrapper key={comment.id}>
                    <Card title={<div>From: {comment.name}</div>}>
                      <div>{comment.body}</div>
                      <div>Reply to</div>
                    </Card>
                  </CardWrapper>
                ))}
              </div>
            )}
          </Panel>
        </Collapse>
      </Card>
    </Container>
  );
};

export default Post;

Post.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array,
  fetchComments: PropTypes.func,
};
