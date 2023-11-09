import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Result
      status="404"
      title="404 - Page Not Found"
      subTitle="The page you are looking for does not exist."
      extra={
        <Link to="/post">
          <Button type="primary">Go to Posts</Button>
        </Link>
      }
    />
  );
}

export default NotFoundPage;
