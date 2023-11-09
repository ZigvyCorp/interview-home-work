import React from "react";
import dayjs from "dayjs";

const Comment = ({ name, content, createAt }) => {
  return (
    <>
      <div>
        <p>
          {name}
          <span>{dayjs(createAt).format("DD/MM/YYYY HH:mm:ss")}</span>
        </p>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Comment;
