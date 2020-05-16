import { TagMention } from "@/components/tag-mention";
import { Post } from "@/models/post";
import { Button, Form, Input, Skeleton } from "antd";
import React from "react";

interface Props {
  onSubmit: (value: any) => any;
  submitting?: boolean;
  error?: string;
  post?: Post;
  loading?: boolean;
}

const { TextArea } = Input;

export const PostForm: React.FC<Props> = (props) => {
  const prepareSubmit = (value: any) => {
    const tags =
      value.tags
        ?.split(" ")
        .filter((tag: string) => tag && tag.length)
        .map((tag: string) => {
          if (tag.startsWith("#")) {
            return tag.substring(1, tag.length).toLowerCase();
          }
          return tag.toLowerCase();
        }) || [];
    props.onSubmit({
      ...value,
      tags,
    });
  };
  return (
    <Form name="post" onFinish={prepareSubmit} layout="vertical">
      {props.loading ? (
        <Skeleton.Input active />
      ) : (
        <Form.Item
          name="title"
          label="Title"
          required
          rules={[{ required: true, message: "Please input post title!" }]}
          initialValue={props.post?.title}
        >
          <Input
            placeholder="Type your post title"
            readOnly={props.submitting}
          />
        </Form.Item>
      )}
      {props.loading ? (
        <Skeleton.Input active size="large" />
      ) : (
        <Form.Item
          name="content"
          label="Content"
          required
          rules={[{ required: true, message: "Please input post content!" }]}
          initialValue={props.post?.content}
        >
          <TextArea
            rows={5}
            placeholder="Type your post content"
            readOnly={props.submitting}
          />
        </Form.Item>
      )}
      {props.loading ? (
        <Skeleton.Input active />
      ) : (
        <Form.Item
          name="tags"
          label="Tags"
          initialValue={props.post?.tags.map((tag) => `#${tag}`).join(" ")}
        >
          <TagMention readOnly={props.submitting} />
        </Form.Item>
      )}

      <p style={{ color: "red" }}>{props.error}</p>

      <Form.Item>
        <Button type="primary" htmlType="submit" disabled={props.submitting}>
          Post
        </Button>
      </Form.Item>
    </Form>
  );
};
