import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
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
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={listMenu}
                style={{
                    flex: 1
                }}
            />
        </Header>
        <Content
            style={{
                padding: '0 48px',
            }}
        >

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