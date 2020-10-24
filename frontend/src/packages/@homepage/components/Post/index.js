import React from 'react';
import { Root, Container } from './styled';
import container from './container';
import Comment from '../Comment';
import dayjs from "dayjs";

import { Typography } from 'antd';
import { Collapse } from 'antd';
import { Tag } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const Post = (props) => {
  const { post, handleToggleExpand } = props;
  return (
    <Root>
      <Title>{post.title}</Title>
      <Container>
        <div className={'infoPost'}>
          <div className={'left'}>
            <Title level={5}>Author: {post.author}</Title>
            <Title level={5}>Created At: {dayjs(post.createdAt).format('MMM DD, YYYY')}</Title>
          </div>
          <div className={'right'}>
            {post.tags.map((item) => (
              <div key={item}>
                <Tag color="magenta">item</Tag>
              </div>
            ))}
          </div>
        </div>
        <div className={'contentPost'}>
          <div>
            <Title level={5}>{post.content}</Title>
          </div>
        </div>
        <div>{post.comments.length} comments</div>
        <hr />
        <div className={'commentPost'}>
          <Collapse
            activeKey={post.isExpandedCmt ? 'comment' : ''}
            ghost
            onChange={handleToggleExpand}
          >
            <Panel header="Comment" key={'comment'}>
              <div>
                {post.comments.map((item) => (
                  <div key={item.id}>
                    {' '}
                    <Comment comment={item} />
                  </div>
                ))}
              </div>
            </Panel>
          </Collapse>
          ,
        </div>
      </Container>
    </Root>
  );
};

export default container(Post);
