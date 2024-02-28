import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Button, Form, Input } from 'antd';
import { COLORS } from '../../theme/colors.js';
import { Link, useNavigate } from 'react-router-dom';
import { callApi } from '../../services/auth/apis.js';
import { API_URL_APP } from '../../apis/index.js';
import { AuthContext } from '../../context/AuthContext.jsx';
import Toast from '../../components/Toast/index.jsx';
import { ListMessageSuccess } from '../../utils/index.js';
import { TOAST_STATUS } from '../../components/Toast/toast-message.js';

const RegisterContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const RegisterContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`

const RegisterTitle = styled.h3`
    color: ${COLORS.GRAY600};
`
export const AuthFooter = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-right: 5px;
    }
`
const RegisterPage = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()
    const onFinish = async (values) => {
        await callApi({
            method: 'post',
            url: API_URL_APP.auth.register,
            data: values,
            onSuccess: () => {
                Toast({
                    title: ListMessageSuccess.REGISTER_SUCCESS,
                    type: TOAST_STATUS.success
                })
                navigate('/auth/login')
            }
        })
    };

    return (
        <RegisterContainer>
            <RegisterContent>
                <RegisterTitle>
                    Register
                </RegisterTitle>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    style={{
                        width: '60%'
                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Username"
                        name="userName"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid Email!',
                            },
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Password didn\'t match!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item style={{
                        textAlign: 'center'
                    }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <AuthFooter>
                    <p>You have an account?</p> <Link to={'/auth/login'}>Login</Link>
                </AuthFooter>
            </RegisterContent>
        </RegisterContainer>
    )
};

export default RegisterPage;
