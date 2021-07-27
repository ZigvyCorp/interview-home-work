import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, DatePicker, Form, FormInstance, Input, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { post } from "../../apis";
import { setLogin } from "../../store/actions/user.action";
import "./Login.scss";

interface ILogin {
  username: string;
  password: string;
  remember: boolean;
}
interface IRegister {
  nameReg: string;
  usernameReg: string;
  passwordReg: string;
  confirmPasswordReg: string;
  dobReg: Date;
}
const Login = () => {
  const [statusForm, setStatusForm] = useState(true);

  const formRef = React.createRef<FormInstance<IRegister>>();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogin = async (values: ILogin) => {
    try {
      const { data } = await post("/users/login", values);
      history.push("/");
      dispatch(setLogin());
      localStorage.setItem("firstLogin", "true");
      alert(data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const handleRegister = async (values: IRegister) => {
    const formData = {
      name: values.nameReg,
      username: values.usernameReg,
      password: values.passwordReg,
      dob: moment(values.dobReg).format("DD/MM/YYYY"),
    };
    try {
      const { data } = await post("/users/register", formData);
      alert(data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  const validatePassword = (rule: any, value: string, callback: any) => {
    if (value && value !== formRef.current?.getFieldValue("passwordReg")) {
      callback("Password not matching!");
    } else {
      callback();
    }
  };

  if (statusForm) {
    return (
      <div className="login">
        <Typography.Paragraph strong type="success" style={{ textAlign: "center" }}>
          Login Form
        </Typography.Paragraph>
        <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={handleLogin}>
          <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or{" "}
            <Button htmlType="button" type="link" onClick={() => setStatusForm((prev) => !prev)}>
              register now!
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  } else {
    return (
      <div className="login">
        <Typography.Paragraph strong type="success" style={{ textAlign: "center" }}>
          Register Form
        </Typography.Paragraph>
        <Form ref={formRef} name="register" className="register-form" onFinish={handleRegister}>
          <Form.Item name="nameReg" rules={[{ required: true, message: "Please input your name!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
          </Form.Item>
          <Form.Item name="usernameReg" rules={[{ required: true, message: "Please input your Username!" }]}>
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="passwordReg" rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPasswordReg"
            rules={[
              { required: true, message: "Please input your confirm password!" },
              { validator: validatePassword },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item name="dobReg" rules={[{ required: true, message: "Please input your day of birth!" }]}>
            <DatePicker size="middle" format="DD/MM/YYYY" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Register
            </Button>
            Or{" "}
            <Button htmlType="button" type="link" onClick={() => setStatusForm((prev) => !prev)}>
              Login now!
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

export default Login;
