import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { Post } from "@/models/post";
import { User } from "@/models/user";
import { AppState } from "@/redux";
import { useServices } from "@/services";
import {
  CommentOutlined,
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Card,
  Dropdown,
  Menu,
  Modal,
  notification,
  Typography,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { from, Subscription } from "rxjs";

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
      <small>
        Created by {(props.post.author as User).firstName}{" "}
        {(props.post.author as User).lastName} at{" "}
        {moment(props.post.createdAt).format("MMM Do, YYYY HH:mm")}
      </small>
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { postService } = useServices();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const handleOk = () => {
    setDeleting(true);
    subscriptions.push(
      from(postService().deletePost(props.post._id)).subscribe(
        () => {
          setDeleting(false);
          setShowDeleteModal(false);
          props.onDelete?.call();
          notification.success({
            message: "Deleted",
            description: "Post deleted successfully!",
            duration: 2,
          });
        },
        () => {
          setDeleting(false);
        }
      )
    );
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <React.Fragment>
      <Modal
        title="Confirm delete post"
        visible={showDeleteModal}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Yes, sure!"
        okButtonProps={{
          danger: true,
          disabled: deleting,
        }}
        cancelButtonProps={{
          disabled: deleting,
        }}
        maskClosable={false}
      >
        <p>Are you sure want to delete this post?</p>
      </Modal>
      <Menu>
        <Menu.Item key="edit" icon={<EditOutlined />}>
          <Link to={`/blogs/${props.post._id}/edit`}>Edit</Link>
        </Menu.Item>
        <Menu.Item
          key="delete"
          icon={<DeleteOutlined />}
          onClick={() => setShowDeleteModal(true)}
        >
          Delete
        </Menu.Item>
      </Menu>
    </React.Fragment>
  );
};

const PostMenuDropdowm = (props: any) => {
  return (
    <Dropdown
      overlay={<PostMenu post={props.post} onDelete={props.onDelete} />}
      placement="bottomRight"
      trigger={["click"]}
    >
      <EllipsisOutlined style={{ cursor: "pointer" }} />
    </Dropdown>
  );
};

const PostItem: React.FC<{
  post: Post;
  onDelete: () => void;
}> = (props) => {
  const { post, onDelete } = props;
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
            <Typography.Text strong>
              <Link to={`/blogs/${post._id}`}>{post.title}</Link>
            </Typography.Text>
            {user && user._id === (post.author as User)?._id && (
              <PostMenuDropdowm post={post} onDelete={onDelete} />
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

const PostWithState = connect(mapStateToProps)(PostItem);

export function renderPostPreview(onDelete: () => void) {
  return (item: Post) => {
    return <PostWithState post={item} onDelete={onDelete} />;
  };
}
