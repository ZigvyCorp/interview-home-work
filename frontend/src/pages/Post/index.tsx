import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import PostJson from "./../../mock/posts.json";
import { PostList } from "./components/PostList";

const { Search } = Input;
const PostPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState({
    pageSize: 5,
    current: 1,
  });

  useEffect(() => {
    setPosts(PostJson);
  }, []);

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Search
          enterButton="Search"
          placeholder="Search posts by title"
          onSearch={(e) => setSearchTerm(e)}
          value={searchTerm}
        />
      </Col>

      <Col span={24}>
        <PostList posts={posts} />
      </Col>
    </Row>
  );
};

export default PostPage;
