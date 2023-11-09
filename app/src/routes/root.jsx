
import { Layout, Menu, Avatar } from "antd"
import PostList from "../components/PostList"
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Footer } = Layout

export default function Root() {

    const navigate = useNavigate()

    return (
        <Layout>
            <Header
                className="flex justify-between items-center bg-white"
            >
                <div className="w-20 h-8 rounded-md bg-gray-300" />
                <div className="flex-1">
                    <Menu
                        mode="horizontal"
                        className="justify-center"
                        onClick={(v) => {
                            navigate(v.key)
                        }}
                        selectedKeys={[window.location.pathname]}
                        items={
                            [
                                { key: "/", label: "Blogs" }
                            ]
                        }
                    />
                </div>
                <div className="flex items-center">
                    <Avatar>A</Avatar>
                    <p className="ml-2">Adam Levine</p>
                </div>
            </Header>
            <Layout className="min-h-[calc(100vh-64px)]">
                <Content className="container mx-auto">
                    <Outlet />
                    {/* <PostList /> */}
                </Content>
            </Layout>
        </Layout>
    )
}