import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Typography } from 'antd';

import { login } from '../store/auth/actions';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector(state => state.auth);

    return (

        <Form
            layout='vertical'
            autoComplete="off"
            style={{
                maxWidth: '400px',
                margin: '200px auto',
                padding: '40px',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                borderRadius: '10px'
            }}
            onFinish={(values) => {
                dispatch(login(values, navigate));
            }}
        >
            <Typography.Title level={3} style={{ textAlign: 'center' }}>Login</Typography.Title>
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Link to='/register'>
                <Typography.Title level={5} style={{ marginBottom: "20px", color: '#ff4d4f', textAlign: 'right' }}>Register now</Typography.Title>
            </Link>
            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;