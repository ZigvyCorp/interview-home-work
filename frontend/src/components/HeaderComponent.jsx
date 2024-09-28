// E:\zigvy\truong_2024_2\zigvy-interview-blog\frontend\src\components\HeaderComponent.jsx
import PropTypes from 'prop-types';
import {Button, Typography, Layout} from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
import {useNavigate} from 'react-router-dom';

const {Title, Text} = Typography;
const {Header} = Layout;

const HeaderComponent = ({
                             token = '', username = '', handleLogout = () => {
    }
                         }) => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    return (
        <Header style={{
            backgroundColor: '#001529',
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Title level={3} style={{color: '#fff', margin: 0}}>My Blog</Title>
            <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                {token ? (
                    <>
                        <Text style={{color: '#fff', fontSize: '16px'}}>User: {username}</Text>
                        <Button type="primary" icon={<LogoutOutlined/>} onClick={handleLogout}
                                style={{marginLeft: '10px'}}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Button type="primary" onClick={handleLogin} style={{marginLeft: '10px'}}>
                        Login
                    </Button>
                )}
            </div>
        </Header>
    );
};

HeaderComponent.propTypes = {
    token: PropTypes.string,
    username: PropTypes.string,
    handleLogout: PropTypes.func.isRequired,
};

export default HeaderComponent;
