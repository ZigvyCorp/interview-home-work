import React, { useEffect, useState } from "react";
// import comments from "../data/comments.json";
import { Collapse } from "antd";
import CommentItem from "./CommentItem";

const Comments = ({ postId, comments }) => {
  const [count, setCount] = useState(0);
  const items = [
    {
      key: "1",
      label: `${count} replise`,
      children: (
        <>
          {comments.map((cmt) => {
            if (cmt.postId === postId) {
              return <CommentItem comment={cmt} />;
            }
          })}
        </>
      ),
    },
  ];

  const onChange = (key) => {
    // console.log(key);
  };

  useEffect(() => {
    let c = 0;
    comments.map((cmt) => {
      if (cmt.postId === postId) {
        c++;
      }
    });
    setCount(c);
  }, [postId, comments]);

  return <Collapse items={items} onChange={onChange} ghost className="mb-5" />;
};

export default Comments;
