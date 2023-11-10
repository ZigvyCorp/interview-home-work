import React from "react";
import {
  Button,
  Flex,
  Form,
  FormInstance,
  Input,
  Modal,
  Select,
  SelectProps,
  Space,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  hiddenModal,
  selectIsShowModal,
} from "../../../redux/slices/modalSlice";
import { createPostRq } from "../../../redux/actions/postAction";

const { TextArea } = Input;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ModalPost: React.FC = () => {
  const dispatch = useDispatch();
  const isShowModal: boolean = useSelector(selectIsShowModal);

  const formRef = React.useRef<FormInstance>(null);

  const options: SelectProps["options"] = [
    {
      label: "Blog",
      value: "Blog",
      desc: "Blog",
    },
    {
      label: "Content",
      value: "Content",
      desc: "Content",
    },
    {
      label: "IT",
      value: "IT",
      desc: "IT",
    },
    {
      label: "Q&A",
      value: "Q&A",
      desc: "Q&A",
    },
    {
      label: "Fun",
      value: "Fun",
      desc: "Fun",
    },
  ];

  const handleOk = () => {
    dispatch(hiddenModal());
  };

  const handleCancel = () => {
    dispatch(hiddenModal());
  };

  const onFinish = (values: any) => {
    console.log(values);
    dispatch(createPostRq(values));
    dispatch(hiddenModal());
  };

  const onReset = () => {
    formRef.current?.resetFields();
  };

  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <Modal
        title="Create New Post"
        open={isShowModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={() => <></>}
      >
        <Form
          {...layout}
          ref={formRef}
          name="control-ref"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item name="tags" label="Tags" rules={[{ required: true }]}>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select one country"
              defaultValue={["Blog"]}
              onChange={handleChange}
              optionLabelProp="label"
              options={options}
              optionRender={(option) => (
                <Space>
                  <span role="img" aria-label={option.data.label}>
                    {option.data.emoji}
                  </span>
                  {option.data.desc}
                </Space>
              )}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button
              htmlType="button"
              onClick={onReset}
              style={{ marginLeft: "14px" }}
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalPost;
