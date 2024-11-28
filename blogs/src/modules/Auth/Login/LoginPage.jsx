import { useDispatch } from "react-redux";
import { loginRequest } from "@redux/actions/authActions";
import { useRouter } from "next/router";
import { Input, Button, Form } from "antd";

function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const credentials = {
    username: "",
    password: "",
  };

  const handleLogin = (values) => {
    dispatch(loginRequest(values));
    router.push("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <Form name="login" onFinish={handleLogin} initialValues={credentials}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginPage;
