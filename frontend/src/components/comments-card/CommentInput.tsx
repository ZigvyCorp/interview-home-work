import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { Comment } from "@/models/comment";
import { Post } from "@/models/post";
import { useServices } from "@/services";
import { Avatar, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { from, Subscription } from "rxjs";

export const CommentInput: React.FC<{
  post: Post;
  onCommented?: (comment: Comment, updatedPost: Post) => void;
}> = (props) => {
  const { user } = useAuth();
  const { commentService } = useServices();
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const handleSubmit = (value: any) => {
    if (!value.content) return;
    if (submitting) return;
    setSubmitting(true);
    subscriptions.push(
      from(commentService().comment(props.post._id, value)).subscribe(
        (res: any) => {
          setContent("");
          setSubmitting(false);
          props.onCommented?.call(undefined, res.comment, res.post);
        },
        () => {
          setSubmitting(false);
        }
      )
    );
  };

  return (
    <Form
      name={`post_${props.post._id}_commentInput`}
      layout="inline"
      onFinish={handleSubmit}
    >
      <Form.Item style={{ width: "100%" }} name="content">
        <div style={{ display: "flex" }}>
          <Avatar
            src={user?.avatar || defaultAvatar}
            style={{ margin: "auto 10px auto 0" }}
          />
          <Input
            placeholder="Write a comment"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </Form.Item>
    </Form>
  );
};
