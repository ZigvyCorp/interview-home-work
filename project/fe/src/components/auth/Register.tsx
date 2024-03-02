import { Button, Form, Input } from "antd";
import { IUser } from "../../utils/type.ts";
type registerProps = {
  onRegister: (data: IUser) => void;
};
const Register = ({ onRegister }: registerProps) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} layout="vertical" onFinish={onRegister}>
      <Form.Item name={"email"} label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name={"fullName"}
        label="Full Name"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={"password"}
        label="Password"
        rules={[
          { required: true },
          { min: 6, message: "Password must have at least 6 character" },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
