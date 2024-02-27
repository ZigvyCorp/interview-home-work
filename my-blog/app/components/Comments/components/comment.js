import { formatText, shortText } from "@/constants/helper";
import { useCallback, useState } from "react";

const Comment = ({ avatar, name, email, body: comment, time }) => {
  return (
    <div className="d-flex flex-rows mb-4 w-100">
      <div>
        <img
          src={"https://bit.ly/dan-abramov"}
          alt="Avatar"
          className="rounded-circle"
          style={{ width: "40px", height: "40px", marginRight: "5px" }}
        />
      </div>
      <div className="d-flex flex-column">
        <div className="d-flex flex-rows align-items-center">
          <div style={{ fontWeight: "bold" }}>{name}</div>
          <div style={{ fontSize: "12px", color: "#666", marginLeft: "4px" }}>
            {time}
          </div>
        </div>
        <div className="d-flex flex-column">{comment}</div>
      </div>
    </div>
  );
};

export default Comment;
