import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Flex, List, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import CommentItem from './CommentItem'; 

const { Title } = Typography;

const PostDetail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((p) => p.id.toString() === id);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = () => {
      fetch(`http://localhost:4000/api/posts/${id}/comments`)
        .then((response) => response.json())
        .then((data) => {
          setComments(data);
        })
        .catch(() => console.log(false)); 
    };
    fetchComments();
  }, [])

  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate("/"); 
  };

  return post ? (
    <div>
      <Flex align="center">
        <Button color="primary" variant="text" onClick={handleGoBack}>
          <LeftOutlined />
        </Button>
        <Title level={5} style={{"margin": "0 16px"}}>{post.title}</Title>
      </Flex>
      <p>{post.body}</p>
      <List
        header={<div>{comments?.length ? comments.length + ' Comments' :'Comments'}</div>}
        itemLayout="horizontal"
        dataSource={comments || []}
        renderItem={(comment) => (
          <CommentItem key={comment.id} comment={comment} />
        )}
      />
    </div>
  ) : (
    <p>Post not found</p>
  );
};

export default PostDetail;
