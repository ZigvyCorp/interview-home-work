import { useServices } from "@/services";
import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { from, Subscription } from "rxjs";

export const SignUpForm = () => {
  const history = useHistory();
  const { authService } = useServices();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    return () => {
      // unsubscribe all subscriptions on component unmount
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const handleSubmit = (value: any) => {
    setSending(true);
    subscriptions.push(
      from(authService().signUp(value)).subscribe(
        () => {
          setSending(false);
          history.push("/auth/login");
        },
        (err) => {
          if (err.response?.data?.message) {
            setError(err.response.data.message);
          }
          setSending(false);
        }
      )
    );
  };
  return (
    <Form name="signup" onFinish={handleSubmit} layout="vertical">
      <Row gutter={6}>
        <Col span={24} md={12}>
          <Form.Item
            label="First name"
            name="firstName"
            required
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input autoComplete="off" />
          </Form.Item>
        </Col>

        <Col span={24} md={12}>
          <Form.Item
            label="Last name"
            name="lastName"
            required
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input autoComplete="off" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input autoComplete="off" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password autoComplete="off" />
      </Form.Item>

      <p style={{ color: "red" }}>{error}</p>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={sending}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
