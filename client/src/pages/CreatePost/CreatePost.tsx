import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../store/actions/post.action";
import "./CreatePost.scss";

const CreatePost = () => {
  const dispatch = useDispatch();
  const handleFinish = async (values: any) => {
    try {
      console.log(values);

      dispatch(createPost(values));
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="create-post">
      <Form name="create-post" className="create-post-form" onFinish={handleFinish}>
        <Form.Item name="title" rules={[{ required: true, message: "Please input title of post!" }]}>
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item name="content" rules={[{ required: true, message: "Please input content of post!" }]}>
          <TextArea rows={4} placeholder="Content" />
        </Form.Item>
        <Form.Item name="tags">
          <Select mode="tags" style={{ width: "100%" }} placeholder="Tags Mode"></Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="create-post-form-button">
            Create Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePost;
