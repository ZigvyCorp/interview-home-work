import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { Post } from "@/models/post";
import { User } from "@/models/user";
import { AppState } from "@/redux";
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Dropdown, Menu, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Paragraph, Text } = Typography;

const Tag: React.FC<{
  tag: string;
}> = (props) => {
  return (
    <Text type="warning" mark>
      #{props.tag}
    </Text>
  );
};

const PostContent: React.FC<{ post: Post }> = (props) => {
  return (
    <div>
      <Paragraph>{props.post.content}</Paragraph>
      <p style={{ marginTop: "8px" }}>
        {props.post.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <Tag tag={tag} />
            &nbsp;
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

const PostMenu = (props: any) => {
  return (
    <Menu>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        <Link to={`/blogs/${props.post._id}/edit`}>Edit</Link>
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
    </Menu>
  );
};

const PostMenuDropdowm = (props: any) => {
  return (
    <Dropdown
      overlay={<PostMenu post={props.post} />}
      placement="bottomRight"
      trigger={["click"]}
    >
      <EllipsisOutlined style={{ cursor: "pointer" }} />
    </Dropdown>
  );
};

const PostPreview: React.FC<{
  post: Post;
}> = (props) => {
  const { post } = props;
  const { user } = useAuth();
  return (
    <Card
      style={{ marginBottom: 10 }}
      actions={[
        <span>
          <LikeOutlined key="like" /> 12
        </span>,
        <span>
          <CommentOutlined key="comment" /> 12
        </span>,
      ]}
    >
      <Meta
        avatar={<Avatar src={(post.author as User)?.avatar || defaultAvatar} />}
        title={
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {post.title}
            {user && user._id === (post.author as User)?._id && (
              <PostMenuDropdowm post={post} />
            )}
          </div>
        }
        description={<PostContent post={post} />}
      />
    </Card>
  );
};

const mapStateToProps = (state: AppState) => ({
  posts: state.posts,
});

const PostPreviewWithState = connect(mapStateToProps)(PostPreview);

export function renderPostPreview(item: Post) {
  return <PostPreviewWithState post={item} />;
}
