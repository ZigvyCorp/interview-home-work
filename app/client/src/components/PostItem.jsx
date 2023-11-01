import { Card } from "antd";
import React, { useMemo } from "react";
import { truncateString } from "../utils/helpers";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  const body = useMemo(() => {
    return truncateString(post?.body || "", 100);
  }, [post]);

  return (
    <Link to={`posts/${post._id}`}>
      <Card className="min-h-[150px]">
        <div className="text-xl font-bold">{post.title}</div>
        <p>{body}</p>
      </Card>
    </Link>
  );
}
