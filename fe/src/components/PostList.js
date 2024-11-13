import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Button, Input, Card, Typography } from "antd";
import { fetchPostsRequest } from "../store/actions/postActions";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";

const { Search } = Input;
const { Title, Text } = Typography;

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [searchTerm, setSearchTerm] = React.useState("");

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3} style={{ marginBottom: "20px", textAlign: 'center' }}>Blog Posts</Title>
      <Search
        placeholder="Search by title"
        onChange={handleSearchChange}
        value={searchTerm}
        style={{ marginBottom: "30px", width: "100%", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}
      />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 10,
          pageSizeOptions: [10],
        }}
        dataSource={filteredPosts}
        renderItem={(post) => (
          <List.Item
            key={post.id}
            style={{ marginBottom: "20px" }}
          >
            <Card hoverable>
              <List.Item.Meta
                title={<Link to={`/posts/${post.id}`}><Text strong>{post.title}</Text></Link>}
                description={<Text type="secondary">Author: {post.authorName} | Created Date: {new Date().toLocaleDateString()}</Text>}
              />
              <Text>{post.body.substring(0, 150)}...</Text>
              <div style={{ marginTop: '10px' }}>
                <CommentList postId={post.id} />
              </div>
              <Link to={`/posts/${post.id}`}>
                <Button type="primary" style={{ marginTop: '10px' }}>View Details</Button>
              </Link>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostList;
