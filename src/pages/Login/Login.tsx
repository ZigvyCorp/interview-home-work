import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import data from "../../../data/users.json";
import { json, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = (values: object) => {
    console.log("Received values of form: ", values);
    const user = data.find(
      (user) =>
        values.username === user.username && values.password === user.password
    );
    if (user) {
      navigate("/Home");
    }
    return;
  };

  return (
    <div className="body">
      <Form
        name="normal_login"
        className="login-form container "
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ marginRight: 10 }}
          >
            Log in
          </Button>
          Or{" "}
          <a href="" style={{ marginLeft: 10 }}>
            register now!
          </a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
