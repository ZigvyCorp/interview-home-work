import React from 'react'
import { Layout, Menu } from 'antd';
import {
    LoginOutlined,
    UserOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import UserList from '../../components/User/UserList';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from '../../redux/reducer/userReducer';
import { logout } from '../../redux/actions/userActions';

const { Sider } = Layout;

const menuItems = [
    { key: 'home', path: '/', label: 'Home', icon: <UserOutlined /> },
    { key: 'create-post', path: '/create-post', label: 'Create', icon: <UserOutlined /> },
];

interface MenuItem {
    key: string;
    path: string;
    label: string;
}

const DefaultLayout = ({ children, isShowUserList }: { children: React.ReactNode, isShowUserList: boolean }) => {
    const currentUser = useSelector(selectCurrentUser)
    const dispatch = useDispatch()
    const location = useLocation()
    const getCurrentMenuItem = () => {
        const currentPath = location.pathname;
        return menuItems.find(item => currentPath === item.path) || {} as MenuItem;
    };

    const currentMenuItem = getCurrentMenuItem();

    return (
        <Layout className='min-h-[100vh]'>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                width={250}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => { }}
                onCollapse={(collapsed, type) => { }}
            >
                <div className='flex flex-col justify-between h-screen'>
                    <div className="flex justify-center items-center  p-4">
                        <InstagramOutlined className='text-6xl text-white'/>
                    </div>
                    <Menu selectedKeys={[currentMenuItem.key]} mode="inline" theme='dark'>
                        {menuItems.map(item => (
                            <Menu.Item key={item.key} icon={item.icon}>
                                <Link to={item.path}>{item.label}</Link>
                            </Menu.Item>
                        ))}
                    </Menu>
                    <div className='p-6 justify-between flex gap-2'>
                        <p className='text-lg text-white'>{currentUser?.name}</p>
                        <div className='flex items-center gap-x-2 text-white cursor-pointer' onClick={() => dispatch(logout())}>
                            <LoginOutlined className='text-2xl text-white cursor-pointer' />
                            <p>Logout</p>
                        </div>
                    </div>

                </div>
            </Sider>
            <Layout className='lg:ml-[250px]'>{children}</Layout>
            {isShowUserList &&
                <Sider className='hidden lg:block p-2 mx-6 my-4' theme='light' width={250}>
                    <UserList />
                </Sider>
            }
        </Layout>
    )
}

export default DefaultLayout
