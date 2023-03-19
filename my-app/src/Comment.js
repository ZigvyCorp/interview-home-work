import React, { useState, useEffect } from "react";
import icon from "./images/icon.jpeg";
import axios from "axios";

function Comment({ postId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [postId]);

  return (
    <div>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="comment-container border-top border-secondary pt-3 pb-3 px-4 py-2"
        >
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-11">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center ">
                  <img
                    src={icon}
                    className="avatar-icon"
                    style={{
                      width: "50px",
                      height: "50px",
                      paddingRight: "5px",
                    }}
                  />
                  <p className="comment-author text-secondary">
                    {comment.name}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="comment-content">{comment.body}</p>
                </div>
              </div>
              <div className="col-md-6 align-self-end text-right">
                <p className="comment-reply text-secondary">Reply to</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comment;
