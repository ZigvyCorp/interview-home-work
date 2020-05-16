import defaultAvatar from "@/assets/img/default-avatar.jpg";
import { useAuth } from "@/HOCs/auth-provider";
import { Post } from "@/models/post";
import { User } from "@/models/user";
import { useServices } from "@/services";
import { CommentOutlined, LikeOutlined } from "@ant-design/icons";
import { Button, Card, PageHeader, Skeleton, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import { from, Subscription } from "rxjs";

const PostDetails: React.FC = () => {
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const match = useRouteMatch<{ id: string }>();
  const history = useHistory();
  const { postService } = useServices();
  const { user } = useAuth();
  const subscriptions: Subscription[] = [];
  useEffect(() => {
    const { id } = match.params;
    getPostDetails(id);
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [match.params.id]);

  const getPostDetails = (id: string) => {
    setLoading(true);
    subscriptions.push(
      from(postService().getPostDetails(id, true)).subscribe(
        (post: any) => {
          setPost(post);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      )
    );
  };

  const authorized = () => {
    return (post?.author as User)?._id === user?._id;
  };

  if (loading) return <Skeleton active avatar title paragraph />;
  return (
    <PageHeader
      title={
        <React.Fragment>
          <p style={{ marginBottom: 0, fontSize: 12, lineHeight: "12px" }}>
            <Link to="#">
              {(post?.author as User)?.firstName}{" "}
              {(post?.author as User)?.lastName}
            </Link>
          </p>
          <Typography.Text strong>{post?.title}</Typography.Text>
        </React.Fragment>
      }
      avatar={{
        src: (post?.author as User)?.avatar || defaultAvatar,
        size: "large",
      }}
      extra={[
        authorized() && (
          <Button
            key="edit"
            type="primary"
            onClick={() => history.push(`/blogs/${[post?._id]}/edit`)}
          >
            Edit
          </Button>
        ),
      ]}
    >
      <Card
        style={{
          marginBottom: 10,
        }}
        actions={[
          <span>
            <LikeOutlined key="like" /> 12
          </span>,
          <span>
            <CommentOutlined key="comment" /> 12
          </span>,
        ]}
      >
        <Card.Meta
          description={
            <React.Fragment>
              <Typography.Paragraph>{post?.content}</Typography.Paragraph>
              {!!post?.tags.length && (
                <Typography.Text>
                  Tags: {post?.tags.map((tag) => `#${tag}`).join(" ")}
                </Typography.Text>
              )}
            </React.Fragment>
          }
        />
      </Card>
    </PageHeader>
  );
};

export default PostDetails;
