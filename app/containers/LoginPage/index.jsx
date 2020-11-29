import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import UserActions, { UserSelectors, UserTypes } from '../App/reducer';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function LoginPage({ userPayload }) {
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(UserActions.loginRequest(values));
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  if (userPayload) return <Redirect to="/" />;
  return (
    <article>
      <div style={{ paddingTop: 60 }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/signup">{'Need create a account? Sign Up'}</Link>
          </Form.Item>
        </Form>
      </div>
    </article>
  );
}

const mapStateToProps = state => ({
  userPayload: UserSelectors.selectPayload(state.user),
});

export default connect(mapStateToProps)(LoginPage);
