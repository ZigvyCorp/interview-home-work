import { useAuth } from "@/HOCs/auth-provider";
import { useServices } from "@/services";
import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { from, Subscription } from "rxjs";

export const LoginForm = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const { authService } = useServices();
  const { isAuthenticated, fetchMyProfile, loading } = useAuth();
  const history = useHistory();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated === true) {
        history.push("/");
      }
    }
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [loading]);

  const handleSubmit = (value: any) => {
    setSending(true);
    from(authService().login(value)).subscribe(
      () => {
        setSending(false);
        fetchMyProfile();
        history.push("/");
      },
      (err) => {
        if (err.response?.data?.message) {
          setError(err.response.data.message);
        }
        setSending(false);
      }
    );
  };

  return (
    <Form name="login" onFinish={handleSubmit} layout="vertical">
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
