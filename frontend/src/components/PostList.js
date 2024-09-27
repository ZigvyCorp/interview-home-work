import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Button, Input } from "antd";
import { fetchPostsRequest } from "../actions/postActions";
import { Link } from "react-router-dom";
import CommentList from "./CommentList";
const { Search } = Input;

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

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <Search
        placeholder="Search by title"
        onSearch={handleSearch}
        style={{ marginBottom: "20px", width: "40%", minWidth: "254px" }}
      />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
          pageSizeOptions: [5],
        }}
        dataSource={filteredPosts}
        renderItem={(post) => (
          <List.Item
            key={post.id}
            actions={[
              <Link to={`/posts/${post.id}`}>
                <Button type="link">View Details</Button>
              </Link>,
            ]}
          >
            <List.Item.Meta
              title={<Link to={`/posts/${post.id}`}>{post.title}</Link>}
              description={`Author: ${
                post.authorName
              }, Created Date: ${new Date().toLocaleDateString()}`}
            />
            {post.body.substring(0, 100)}...
            <CommentList postId={post.id} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PostList;
