import { Button, Form, Input } from "antd";
import React from "react";
import { User } from "../models/UserModel";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/reducer/userReducer";

const Login = () => {
  const [form] = Form.useForm<User>();

  const dispatch = useAppDispatch();

  const onSubmit = (data: User) => {
    dispatch(login(data));
  };
  return (
    <div className="bg-blue-400 w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="bg-white p-4 rounded h-auto">
        <h4 className="text-center text-black font-bold text-2xl mb-4">
          Login
        </h4>
        <Form form={form} onFinish={onSubmit}>
          <Form.Item
            label="Username"
            name="username"
            labelAlign="left"
            rules={[{ required: true, message: "Please input your username!" }]}
            hasFeedback
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            labelAlign="left"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <div className="text-center">
            <Button htmlType="submit">Login</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
