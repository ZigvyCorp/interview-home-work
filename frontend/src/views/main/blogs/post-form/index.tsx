import { Form, Input, Mentions } from "antd";
import React, { useEffect, useState } from "react";
import { Subscription } from "rxjs";

interface Props {
  onSubmit: (value: any) => any;
}

const { TextArea } = Input;
const { Option } = Mentions;

export const PostForm: React.FC<Props> = (props) => {
  const [tag, setTag] = useState("");
  const subscriptions: Subscription[] = [];
  useEffect(() => {}, [tag]);

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
        <Mentions
          placeholder="Type # to mention tags"
          prefix={["#"]}
          onSearch={setTag}
        >
          <Option key="0" value={tag}>
            Add tag {tag}
          </Option>
        </Mentions>
      </Form.Item>
    </Form>
  );
};
