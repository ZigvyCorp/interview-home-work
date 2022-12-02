import { Layout, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <Layout.Header>
            <div className="header">
                <div className="logo">
                    <h4>Logo</h4>
                </div>
                <div className="blog">
                    <h3>Blogs</h3>
                </div>
                <div className="user">
                    <Space>
                        <div className="avatar">
                            <Avatar
                                style={{ backgroundColor: '#606060' }}
                                shape="square"
                                size="large"
                                icon={<UserOutlined />}
                            />
                        </div>
                        <span className="detail">Adam Levine</span>
                    </Space>
                </div>
            </div>
        </Layout.Header>
    );
};

export default Header;
