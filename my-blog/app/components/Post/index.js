"use client";

import { randomDate } from "@/constants/helper";
import moment from "moment";
import { memo, useEffect, useMemo, useState } from "react";
import CommentBox from "../Comments";
import ContentComponent from "../Content";

const Post = ({ post, isDetail }) => {
  const [showComment, setShowComment] = useState(false);
  const randomDay = useMemo(
    () => randomDate(new Date(2000, 0, 1), new Date(2024, 11, 31)),
    [post.id]
  ); // Từ 1 Jan 2000 đến 31 Dec 2024
  const [state, setState] = useState({
    userName: post?.user?.name ?? "",
    updateAt: moment(randomDay).format("MMMM D, YYYY") ?? "không xác định",
    title: post.title ?? "",
    postId: post.id,
    content: post.body ?? "",
    comments: post.comments ?? [],
  });

  useEffect(() => {
  console.log('first', post)

    setState((state) => ({
      ...state,
      userName: post?.user?.name,
      updateAt: moment(randomDay).format("MMMM D, YYYY"),
      title: post.title,
      content: post.body,
      postId: post.id,
      comments: post.comments ?? [],
    }));
  }, [post]);

  const goToPost = (id) => {
    window.location.href = `/posts/${id}`;
  };

  return (
    <>
      <div className="container mt-2 w-100">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="post-container">
              <div className="post-header">
                <img src="https://via.placeholder.com/50" alt="User Avatar" />
                <div>
                  <div className="post-name">{state.userName}</div>
                  <div className="text-muted">{state.updateAt}</div>
                </div>
              </div>
              <div
                className="post-title"
                style={{ cursor: "pointer" }}
                onClick={() => (!isDetail ? goToPost(state.postId) : null)}
              >
                {`${state.title}`}{" "}
                <span style={{ color: "red", cursor: "pointer" }}>
                  {!isDetail ? `(click title to go to detail page)` : null}
                </span>
              </div>
              <div className="post-content">
                <ContentComponent content={state.content} />
                {/* <ImageContent /> */}
              </div>
              <div
                className="comment-amount"
                onClick={() => setShowComment((previous) => !previous)}
              >
                {`${state.comments?.length} replies`}{" "}
                <span className="text-danger">{`(Click to ${
                  !showComment ? "expand" : "hide"
                })`}</span>
              </div>
              <div className="post-footer border-top border-gray pt-4">
                {showComment ? <CommentBox data={state.comments} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
