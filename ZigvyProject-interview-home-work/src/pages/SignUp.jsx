import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";
import {
  fetchUserStart,

} from "../redux/user/userSlice.js";

import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title } = Typography;

export default function SignUp() {
  const dispatch = useDispatch();
  const { userData, error, accessToken } = useSelector((state) => state.users);

  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values) => {
    dispatch(fetchUserStart({...values, name: values.email.split("@")[0], password: values.password})); // Dispatch action để fetch posts từ API khi component được mount

    console.log("Received values of form: ", values);
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
    },
    forgotPassword: {
      float: "right",
    },
    header: {
      marginBottom: token.marginXL,
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    text: {
      color: token.colorTextSecondary,
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.464294" width="24" height="24" rx="4.8" fill="#1890FF" />
            <path
              d="M14.8643 3.6001H20.8643V9.6001H14.8643V3.6001Z"
              fill="white"
            />
            <path
              d="M10.0643 9.6001H14.8643V14.4001H10.0643V9.6001Z"
              fill="white"
            />
            <path
              d="M4.06427 13.2001H11.2643V20.4001H4.06427V13.2001Z"
              fill="white"
            />
          </svg>

          <Title style={styles.title}>Sign Up</Title>
          <Text style={styles.text}>Become a member of my website</Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
          scrollToFirstError
        >
          <Form.Item
            name="username"
            rules={[
              {
                type: "text",
                required: true,
                message: "Please input your username!",
              },
              {
                min: 6, // Độ dài ít nhất là 6 (lớn hơn 5)
                message: "Username must be at least 6 characters long!",
              },
              {
                max: 20, // Độ dài tối đa là 20
                message: "Username cannot be longer than 20 characters!",
              },
              {
                pattern: /^[a-zA-Z0-9]+$/, // Chỉ chấp nhận ký tự chữ cái và số
                message: "Username must contain only letters and numbers!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(
                      new Error("Please input your username!")
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            hasFeedback
          >
            <Input prefix={<UserOutlined />} placeholder="username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    !value ||
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      value
                    )
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Please input a valid email address!")
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                validator(_, value) {
                  if (!value) {
                    return Promise.reject(
                      new Error("Please input your Password!")
                    );
                  }
                  if (value.length < 8) {
                    return Promise.reject(
                      new Error("Password must be at least 8 characters long!")
                    );
                  }
                  if (!/^(?=.*[A-Z])+(?=.*\d)/.test(value)) {
                    return Promise.reject(
                      new Error(
                        "Password must contain at least 1 uppercase letter and 1 number character!"
                      )
                    );
                  }
                  return Promise.resolve();
                },
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Confirm password"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a style={styles.forgotPassword} href="">
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button
              block="true"
              type="primary"
              className="bg-blue-600"
              htmlType="submit"
            >
              Log in
            </Button>
            <div style={styles.footer}>
              <Text style={styles.text}>Already have account?</Text>{" "}
              {/* <Link href="">Sign up now</Link> */}
              <button onClick={handleLoginClick}>Login now</button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
