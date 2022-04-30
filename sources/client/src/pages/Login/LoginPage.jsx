import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { loginThunk } from "../../services/auth/auth.thunk";
import Logo from "../../assets/images/logo.png";

import "./LoginPage.scss";

function LoginPage() {
    const dispatch = useDispatch();
    const handleOnSubmit = (values) => {
        dispatch(loginThunk(values));
    };
    return (
        <div className="login-page">
            <div className="login-page__header">
                <img
                    src={Logo}
                    alt="Logo"
                    className="login-page__header-logo"
                />
            </div>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={handleOnSubmit}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <a className="login-form-forgot" href="#a">
                        Forgot password
                    </a>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                    >
                        Log in
                    </Button>
                    Or <a href="">Register now!</a>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginPage;
