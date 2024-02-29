import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearError, loginStart } from "../../redux/slices/authSlice";
import { useEffect } from "react";
const LoginForm = () => {
  const { isLoading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(loginStart(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    dispatch(clearError());
  }, []);
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <div className="p-[15px]">
          Do you have an account yet?{" "}
          <Link className="text-blue-500" to={"/register"}>
            Create an account
          </Link>
        </div>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            loading={isLoading}
            className="bg-blue-600"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
