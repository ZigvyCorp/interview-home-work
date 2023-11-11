import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button, DatePicker, Typography } from 'antd';

import { register } from '../store/auth/actions';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector(state => state.auth);

  return (
    <Form
      layout='vertical'
      autoComplete="off"
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '40px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        borderRadius: '10px'
      }}
      onFinish={(values) => {
        let { cf_password, dob, ...other } = values;
        dob = dob.format('DD-MM-YYYY');
        const formData = { ...other, dob };
        dispatch(register(formData, navigate));
      }}
    >
      <Typography.Title level={3} style={{ textAlign: 'center' }}>Register</Typography.Title>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
          { min: 6, message: 'Username must be minimum 6 characters.' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
          { min: 6, message: 'Username must be minimum 6 characters.' },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="cf_password"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Date of birth"
        name="dob"
        rules={[
          {
            required: true,
            message: 'Please select date of birth!',
          },
        ]}
      >
        <DatePicker format={'DD-MM-YYYY'} style={{ width: '100%' }} />
      </Form.Item>

      <Link to='/login'>
        <Typography.Title level={5} style={{ marginBottom: "20px", color: '#ff4d4f', textAlign: 'right' }}>Login now</Typography.Title>
      </Link>

      <Form.Item>
        <Button type="primary" htmlType="submit" block loading={isLoading}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;