import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentItem = ({ email, body }) => {
  return (
    <div className="d-flex flex-row mt-4">
      <div>
        <FontAwesomeIcon icon={faUser} fixedWidth />
      </div>
      <div className="ms-3">
        <p className="text-secondary">{email}</p>
        <p className="text-muted">{body}</p>
      </div>
    </div>
  );
};

export default CommentItem;
