import React, { useState } from "react";
import Comment from "./Comment";
import { Typography } from "antd";

const Comments = ({ comments }) => {
  const { Title } = Typography;
  const [isShowOption, setIsShowOption] = useState(false);

  return (
    <div id="profile" onClick={() => setIsShowOption((prev) => !prev)}>
      <Title level={4}>Comments</Title>
      {isShowOption && (
        <>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              content={comment.content}
              createdAt={comment.createdAt}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Comments;
