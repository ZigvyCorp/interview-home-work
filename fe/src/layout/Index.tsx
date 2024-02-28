import { Button, Dropdown, Layout, MenuProps } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/reducer/userReducer";

const MLayout = ({ children }: {children?: React.ReactNode;}) => {
    const dispatch = useAppDispatch();
    const profileItems: MenuProps['items'] = [
		{
			label: (
				<div
					className='flex items-center gap-2'
					onClick={() => {
						dispatch(logout());
					}}
				>
					Log out
				</div>
			),
			key: '3',
		},
	];
  return (
    <Layout>
      <Header className="bg-blue-500 flex justify-between items-center">
        <div className="text-4xl">logo</div>
        <div className="text-4xl font-bold">POST</div>
        <div>
        <Dropdown menu={{ items: profileItems }}>
        <Button>Avatar</Button>
      </Dropdown>
        </div>
      </Header>
      <Content>
        {children}
      </Content>
    </Layout>
  );
};

export default MLayout;
