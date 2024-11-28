import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import FaceIcon from "@mui/icons-material/Face";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const PostDetail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state?.posts);
  const comments = useSelector((state) => state?.comments);
  const [post, setPost] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedPost = posts?.find((post) => post?.id === parseInt(id));
    setPost(selectedPost);
    const filteredComments = comments?.filter(
      (comment) => comment?.postId === parseInt(id)
    );
    setPostComments(filteredComments);
  }, [id, posts, comments]);

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-4" onClick={() => navigate(-1)}>
        <ArrowBackIosIcon />
        Back
      </button>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>

      <h3 className="mt-4">Comments</h3>
      {postComments?.map((comment) => (
        <div
          key={comment?.id}
          className="border p-2 mb-2"
          style={{ display: "flex", borderRadius: "4px" }}
        >
          <FaceIcon style={{ marginRight: "10px" }} />
          <div>
            <p className="text-muted">Posted by: {comment?.email}</p>
            <p>
              <strong>{comment?.name}</strong>: {comment?.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostDetail;
