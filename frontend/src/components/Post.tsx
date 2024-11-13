import { Card, Divider, Space, Typography } from "antd";
import dayjs from "dayjs";
import React from "react";

import useDeletePost from "../react-queries/useDeletePost";
import useProfile from "../react-queries/useProfile";
import type { Post as PostType } from "../types";
import ListCommentsByPost from "./ListCommentsByPost";
import ListTags from "./ListTags";

const { Title, Text, Paragraph } = Typography;

type Props = {
  post?: PostType;
};

const Post = (props: Props) => {
  const { post } = props;
  const { data: profile } = useProfile({ id: post?.userId });
  const { mutate: deletePost } = useDeletePost();

  const formattedDate = React.useMemo(() => {
    return dayjs(post?.created_at).format("MMM DD, YYYY");
  }, [post?.created_at]);

  const handleDeletePost = () => {
    deletePost({ id: post?.id });
  };

  return (
    <Card className="border-bottom-1 border-radius-0 border-black">
      <p
        className="text-red underline cursor-pointer"
        onClick={handleDeletePost}
      >
        Delete
      </p>
      <Title className="text-center mb-2" level={1}>
        {post?.title}
      </Title>
      <Space
        direction="horizontal"
        className="w-full justify-between align-start"
      >
        <Space size={[0, 2]} direction="vertical" style={{ marginBottom: 20 }}>
          <Text className="text-lg font-medium leading-0">
            Author: {profile?.name}
          </Text>
          <Text className="text-lg font-medium leading-0">
            Created at: {formattedDate}
          </Text>
        </Space>
        <ListTags />
      </Space>
      <Paragraph className="text-lg font-medium text-length-1 relative">
        {post?.body}
      </Paragraph>
      <Divider />
      <ListCommentsByPost postId={post?.id} />
    </Card>
  );
};

export default React.memo(Post);
