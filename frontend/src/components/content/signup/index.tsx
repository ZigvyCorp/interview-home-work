import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useMutation } from "@tanstack/react-query";
import { createData } from "../../../apis/callApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
};

const Signup = () => {
  const [user, setUser] = useState<any>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: () => createData("/signup", user),
  });
  if (mutation.isSuccess) {
    navigate("/login");
  }
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    setUser(values);
    if (user?.username && user?.password) {
      mutation.mutate(user);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="auth-wrapper">
      <h1 className="pt-4">Signup</h1>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            onChange={(e) =>
              setUser((prev: any) => ({
                username: e.target.value,
                password: prev?.password,
              }))
            }
          />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            onChange={(e) =>
              setUser((prev: any) => ({
                username: prev?.username,
                password: e.target.value,
              }))
            }
          />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="flex justify-center">
        <p>Already have an account?&nbsp;</p>
        <p className="text-primary" onClick={() => navigate("/signup")}>
          Log in now !
        </p>
      </div>
    </div>
  );
};
export default Signup;
