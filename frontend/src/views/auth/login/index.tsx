import { Card } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";

const Login: React.FC = () => {
  return (
    <Card
      title="Login"
      extra={
        <Text>
          Do not have an account? <Link to="/auth/signup">Sign up</Link>
        </Text>
      }
    >
      <LoginForm />
    </Card>
  );
};

export default Login;
