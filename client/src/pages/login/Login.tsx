import { Button, Form, Input } from "antd";
import React from "react";
import { IAuth, ILogin } from "../../types/auth";
import { useMutation } from "@tanstack/react-query";
import authApi from "../../api/auth.api";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const loginMutate = useMutation({
    mutationFn: (values: ILogin) => {
      return authApi.login(values);
    },
    onError: (error) => {
      console.log("🚀 ~ createComment ~ error", error);
    },
    onSuccess: (data: IAuth) => {
      form.resetFields();
      localStorage.setItem("accessToken", data.access_token);
      navigate("/");
    },
  });

  const onSubmitLogin = (values: ILogin) => {
    loginMutate.mutate(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Form
        name="create comment"
        layout="vertical"
        form={form}
        onFinish={onSubmitLogin}
        className="lg:w-full lg:max-w-md"
        size="large"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input placeholder="Please input your username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            {
              min: 6,
              message: "must be at least 6 characters long",
            },
          ]}
        >
          <Input.Password placeholder="Please input your password!" />
        </Form.Item>
        <div className="flex justify-center">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Login;
