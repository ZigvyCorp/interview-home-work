import { Button } from "antd";
import React from "react";
import PostAddEdit from "../PostAddEdit";
import { FieldData } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { IPost, IPostService } from "../../types/posts";
import { editPostRequest } from "../../actions/posts";
import { getPostsPendingSelector } from "../../store/posts/selectors";
import { EditOutlined } from "@ant-design/icons";

function EditPostButton({
  _id,
  title,
  owner,
  createdAt,
  tags,
  content,
}: IPost) {
  const dispatch = useDispatch();
  const pending = useSelector(getPostsPendingSelector);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [post, setPost] = React.useState<FieldData[]>([
    {
      name: ["title"],
      value: title,
    },
    {
      name: ["content"],
      value: content,
    },
    {
      name: ["tags"],
      value: tags.join(","),
    },
  ]);

  const handleOk = () => {
    const data = {
      title: post[0].value,
      content: post[1].value,
      tags: post[2].value,
      owner: "654228b41fcbaaa3b51eee53",
    };

    const parsedData = JSON.parse(JSON.stringify(data)) as IPostService;

    dispatch(editPostRequest(parsedData, _id));

    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);

    setPost([
      {
        name: ["title"],
        value: title,
      },
      {
        name: ["content"],
        value: content,
      },
      {
        name: ["tags"],
        value: tags.join(","),
      },
    ]);
  };

  return (
    <>
      <Button
        disabled={pending}
        onClick={() => setIsModalOpen(true)}
        icon={<EditOutlined />}
      >
        Edit
      </Button>

      <PostAddEdit
        isEdit
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        fields={post}
        onChange={(newFields) => {
          setPost(newFields);
        }}
      />
    </>
  );
}

export default EditPostButton;
