import { TagMention } from "@/components/tag-mention";
import { Post } from "@/models/post";
import { Button, Form, Input, Modal, Skeleton } from "antd";
import React, { useState } from "react";
import { Prompt, useHistory } from "react-router";

interface Props {
  onSubmit: (value: any) => any;
  submitting?: boolean;
  error?: string;
  post?: Post;
  loading?: boolean;
}

const { TextArea } = Input;

export const PostForm: React.FC<Props> = (props) => {
  const [navigationPromptShown, setNavigationPromptShown] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [navigationConfirmed, setNavigationConfirmed] = useState(false);
  const history = useHistory();

  const confirmNavigation = (location: any) => {
    setNavigationConfirmed(true);
    history.push(location.pathname);
  };

  const handleBlockedNavigation = (nextLocation: any) => {
    if (dirty && !navigationConfirmed && !navigationPromptShown) {
      Modal.confirm({
        maskClosable: false,
        content:
          "You haven't save your changes, your data will be lost. Are you sure want to leave?",
        okText: "Leave",
        okButtonProps: {
          danger: true,
        },
        onOk: () => confirmNavigation(nextLocation),
        onCancel: () => setNavigationPromptShown(false),
      });
      setNavigationPromptShown(true);
      return false;
    }
    return true;
  };

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
    setDirty(false);
  };
  return (
    <React.Fragment>
      <Prompt when={dirty} message={handleBlockedNavigation} />
      <Form
        name="post"
        onFinish={prepareSubmit}
        layout="vertical"
        onValuesChange={() => {
          setDirty(true);
        }}
      >
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
    </React.Fragment>
  );
};
