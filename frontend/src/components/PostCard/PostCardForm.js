
import React from 'react';
import { Form, Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createComment } from '../../store/comment/action';

const PostCardForm = ({ postId }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        dispatch(createComment({ content: values['content'], postId }));
        form.resetFields();
    };

    return (
        <Form onFinish={handleSubmit} form={form}>
            <Form.Item
                name="content"
                rules={[{ required: true, message: 'Please input your comment!' }]}
            >
                <Input.TextArea rows={3} />
            </Form.Item>
            <Form.Item>
                <Button
                    type='primary'
                    htmlType='submit'
                    icon={<SendOutlined />}
                    style={{ float: 'right' }}
                // loading
                >
                    Comment
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PostCardForm;