// src/components/PostList.js
import React, { useState } from "react";
import posts from "../data/posts";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonIcon from "@mui/icons-material/Person";

const PostList = () => {
  const [postList] = useState(posts);
  const [searchTerm, setSearchTerm] = useState(""); // State lưu từ khóa tìm kiếm
  const [showComments, setShowComments] = useState({});

  // Hàm xử lý lọc bài viết theo từ khóa
  const filteredPosts = postList.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleComments = (postId) => {
    setShowComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">List of Posts</h2>

      <header
        className="py-3 my-4"
        style={{ borderRadius: "4px", background: "red" }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* Logo */}
            <div className="logo">
              <img src="logo.png" alt="Logo" style={{ height: "40px" }} />
            </div>

            {/* Blog text */}
            <div className="blog-title">
              <h2 className="m-0">Blog</h2>
            </div>

            {/* Username */}
            <div className="user-name" style={{ display: "flex" }}>
              <PersonIcon style={{ marginRight: "6px" }} />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </header>

      {/* Thanh tìm kiếm */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Danh sách các bài viết đã được lọc */}
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <div key={post.id} className="card mb-4">
            <div className="card-body">
              <h3 className="card-title" style={{ textAlign: 'center' }}>{post.title}</h3>
              <p className="card-subtitle mb-2 text-muted">
                Author: {post.author}
              </p>
              <p className="card-subtitle mb-2 text-muted">
                Created at: {post.created_at}
              </p>
              <p className="card-text">
                {post?.content.split(" ").slice(0, 100).join(" ")}...
              </p>
              <p>Comments: {post.comments?.length}</p>

              <button
                className="btn btn-primary"
                onClick={() => toggleComments(post.id)}
              >
                {showComments[post.id] ? "Hide Comments" : "Show Comments"}
              </button>

              {showComments[post.id] && (
                <div className="mt-3">
                  {[1, 2, 3].map((comment) => (
                    <div key={comment.id} className="border p-2 mb-2">
                      <p>
                        <strong>{comment.author}</strong>: {comment.content}
                      </p>
                      <p className="text-muted">
                        Created at: {comment.createdAt}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default PostList;
