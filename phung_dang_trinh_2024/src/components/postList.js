import PersonIcon from "@mui/icons-material/Person";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import { useNavigate } from "react-router-dom";
import {
  getCommentsRequest,
  getPostsRequest,
  getUsersRequest,
} from "../store/actions";
import FaceIcon from "@mui/icons-material/Face";

const PostList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const users = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [showComments, setShowComments] = useState({});
  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  useEffect(() => {
    dispatch(getPostsRequest());
    dispatch(getCommentsRequest());
    dispatch(getUsersRequest());
  }, [dispatch]);

  localStorage.setItem("posts", JSON.stringify(posts));
  localStorage.setItem("comments", JSON.stringify(comments));
  localStorage.setItem("users", JSON.stringify(users));

  const postsWithUsernames = posts.map((post) => {
    const user = users.find((user) => user.id === post.userId);
    return {
      ...post,
      username: user?.username,
      created_at: new Date().toLocaleDateString("vi-VN"),
    };
  });

  const postsWithComments = postsWithUsernames.map((post) => {
    const comment = comments.filter((comment) => comment?.postId === post?.id);
    return {
      ...post,
      comments: comment,
    };
  });

  const filteredPosts = postsWithComments?.filter((post) =>
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
      <header
        className="py-3 my-4"
        style={{ borderRadius: "4px", background: "gray" }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="logo">
              <LogoDevIcon style={{ fontSize: "40px", color: "white" }} />
            </div>

            <div className="blog-title">
              <h2 className="m-0">Blog</h2>
            </div>

            <div className="user-name" style={{ display: "flex" }}>
              <PersonIcon style={{ marginRight: "6px" }} />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mb-4 d-flex justify-content-end">
        <input
          type="text"
          style={{ width: "30%" }}
          className="form-control"
          placeholder="Search posts by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <h2 className="mb-4">List of Posts</h2>
      {filteredPosts?.length > 0 ? (
        filteredPosts?.map((post) => (
          <div
            key={post.id}
            className="card mb-4"
            onClick={() => handlePostClick(post.id)}
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <h3 className="card-title" style={{ textAlign: "center" }}>
                {post.title}
              </h3>
              <p className="card-subtitle mb-2 text-muted">
                Author:{" "}
                <strong>
                  <em>{post.username}</em>
                </strong>
              </p>
              <p className="card-subtitle mb-2 text-muted">
                Created date: {post.created_at}
              </p>
              <p className="card-text">{post?.body?.slice(0, 100)}...</p>
              <p>{post.comments?.length} replies</p>

              <button
                className="btn btn-secondary"
                onClick={() => toggleComments(post.id)}
              >
                {showComments[post.id] ? "Hide" : "Show comments"}
              </button>

              {showComments[post.id] && (
                <div className="mt-3">
                  {post.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="border p-2 mb-2"
                      style={{ display: "flex", borderRadius: "4px" }}
                    >
                      <FaceIcon style={{ marginRight: "10px" }} />
                      <div>
                        <p className="text-muted">2 days ago</p>
                        <p>
                          <strong>{comment.email}</strong>: {comment.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No post found.</p>
      )}
    </div>
  );
};

export default PostList;
