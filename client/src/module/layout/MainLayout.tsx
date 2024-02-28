import { HeartOutlined, VerticalLeftOutlined, VerticalRightOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Layout, Menu, Row } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/vite.svg";

interface IProps {
    children: React.ReactNode;
    activeKey: "blog" | string;
}

const MainLayout = (props: IProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onBreakpoint = (broken: boolean) => {
        setCollapsed(broken);
    };

    return (
        <Layout id="main-layout">
            <Sider
                collapsed={collapsed}
                onBreakpoint={onBreakpoint}
                breakpoint="sm"
                collapsedWidth={40}
            >
                <Row>
                    <Col className="main-layout-avatar-col" xs={24}>
                        <Link to={{ pathname: "/" }}>
                            <Avatar size={collapsed ? 20 : 70} src={Logo} />
                        </Link>
                    </Col>
                    <Col xs={24}>
                        <Menu
                            selectedKeys={[props.activeKey]}
                            activeKey={props.activeKey}
                            theme={"dark"}
                        >
                            <Menu.Item key={"blog"}>
                                <Link to={{ pathname: "/blog" }}>
                                    {collapsed ? <HeartOutlined />: 'Blog'}
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Sider>

            <Button
                id="button-toggle-menu"
                icon={collapsed ? <VerticalLeftOutlined /> : <VerticalRightOutlined />}
                size="small"
                onClick={() => setCollapsed(!collapsed)}
            ></Button>

            <Layout>
                <Content>{props.children}</Content>
                <Footer>
                    <small>
                        <b>©2024 Created by Do Tuan Lam</b>
                    </small>
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
