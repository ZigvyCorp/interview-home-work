import React from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;
type Props = {
  children?: React.ReactNode;
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};
const LayoutFooter = ({ children }: Props) => {
  return (
    <Footer style={footerStyle} className='sticky bottom-0'>
      {children}
    </Footer>
  );
};

export default LayoutFooter;
