import React from 'react';
import { Button } from 'antd';
import { Root } from './styled';
import container from './container';

const ScollTop = (props) => {
  const { handleScollTop, showButtonScollTop } = props;
  return (
    <Root>
      <div>
        {showButtonScollTop && (
          <Button onClick={handleScollTop} type="primary">
            ^
          </Button>
        )}
      </div>
    </Root>
  );
};

export default container(ScollTop);
