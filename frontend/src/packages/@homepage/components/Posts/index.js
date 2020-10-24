import React from 'react';
import { Root } from './styled';
import container from './container';
import Post from '../Post'
const Posts = (props) => {
  const { posts } = props;
  return (
    <Root>
      {posts.map((item) =>
        <div key={item.id}><Post post = {item}/></div>
      )}
    </Root>
  );
};

export default container(Posts);
