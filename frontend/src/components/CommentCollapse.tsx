import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Comment } from './Comment';

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '2 replies',
    children: <Comment/>,
    showArrow: false,
  },
];

export function CommentCollapse() {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse defaultActiveKey={['1']} ghost onChange={onChange} items={items} />;
};
