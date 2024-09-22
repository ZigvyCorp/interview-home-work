import { List, Space, Typography } from "antd";
import React, { Fragment } from "react";

import useAddComment from "../react-queries/useAddComment";
import useCommentsByPost from "../react-queries/useCommentsByPost";
import Comment from "./Comment";

const { Text } = Typography;

type Props = {
  postId?: number;
};

const ListCommentsByPost = (props: Props) => {
  const { postId } = props;
  const [isReplyOpen, setIsReplyOpen] = React.useState(false);
  const { data: comments } = useCommentsByPost({ postId });
  const { mutate: addComment } = useAddComment();

  const handleToggleReply = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  const handleAddComment = () => {
    addComment({
      userId: 11,
      postId,
      body: "Zigvy Hello World",
      name: "Zigvy Tester",
      id: undefined,
    });
  };

  return (
    <Fragment>
      <Space
        size={[20, 0]}
        direction="horizontal"
        className="cursor-pointer"
        onClick={handleToggleReply}
      >
        <Text type="secondary" className="font-medium underline">
          {comments?.length ?? 0} replies
        </Text>
      </Space>
      {isReplyOpen ? (
        <Fragment>
          <div className="mt-3 pt-3 border-top-line">
            <List
              itemLayout="vertical"
              dataSource={comments}
              renderItem={(comment) => <Comment comment={comment} />}
            />
          </div>
          <p
            className="cursor-pointer underline text-blue text-center"
            onClick={handleAddComment}
          >
            Add Comment
          </p>
        </Fragment>
      ) : (
        <div className="pt-5" />
      )}
    </Fragment>
  );
};

export default ListCommentsByPost;
