'use client';

import { Button, Form, Input } from 'antd';
import { ContentFormStyled, FormStyled, emailValidator } from '../login/page';
import Link from 'next/link';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { register } from '@/redux/features/auth-slice';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type FieldType = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  name: string;
};

export const RegisterLinkStyled = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 10px;
`;

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export default function Register() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth).user;
  const router = useRouter();
  const [form] = Form.useForm();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  const onFinish = (values: any) => {
    dispatch(register(values));
  };

  const validateConfirmPassword = async (_: any, value: string) => {
    const password = form.getFieldValue('password');
    if (value && password && value !== password) {
      throw new Error('The two passwords that you entered do not match!');
    }
  };

  return (
    <ContentFormStyled>
      <h2>Register</h2>
      <FormStyled
        form={form}
        layout='vertical'
        name='basic'
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item<FieldType>
          label='Name'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

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

        <Form.Item<FieldType>
          label='Confirm Password'
          name='confirmPassword'
          rules={[
            { required: true, message: 'Please input your confirm password!' },
            { validator: validateConfirmPassword },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <RegisterLinkStyled>
          Does you have account? <Link href='/login'>Login</Link>
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
