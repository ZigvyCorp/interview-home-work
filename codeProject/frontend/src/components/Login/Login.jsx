// src/pages/Login.js
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions";
import { Row, Col, Card, Button, Form, Input } from "antd";
import "./Login.css";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(login(username, password))
      .then(({ token, user }) => {
        // Lưu trữ token và người dùng vào localStorage hoặc Redux store
        localStorage.setItem("token", token);
        dispatch({ type: "SET_USER", payload: user });

        // Chuyển hướng người dùng vào trang home
        navigate("/");
      })
      .catch((error) => {
        // Handle login error
        console.error(error);
      });
    () => {};
  };

  return (
    <section className="app-section">
      <Row justify="center">
        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Card style={{ marginTop: 45 }}>
            <Col span={24} className="typo-grey typo-center">
              <h2>Login Form</h2>
            </Col>
            <Form layout="vertical">
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Username is required" }]}
                style={{ marginBottom: 15 }}
              >
                <Input
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Password is required" }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Item>

              <Row gutter={[8, 8]} style={{ marginTop: 15 }} justify="end">
                <Col
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  className="typo-right"
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Login;
