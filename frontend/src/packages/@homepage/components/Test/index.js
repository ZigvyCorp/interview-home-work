import React from 'react';
import { Button } from 'antd';
import { Root } from './styled';
import container from './container';

const Test = () => {
  return (
    <Root>
      <Button>Click me</Button>
    </Root>
  );
};

export default container(Test);
