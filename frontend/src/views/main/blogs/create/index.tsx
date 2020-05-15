import { useServices } from "@/services";
import { PageHeader } from "antd";
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
    const tags = value.tags
      .split(" ")
      .filter((tag: string) => tag && tag.length)
      .map((tag: string) => {
        if (tag.startsWith("#")) {
          return tag.substring(1, tag.length).toLowerCase();
        }
        return tag.toLowerCase();
      });
    setSubmitting(true);
    subscriptions.push(
      from(
        postService().createPost({
          ...value,
          tags,
        })
      ).subscribe(
        () => {
          setSubmitting(false);
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
    <React.Fragment>
      <PageHeader title="Create Post">
        <PostForm onSubmit={handleSubmit} error={error} />
      </PageHeader>
    </React.Fragment>
  );
};

export default CreateBlog;
