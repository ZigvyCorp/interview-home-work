import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Avatar, Dropdown, MenuProps, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { logout } from '@/redux/features/auth-slice';

const UserInformationStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const UserInformation = ({
  handleOpenCreateBlogModal,
}: {
  handleOpenCreateBlogModal: () => void;
}) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const items: MenuProps['items'] = useMemo(
    () => [
      {
        label: <p onClick={handleOpenCreateBlogModal}>Create a blog</p>,
        key: '0',
      },
      {
        label: (
          <p
            onClick={() => {
              localStorage.removeItem('access_token');
              dispatch(logout());
            }}
          >
            Logout
          </p>
        ),
        key: '1',
      },
    ],
    []
  );

  return (
    <UserInformationStyled>
      <Avatar
        style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }}
        size='large'
        gap={4}
      >
        {user?.name}
      </Avatar>
      <Dropdown menu={{ items }} trigger={['click']}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {user?.username}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </UserInformationStyled>
  );
};

export default UserInformation;
