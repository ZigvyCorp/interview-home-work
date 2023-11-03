import React from "react";
import { Modal, Form, Input } from "antd";
import { FieldData } from "../../types";
const { TextArea } = Input;

interface Props {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  fields: FieldData[];
  onChange: (fields: FieldData[]) => void;
  isEdit?: boolean;
}

function PostAddEdit({
  isModalOpen,
  handleOk,
  handleCancel,
  fields,
  onChange,
  isEdit,
}: Props) {
  const [form] = Form.useForm();

  return (
    <Modal
      title={isEdit ? "Edit your post" : "Create your post"}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        form={form}
        layout="vertical"
        fields={fields}
        onFieldsChange={(_, allFields) => {
          onChange(allFields);
        }}
      >
        <Form.Item
          required
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Title is required",
            },
          ]}
        >
          <Input placeholder="Enter your title" />
        </Form.Item>

        <Form.Item
          required
          label="Content"
          name="content"
          rules={[
            {
              required: true,
              message: "Content is required",
            },
          ]}
        >
          <TextArea rows={4} placeholder="Enter your content" />
        </Form.Item>

        <Form.Item
          required
          label="Tags"
          name="tags"
          tooltip="Only contain text, separate by comma"
          rules={[
            {
              required: true,
              message: "Tags is required",
            },
          ]}
        >
          <Input placeholder="Enter your tags" />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default PostAddEdit;
