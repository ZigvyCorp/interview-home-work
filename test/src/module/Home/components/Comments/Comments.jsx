import React from "react";
import { Avatar } from "@mantine/core";
import { useSelector } from "react-redux";


const Comments = ({ id }) => {
  const { comments } = useSelector((state) => {
    return { comments: state.comments };
  });

  const commentPost = comments.filter((comment) => {
    return comment.postId === id;
  });
  return (
    <>
      {commentPost.map((comment, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-1 d-flex justify-content-center">
              <Avatar radius="xl" size="lg" />
            </div>
            <div className="col-11">
              <div>
                <span className="fs-4 fw-bolder text-secondary me-4">
                  {comment.email}
                </span>
                <span className="text-secondary ">a day ago</span>
              </div>
              <div>
                <p className="fs-5">
                  {comment.body}
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="text-decoration-none fs-5 text-secondary"
                >
                  Reply to
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
