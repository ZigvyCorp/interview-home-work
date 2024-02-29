import React from 'react';
import { Dropdown, Flex, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import Search from 'antd/es/input/Search';
import PostSearchInput from '../../features/PostSearch/Components/PostSearchInput/PostSearchInput';
const { Header, Footer, Content } = Layout;

const HomeLayout = () => {
    const navigate = useNavigate();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const listMenu = [
        {
            key: 1,
            label: `HOME`,
            onClick: ({ key }) => {
                navigate('/')
            }

        }
    ];

    return <Layout>
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Flex justify='space-between' align='center' >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={listMenu}
                    style={{
                        flex: 1,
                        minWidth: 100
                    }}
                />

            </Flex>
        </Header>
        <Content
            style={{
                padding: '10px 48px',
            }}
        >
            <PostSearchInput />
            <div
                style={{
                    background: colorBgContainer,
                    minHeight: "100vh",
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet />
            </div>
        </Content>
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
    </Layout>
};
export default HomeLayout;