import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Button, Form, Input } from 'antd';
import { COLORS } from '../../theme/colors.js';
import { Link } from 'react-router-dom';
import { callApi } from '../../services/auth/apis.js';
import { API_URL_APP } from '../../apis/index.js';
import { AuthContext } from '../../context/AuthContext.jsx';
import Toast from '../../components/Toast/index.jsx';
import { ListMessageSuccess } from '../../utils/index.js';
import { TOAST_STATUS } from '../../components/Toast/toast-message.js';

const LoginContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LoginContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
`

const LoginTitle = styled.h3`
    color: ${COLORS.GRAY600};
`
export const AuthFooter = styled.div`
    display: flex;
    align-items: center;

    p {
        margin-right: 5px;
    }
`
const LoginPage = () => {
    const { login } = useContext(AuthContext)

    const onFinish = async (values) => {
        await callApi({
            method: 'post',
            url: API_URL_APP.auth.login,
            data: values,
            onSuccess: ({ accessToken }) => {
                Toast({
                    title: ListMessageSuccess.LOGIN_SUCCESS,
                    type: TOAST_STATUS.success
                })
                login(accessToken)
            }
        })
    };

    return (
        <LoginContainer>
            <LoginContent>
                <LoginTitle>
                    Login
                </LoginTitle>
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
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
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
                    <p>You don't have an account?</p> <Link to={'/auth/register'}>Register</Link>
                </AuthFooter>
            </LoginContent>
        </LoginContainer>
    )
};

export default LoginPage;
