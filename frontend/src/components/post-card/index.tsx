import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { Post } from "@/models/post";
import { User } from "@/models/user";
import { AppState } from "@/redux";
import { CommentOutlined } from "@ant-design/icons";
import { Avatar, Card, Typography } from "antd";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CommentsCard } from "../comments-card";
import { LikeAction } from "./LikeAction";
import { PostContent } from "./PostContent";
import { PostMenuDropdowm } from "./PostMenu";

const { Meta } = Card;

const PostItem: React.FC<{
  post: Post;
  onDelete: () => void;
  onUpdate: (post: Post) => void;
  onCommentsUpdated: (updatedPost: Post) => void;
}> = (props) => {
  const { post, onDelete, onUpdate, onCommentsUpdated } = props;
  const { user } = useAuth();
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => setShowComments(!showComments);

  return (
    <div style={{ marginBottom: 10 }}>
      <Card
        actions={[
          <LikeAction post={post} onUpdate={onUpdate} />,
          <span onClick={toggleComments}>
            <CommentOutlined key="comment" /> {post.comments?.length}
          </span>,
        ]}
      >
        <Meta
          avatar={
            <Avatar src={(post.author as User)?.avatar || defaultAvatar} />
          }
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
      {showComments && (
        <CommentsCard post={post} onCommentsUpdated={onCommentsUpdated} />
      )}
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  posts: state.posts,
});

const PostWithState = connect(mapStateToProps)(PostItem);

export function renderPostPreview(
  onDelete: (index: number) => void,
  onUpdated: (index: number, post: Post) => void,
  onCommentsUpdated: (index: number, updatedPost: Post) => void
) {
  return (item: Post, index: number) => {
    return (
      <PostWithState
        post={item}
        onDelete={() => onDelete(index)}
        onUpdate={(post) => onUpdated(index, post)}
        onCommentsUpdated={(post) => onCommentsUpdated(index, post)}
      />
    );
  };
}
