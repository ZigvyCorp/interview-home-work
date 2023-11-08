import './header.scss';
import React from 'react';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;
function UseHeader() {
    return (
        <div>
            <Header className="header">
                <div className="logo">
                    <Link to="/">
                        <img src="./images/logo1.jpg" alt="LOGO" className="logo_item" />
                    </Link>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    text-color="white"
                    style={{ display: 'flex', flex: 1 }}
                >
                    <Menu.Item key="home">
                        <Link className="nav_item" to="/">
                            HOME
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="product">
                        <Link className="nav_item" to="/">
                            Blogs
                        </Link>
                    </Menu.Item>
                </Menu>
                <div className="wrap_user">
                    <img src="./images/user.png" alt="USER" className="logo_user" />
                    <div className="name-user">Adam Levine</div>
                </div>
            </Header>
        </div>
    );
}

export default memo(UseHeader);
