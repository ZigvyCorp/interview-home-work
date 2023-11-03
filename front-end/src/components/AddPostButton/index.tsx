import React from "react";

import {
  FloatButton,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { FieldData } from "../../types";
import { createPostRequest } from "../../actions/posts";
import { IPostService } from "../../types/posts";
import PostAddEdit from "../PostAddEdit";

function AddPostButton() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [post, setPost] = React.useState<FieldData[]>([
    {
      name: ["title"],
      value: "",
    },
    {
      name: ["content"],
      value: "",
    },
    {
      name: ["tags"],
      value: "",
    },
  ]);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    const data = {
      title: post[0].value,
      content: post[1].value,
      tags: post[2].value,
      owner: "654228b41fcbaaa3b51eee53",
    };

    const parsedData = JSON.parse(JSON.stringify(data)) as IPostService;

    dispatch(createPostRequest(parsedData));

    setPost([
      {
        name: ["title"],
        value: "",
      },
      {
        name: ["content"],
        value: "",
      },
      {
        name: ["tags"],
        value: "",
      },
    ]);

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);

    setPost([
      {
        name: ["title"],
        value: "",
      },
      {
        name: ["content"],
        value: "",
      },
      {
        name: ["tags"],
        value: "",
      },
    ]);
  };
  return (
    <>
      <PostAddEdit
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        fields={post}
        onChange={(newFields) => {
          setPost(newFields);
        }}
      />
      <FloatButton onClick={showModal} icon={<PlusOutlined />} />
    </>
  );
}

export default AddPostButton;
