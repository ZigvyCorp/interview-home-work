import { Button, Card } from "antd";
import React, { useState } from "react";

const PostDetail = ({ post }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => setExpanded(!expanded);

    return (
      <Card title={post.title} style={{ marginBottom: "20px" }}>
        <p>
          {expanded ? post.body : post.body.slice(0, 100) + "..."}
        </p>
        <Button type="link" onClick={toggleExpanded}>
          {expanded ? "Thu gọn" : "Xem thêm"}
        </Button>
      </Card>
    );
  };

  export default PostDetail;