import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
type Props = {
  children?: React.ReactNode;
};

const LayoutContent = ({ children }: Props) => {
  return (
    <Content className='lg:max-w-[1280px] lg:min-w-[1280px] mx-auto p-4'>
      {children}
    </Content>
  );
};

export default LayoutContent;
