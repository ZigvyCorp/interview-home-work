import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../redux/actions";
import { randColor } from "../utils";
import Header from "../components/Header";
import Comment from "../components/Comment";

export default function PostDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const time = new Date(post?.created_at).toDateString().slice(4);

  useEffect(() => {
    dispatch(getPostById(id));
  }, [dispatch, id]);

  return (
    <div className="mb-5">
      <Header title="Post Detail" />

      <div className="post-detail container border border-dark p-3">
        <div className="d-flex justify-content-center">
          <span className="fs-2 fw-semibold">
            {post?.title || "Post title"}
          </span>
        </div>

        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <span>Author: {post?.author[0]?.username || "Author name"}</span>
            <span>Created: {time}</span>
          </div>
          <div>
            <div className="d-flex flex-row gap-2">
              {post.tags?.map((tag, index) => (
                <div
                  key={index}
                  className={`border rounded p-1 border-${randColor()}`}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 mb-4">
          <p>{post?.content}</p>
        </div>

        <div>
          <div className="d-flex flex-row gap-3 border-bottom pb-2">
            <span className="text-secondary">
              {post?.comments?.length || 0} replies
            </span>
          </div>
          <div>
            {post?.comments?.map((comment, index) => (
              <Comment key={index} comment={comment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
