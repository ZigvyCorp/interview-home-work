import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input } from 'antd';
import { Header } from 'antd/es/layout/layout';
import React from 'react';

type Props = {
  children?: React.ReactNode;
};

const LayoutHeader = ({ children }: Props) => {
  return (
    <Header className='h-[64px]  flex flex-row justify-between items-center gap-4 px-4 lg:px-7 bg-[#7dbcea]'>
      <div className='flex gap-4 items-center'>
        <img src='/vite.svg' alt='logo' />
      </div>
      <div>
        <Avatar size={32} icon={<UserOutlined />} className='mr-2' />
        Loc Tran
      </div>
    </Header>
  );
};

export default LayoutHeader;
