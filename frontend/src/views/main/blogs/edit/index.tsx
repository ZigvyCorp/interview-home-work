import { useAuth } from "@/HOCs/auth-provider";
import { Post } from "@/models/post";
import { useServices } from "@/services";
import { PageHeader } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router";
import { from, Subscription } from "rxjs";
import { PostForm } from "../post-form";

const EditPost: React.FC = () => {
  const history = useHistory();
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const { postService } = useServices();
  const { user } = useAuth();
  const match = useRouteMatch<{
    id: string;
  }>();
  const subscriptions: Subscription[] = [];

  useEffect(() => {
    const { id } = match.params;
    getPostDetails(id);
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [match]);

  const authorized = (post: Post) => {
    return post.author === user?._id;
  };

  const getPostDetails = (id: string) => {
    setLoading(true);
    subscriptions.push(
      from(postService().getPostDetails(id)).subscribe(
        (post: any) => {
          if (!authorized(post)) return history.push("/");
          setPost(post);
          setLoading(false);
        },
        () => {
          setLoading(false);
        }
      )
    );
  };

  const handleSubmit = (value: any) => {
    setSubmitting(true);
    value._id = post?._id;
    subscriptions.push(
      from(postService().updatePost(value)).subscribe(
        (updated: any) => {
          setPost(updated);
          setSubmitting(false);
        },
        () => {
          setSubmitting(false);
        }
      )
    );
  };

  return (
    <PageHeader title="Edit Post" onBack={history.goBack}>
      <PostForm
        onSubmit={handleSubmit}
        error={error}
        submitting={submitting}
        post={post}
        loading={loading}
      />
    </PageHeader>
  );
};

export default EditPost;
