import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useSelector } from "react-redux";
import { selectState } from "../../redux/store.ts";
import { IBlog } from "../../utils/type.ts";
import { postApi } from "../../utils/fetch.ts";
import { apiRoutes } from "../../utils/apiRoutes.ts";
type createBlogProps = {
  onSuccess: (data: IBlog) => void;
};
const CreateBlog: React.FC<createBlogProps> = ({ onSuccess }) => {
  const { authReducer } = useSelector(selectState);
  const [form] = Form.useForm();
  async function postBlog(value: Partial<IBlog>) {
    try {
      const res = await postApi(apiRoutes.blog, {
        ...value,
        author: authReducer.user._id,
      });
      if (res.code === 200) {
        form.resetFields();
        onSuccess({ ...res.newBlog, author: authReducer.user.fullName });
      }
    } catch (e) {
      alert(e);
    }
  }
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={(v) => {
        postBlog(v);
      }}
    >
      <Form.Item
        name={"title"}
        label="Title"
        rules={[
          { required: true, message: "Title is required" },
          { min: 6, message: "Title required at least 6 character" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"content"}
        label="Content"
        rules={[
          { required: true, message: "Content is required" },
          { min: 500, message: "Content required at least 500 character" },
        ]}
      >
        <TextArea />
      </Form.Item>
      <Form.Item>
        <Button type={"primary"} htmlType={"submit"} style={{ width: "100%" }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateBlog;
