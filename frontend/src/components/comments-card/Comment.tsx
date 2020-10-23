import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { Comment } from "@/models/comment";
import { Post } from "@/models/post";
import { User } from "@/models/user";
import { useServices } from "@/services";
import { DeleteOutlined } from "@ant-design/icons";
import { Avatar, Card, Modal, Typography } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { from, Subscription } from "rxjs";

export const CommentComponent: React.FC<{
  comment: Comment;
  onDeleted?: (updatedPost: Post) => void;
}> = (props) => {
  const { user } = useAuth();
  const [comment, setComment] = useState(props.comment);
  const [editable, setEditable] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const { commentService } = useServices();

  const subscriptions: Subscription[] = [];

  useEffect(() => {
    setEditable(user?._id === (comment.commentedBy as User)?._id);
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [user?._id, (comment.commentedBy as User)?._id]);

  const commentedBy = () => {
    return comment.commentedBy as User;
  };

  const onUpdate = (content: string) => {
    if (updating || !content || content === comment.content) return;
    setUpdating(true);
    subscriptions.push(
      from(commentService().updateComment(comment._id, content)).subscribe(
        (updatedComment: any) => {
          setComment(updatedComment);
          setUpdating(false);
        },
        () => {
          setUpdating(false);
        }
      )
    );
  };

  const getEditableProps = () => {
    if (updating)
      return {
        editing: true,
        onChange: onUpdate,
      };
    return {
      onChange: onUpdate,
    };
  };

  const deleteComment = () => {
    if (deleting) return;
    setDeleting(true);
    subscriptions.push(
      from(commentService().deleteComment(comment._id)).subscribe(
        (updatedPost: any) => {
          setDeleting(false);
          props.onDeleted?.call(undefined, updatedPost);
        },
        () => {
          setDeleting(false);
        }
      )
    );
  };

  const confirmDelete = () => {
    Modal.confirm({
      title: "Delete comment",
      content: "Are you sure want to delete this comment?",
      onOk: deleteComment,
      okText: "Delete",
      okButtonProps: {
        danger: true,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        marginBottom: 20,
      }}
    >
      <Avatar src={commentedBy()?.avatar || defaultAvatar} />
      <Card
        bodyStyle={{ padding: "0 10px 10px" }}
        style={{ marginLeft: 10, background: "#F2F3F5" }}
      >
        <Typography.Paragraph>
          <Typography.Text strong>
            <Link to={`/profile/${commentedBy()?._id}`}>
              {commentedBy()?.firstName} {commentedBy()?.lastName}
            </Link>
          </Typography.Text>
          &nbsp;
          <Typography.Text editable={editable ? getEditableProps() : undefined}>
            {comment.content}
          </Typography.Text>
          &nbsp;
          {editable && (
            <span
              onClick={confirmDelete}
              style={{ color: "red", cursor: "pointer" }}
            >
              <DeleteOutlined />
            </span>
          )}
        </Typography.Paragraph>
        <small>
          Commented at {moment(comment.createdAt).format("MMM Do, YYYY HH:mm")}
        </small>
      </Card>
    </div>
  );
};
