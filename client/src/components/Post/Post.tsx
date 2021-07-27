import { Card, Row, Typography } from "antd";
import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { PostType } from "../../types";
import Comments from "./Comments/Comments";
import "./Post.scss";
import Tags from "./Tags/Tags";

interface Props {
  post: PostType;
}
const Post: React.FC<Props> = ({ post }) => {
  return (
    <div className="post">
      <Card
        title={<Link to={`/post/${post._id}`}>{post.title}</Link>}
        bordered={false}
        headStyle={{ border: "none", textAlign: "center", fontWeight: "bold" }}
      >
        <Row style={{ marginBottom: "1rem" }}>
          <Card.Grid hoverable={false} style={{ boxShadow: "none", width: "60%", padding: 0 }}>
            <Typography.Title level={4}>Author : {post.owner.name}</Typography.Title>
            <Typography.Text strong>Created on : {moment(post.createdAt).format("DD/MM/YYYY")}</Typography.Text>
          </Card.Grid>
          <Card.Grid hoverable={false} style={{ boxShadow: "none", width: "40%", padding: 0 }}>
            <Tags tags={post.tags} />
          </Card.Grid>
        </Row>
        <Row style={{ marginBottom: "2rem" }}>
          <Typography.Paragraph strong>{post.content}</Typography.Paragraph>
        </Row>
        <Row style={{ marginBottom: "1rem" }}>
          <Comments comments={post.comments} id={post._id} />
        </Row>
      </Card>
    </div>
  );
};

export default Post;
