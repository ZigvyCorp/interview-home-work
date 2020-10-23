import { Card } from "antd";
import Text from "antd/lib/typography/Text";
import React from "react";
import { Link } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

const SignUp = () => {
  return (
    <Card
      title="Sign up"
      extra={
        <Text>
          Already have an account? <Link to="/auth">Login</Link>
        </Text>
      }
    >
      <SignUpForm />
    </Card>
  );
};

export default SignUp;
