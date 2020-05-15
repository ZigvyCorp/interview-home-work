import { PageHeader } from "antd";
import React from "react";
import { PostForm } from "../post-form";

const CreateBlog: React.FC = () => {
  const handleSubmit = (value: any) => {};

  return (
    <React.Fragment>
      <PageHeader title="Create Post">
        <PostForm onSubmit={handleSubmit} />
      </PageHeader>
    </React.Fragment>
  );
};

export default CreateBlog;
