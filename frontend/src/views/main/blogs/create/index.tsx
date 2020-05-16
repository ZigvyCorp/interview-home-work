import { useServices } from "@/services";
import { notification, PageHeader } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { from, Subscription } from "rxjs";
import { PostForm } from "../post-form";

const CreateBlog: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const { postService } = useServices();

  const subscriptions: Subscription[] = [];

  useEffect(() => {
    return () => {
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, []);

  const handleSubmit = (value: any) => {
    setSubmitting(true);
    subscriptions.push(
      from(postService().createPost(value)).subscribe(
        () => {
          setSubmitting(false);
          notification.success({
            message: "Success",
            description: "Post created successfully!",
            duration: 2,
          });
          history.push("/");
        },
        (err) => {
          if (err.response?.data?.message) {
            setError(err.response.data.message);
          }
          setSubmitting(false);
        }
      )
    );
  };

  return (
    <PageHeader title="Create Post" onBack={history.goBack}>
      <PostForm onSubmit={handleSubmit} error={error} submitting={submitting} />
    </PageHeader>
  );
};

export default CreateBlog;
