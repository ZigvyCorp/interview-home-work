import { Button, Form } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";

interface Props {
  onChange: (event: any) => void;
  onSubmit: (event: any) => void;
  submitting: boolean;
  value: string;
}
const Editor: React.FC<Props> = ({ onChange, onSubmit, submitting, value }) => {
  return (
    <div style={{ width: "100%" }}>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
};

export default Editor;
