import React from 'react';
import { Root } from './styled';
import container from './container';

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
          <b>{comment.username}</b> <i>{comment.createdAt}</i>
        </div>
        <div>{comment.content}</div>
      </div>
    </Root>
  );
};

export default container(Comment);
