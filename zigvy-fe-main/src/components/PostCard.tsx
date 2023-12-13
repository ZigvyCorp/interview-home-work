import React, { memo, useState } from "react";
import { Avatar, Divider, Space, Tag, Tooltip, Typography } from "antd";
import IUser from "../interface/IUser";
import { Comment } from "@ant-design/compatible";
import { defaultAva } from "../res";
import { useQuery } from "react-query";
import CommentService from "../services/CommentService";
import { useNavigate } from "react-router-dom";

const { Text, Title, Paragraph } = Typography;

type PostCardProps = {
  post: IPost;
  user: IUser;
};

function PostCard(props: PostCardProps) {
  const { post, user } = props;
  const [showComment, setShowComment] = useState(false);
  const navigate = useNavigate();

  const fetchCommentsQuery = useQuery({
    queryKey: ["comment", post.id],
    queryFn: () => CommentService.fetchCommentFromPost(post.id),
    onSuccess: (_) => {},
  });

  return (
    <div className="flex flex-col justify-center items-center w-[90%] border-2 p-2 mb-2 rounded-md">
      <Title
        level={2}
        className="cursor-pointer"
        onClick={() => {
          navigate(`post/${post.id}`);
        }}
      >
        {post.title}
      </Title>
      <div className="flex w-[100%] flex-row justify-between items-center">
        <div className="flex flex-1 flex-col">
          <Text strong={true}>Author: {user.name}</Text>
          <Text strong={true}>Created at: Set 18, 2018</Text>
        </div>
        <div className="w-[30%]">
          <Space size={[0, 5]} wrap={true}>
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
          </Space>
        </div>
      </div>
      <div className="w-[100%] pt-3">
        <Text strong={true}>{post.body.substring(0, 100)}</Text>
      </div>
      <div className="w-[100%] pt-3">
        <Text
          className="cursor-pointer"
          strong={true}
          onClick={() => {
            setShowComment(!showComment);
          }}
        >
          {fetchCommentsQuery.isLoading ? 0 : fetchCommentsQuery.data?.length}{" "}
          replies
        </Text>
        <Divider />
        {showComment &&
          fetchCommentsQuery.isFetched &&
          fetchCommentsQuery.data?.map((comment) => {
            return (
              <Comment
                key={comment.id}
                className="px-3"
                author={
                  <Text strong className="text-black">
                    {comment.name}
                  </Text>
                }
                avatar={<Avatar size={"large"} src={defaultAva} />}
                content={<Text>{comment.body}</Text>}
                datetime={
                  <Tooltip title="2016-11-22 11:22:33">
                    <span>8 hours ago</span>
                  </Tooltip>
                }
                actions={[<span key="comment-nested-reply-to">Reply to</span>]}
              />
            );
          })}
      </div>
    </div>
  );
}

export default memo(PostCard);
