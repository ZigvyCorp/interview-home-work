import styled from 'styled-components';
import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Card, Collapse } from 'antd';

const { Panel } = Collapse;

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 10px;
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

const Post = ({ post, user, fetchComments, comments = [] }) => {
  useEffect(() => {
    fetchComments(post.id);
  }, [fetchComments, post.id]);

  const title = useMemo(() => {
    return (
      <div>
        <Title>{post.title}</Title>
        <div>Author: {user.name}</div>
        <div>Created at: Sep 20, 2020</div>
      </div>
    );
  }, [post, user]);

  return (
    <Container key={post.id}>
      <Card title={title} style={{ width: '100%' }}>
        <Content>{post.body}</Content>
        <Collapse>
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
  user: PropTypes.object,
  comments: PropTypes.array,
  fetchComments: PropTypes.func,
};
