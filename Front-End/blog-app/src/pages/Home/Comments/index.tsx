import { Space } from "antd";
import Comment from "./Comment";
import CommentForm from "./CommentForm";
import dataComment from "../../../data/comment..json";

function Comments() {
  return (
    <Space direction="vertical" size={[0, 16]} style={{ display: "flex" }}>
      <CommentForm />
      {dataComment.map((item: any) => (
        <Comment key={item.id} comment={item} />
      ))}
    </Space>
  );
}

export default Comments;
