import { Row, Col, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import LayoutDefault from "../../../components/LayoutDefault";

function Login() {
  return (
    <LayoutDefault>
      <Row justify="center">
        <Col span={8}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </LayoutDefault>
  );
}

export default Login;
