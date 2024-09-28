import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Button, List, Card, Divider } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import CommentItem from './CommentItem';

const { Title } = Typography;

const PostDetail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((p) => p.id.toString() === id);
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchComments = () => {
      fetch(`http://localhost:8080/api/posts/${id}/comments`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        })
        .catch(() => console.error("Error fetching comments"));
    };
    fetchComments();
  }, [id]);

  const redirectHome = () => {
    navigate("/");
  };

  return post ? (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Button
        type="primary"
        icon={<LeftOutlined />}
        onClick={redirectHome}
        style={{ marginBottom: "20px" }}
      >
        Back to Posts
      </Button>
      <Card
        title={<Title level={3}>{post.title}</Title>}
        bordered={false}
        style={{ marginBottom: "20px" }}
      >
        <p style={{ fontSize: "16px", lineHeight: "1.5" }}>{post.body}</p>
      </Card>
      <Divider />
      <Title level={4}>{comments.length ? `${comments.length} Comments` : 'No Comments Yet'}</Title>
      <List
        itemLayout="vertical"
        dataSource={comments}
        renderItem={(comment) => (
          <CommentItem key={comment.id} comment={comment} />
        )}
        style={{ padding : "0 16px" ,background:'white', borderRadius:'8px' }}
      />
    </div>
  ) : (
    <div style={{ textAlign: "center", margin: "50px" }}>
      <Title level={2}>Post Not Found</Title>
      <Button type="primary" onClick={redirectHome}>Go Back to Home</Button>
    </div>
  );
};

export default PostDetail;
