'use client';

import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';
import Link from 'next/link';
import { RegisterLinkStyled } from '../register/page';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { login } from '@/redux/features/auth-slice';
import { useRouter } from 'next/navigation';

type FieldType = {
  email: string;
  password: string;
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export const emailValidator = (
  _: any,
  value: string,
  callback: (error?: string) => void
) => {
  if (!value || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    callback();
  } else {
    callback('Please enter a valid email address!');
  }
};

export const FormStyled = styled(Form)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const ContentFormStyled = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  h2 {
    text-align: center;
    font-size: 3rem;
    padding: 20px;
  }
`;

export default function Login() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth).user;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  const onFinish = (values: any) => {
    dispatch(login(values));
  };

  return (
    <ContentFormStyled>
      <h2>Login</h2>
      <FormStyled
        layout='vertical'
        name='basic'
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='Email'
          name='email'
          rules={[
            { required: true, message: 'Please input your email!' },
            { validator: emailValidator },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <RegisterLinkStyled>
          Doesn't you have account? <Link href='/register'>Register</Link>
        </RegisterLinkStyled>

        <Form.Item
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </FormStyled>
    </ContentFormStyled>
  );
}
