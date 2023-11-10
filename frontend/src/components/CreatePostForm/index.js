
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Modal, Form, Input, Tag, Space, Tooltip } from 'antd';
import { closeModal, createPost } from '../../store/post/actions';

const tagInputStyle = {
    width: 64,
    height: 22,
    marginInlineEnd: 8,
    verticalAlign: 'top',
};

const tagPlusStyle = {
    height: 22,
    borderStyle: 'dashed',
};

const CreatePostForm = () => {

    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const { isOpenModal } = useSelector(state => state.post);

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    const handleClose = (removedTag) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && !tags.includes(inputValue)) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
        console.log("newTags: ", tags);
    };

    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        const formData = { ...values, tags };
        dispatch(createPost(formData));
        setTags([]);
    };

    return (
        <Modal title="Create Post" open={isOpenModal} onOk={form.submit} onCancel={() => {
            dispatch(closeModal());
            form.resetFields();
            setTags([]);
        }} destroyOnClose>
            <Form form={form} layout='vertical' preserve={false} onFinish={handleSubmit}>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your title!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.TextArea rows={5} />
                </Form.Item>

                <Form.Item
                    label="Tags"
                >
                    <Space size={[0, 8]} wrap>
                        {tags.map((tag, index) => {

                            const isLongTag = tag.length > 20;

                            const tagElem = (
                                <Tag
                                    key={tag}
                                    closable
                                    style={{
                                        userSelect: 'none',
                                    }}
                                    onClose={() => handleClose(tag)}
                                >
                                    <span
                                        onDoubleClick={(e) => {
                                            if (index !== 0) {
                                                setEditInputIndex(index);
                                                setEditInputValue(tag);
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                    </span>
                                </Tag>
                            );
                            return isLongTag ? (
                                <Tooltip title={tag} key={tag}>
                                    {tagElem}
                                </Tooltip>
                            ) : (
                                tagElem
                            );
                        })}
                        {inputVisible ? (
                            <Input
                                ref={inputRef}
                                type="text"
                                size="small"
                                style={tagInputStyle}
                                value={inputValue}
                                onChange={handleInputChange}
                                onBlur={handleInputConfirm}
                                onPressEnter={handleInputConfirm}
                            />
                        ) : (
                            <Tag style={tagPlusStyle} icon={<PlusOutlined />} onClick={showInput}>
                                New Tag
                            </Tag>
                        )}
                    </Space>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreatePostForm;