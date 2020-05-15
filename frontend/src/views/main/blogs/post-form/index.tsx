import { TagMention } from "@/components/tag-mention";
import { Button, Form, Input } from "antd";
import React from "react";

interface Props {
  onSubmit: (value: any) => any;
  submitting?: boolean;
  error?: string;
}

const { TextArea } = Input;

export const PostForm: React.FC<Props> = (props) => {
  return (
    <Form name="post" onFinish={props.onSubmit} layout="vertical">
      <Form.Item
        name="title"
        label="Title"
        required
        rules={[{ required: true, message: "Please input post title!" }]}
      >
        <Input placeholder="Type your post title" />
      </Form.Item>

      <Form.Item
        name="content"
        label="Content"
        required
        rules={[{ required: true, message: "Please input post content!" }]}
      >
        <TextArea rows={5} placeholder="Type your post content" />
      </Form.Item>

      <Form.Item name="tags" label="Tags">
        <TagMention />
      </Form.Item>

      <p style={{ color: "red" }}>{props.error}</p>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={props.submitting}>
          Post
        </Button>
      </Form.Item>
    </Form>
  );
};
