'use client';

import React, { useState } from 'react';
import Logo from '../Logo';
import UserInformation from '../UserInformation';
import SearchBox from '../SearchBox';
import { Modal, Form, Input, Button, Select } from 'antd';

import * as Styled from './styled';

interface HeaderProps {
  className?: string;
}

type FieldType = {
  title: string;
  content: string;
};

import type { SelectProps } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { createBlog } from '@/redux/features/blog-slice';

const options: SelectProps['options'] = [];

for (let i = 10; i < 36; i++) {
  options.push({
    value: i.toString(36) + i,
    label: i.toString(36) + i,
  });
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const Header = ({ className = '' }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth).user;

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    form.submit();

    setConfirmLoading(true);
    if (form.getFieldsError.length > 0) {
      setConfirmLoading(false);
      return;
    }
  };

  const handleChange = (value: string[]) => {
    setTags(value);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onFinish = async (values: FieldType) => {
    if (user && user.id) {
      dispatch(
        createBlog({
          ...values,
          owner: user.id,
          tags,
        })
      );
      setOpen(false);
    }

    setConfirmLoading(false);
  };

  return (
    <>
      <Styled.HeaderContainer className={className}>
        <Logo />
        <SearchBox />
        <UserInformation handleOpenCreateBlogModal={showModal} />
      </Styled.HeaderContainer>
      <Modal
        title='Create a blog'
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          layout='vertical'
          name='basic'
          initialValues={{ remember: true }}
          onFinishFailed={onFinishFailed}
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Title'
            name='title'
            rules={[{ required: true, message: 'Please input your title!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Content'
            name='content'
            rules={[{ required: true, message: 'Please input your content!' }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Select
            mode='tags'
            style={{ width: '100%' }}
            placeholder='Tags Mode'
            onChange={handleChange}
            options={options}
          />
        </Form>
      </Modal>
    </>
  );
};

export default Header;
