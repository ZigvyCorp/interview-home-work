// src/pages/Register.js
import { Form, Input, Button, message, Row, Col, Card } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions.jsx";
import "../components/Login/Login.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const usenavigate = useNavigate();
  const [form] = Form.useForm();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    const { username, password } = values;
    console.log(username, password);
    const userData = {
      username: username,
      password: password,
    };
    dispatch(register(username, password))
      .then((response) => {
        if (response.status === 201) {
          message.success("Registration succeed!");
          usenavigate("/login");
        }
      })
      .catch((error) => {
        console.log("register failed11: ", error.message);
        message.success("Registration failed!");
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
            <Form
              form={form}
              name="register"
              onFinish={onFinish}
              className="register"
              layout="vertical"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Username is required" }]}
                style={{ marginBottom: 15 }}
              >
                <Input name="username" type="text" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                hasFeedback
                rules={[{ required: true, message: "Password is required" }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password name="password" />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                className="custom-label"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
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
                  <Button type="primary" htmlType="submit">
                    Register
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

export default Register;
