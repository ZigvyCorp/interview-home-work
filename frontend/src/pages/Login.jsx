import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Typography, Card, Alert } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { loginRequest } from '../redux/slices/userSlice';

const { Title } = Typography;

const Login = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.user);

    const onFinish = (values) => {
        const { username, password } = values;
        dispatch(loginRequest({ username, password }));
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5',
            padding: '40px',
        }}>
            <Card style={{
                width: 500,
                padding: '60px',
                borderRadius: '10px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            }}>
                <Title level={1} style={{
                    textAlign: 'center',
                    fontSize: '40px',
                    marginBottom: '40px'
                }}>
                    Login
                </Title>

                {error && (
                    <Alert
                        message="Error"
                        description={error}
                        type="error"
                        showIcon
                        closable
                        style={{ marginBottom: 24 }}
                    />
                )}

                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    layout="vertical"
                    size="large"
                >
                    <Form.Item
                        name="username"
                        label={<span style={{ fontSize: '20px' }}>Username</span>}
                        rules={[{ required: true, message: 'Please enter your username!' }]}
                    >
                        <Input
                            size="large"
                            prefix={<UserOutlined style={{ fontSize: '20px' }} />}
                            placeholder="Enter your username"
                            style={{ height: '50px', fontSize: '18px' }}
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label={<span style={{ fontSize: '20px' }}>Password</span>}
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined style={{ fontSize: '20px' }} />}
                            placeholder="Enter your password"
                            style={{ height: '50px', fontSize: '18px' }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            size="large"
                            loading={loading}
                            style={{
                                height: '55px',
                                fontSize: '18px',
                                borderRadius: '8px',
                            }}
                        >
                            Log In
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Login;
