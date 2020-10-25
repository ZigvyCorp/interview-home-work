import React from 'react';
import { Root } from './styled';
import container from './container';
import ms from 'ms';

import { Avatar } from 'antd';

const Comment = (props) => {
  const { comment } = props;
  return (
    <Root>
      <div className={'avatar'}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
      <div className={'contentComment'}>
        <div>
          <b>{comment.username}</b>{' '}
          <i>{ms(Date.now() - comment.createdAt, { long: true })} ago</i>
        </div>
        <div>{comment.content}</div>
      </div>
    </Root>
  );
};

export default container(Comment);
