import { useMutation } from "@tanstack/react-query";
import { Button, Input, Space } from "antd";
import { useState } from "react";
import { createData } from "../../../apis/callApi";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from "../../../utils/cookies";
const CreateComment = ({ postIdProp }: any) => {
  const navigate = useNavigate();
  const { postId } = useParams<{ postId: string }>();
  const userInfo = getCookie("userInfo");
  const [comment, setComment] = useState<any>({
    owner: userInfo?._id ? userInfo?._id : "",
    post: postIdProp,
    content: "",
  });
  const mutation = useMutation({
    mutationFn: () => createData("/comments", comment),
  });
  if (mutation.isSuccess) {
    if (!postId) {
      navigate("/");
    } else {
      window.location.reload();
    }
  }
  const handleAddComment = (e: any) => {
    setComment((prev: any) => ({
      owner: prev.owner,
      post: prev.post,
      content: e.target.value,
    }));
  };
  const sendComment = () => {
    mutation.mutate(comment);
  };
  return (
    <Space.Compact style={{ width: "100%" }}>
      <Input placeholder="Add new comment..." onChange={handleAddComment} />
      <Button type="primary" onClick={sendComment}>
        Send
      </Button>
    </Space.Compact>
  );
};
export default CreateComment;
