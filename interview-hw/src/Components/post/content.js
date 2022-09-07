import React from "react";
import Box from "./box";
import moment from "moment";
import "./post.css";

const PostContent = ({ title, owner, content, created_at }) => {
  const shortParagraph = content.split(" ");

  const postContent =
    shortParagraph.length >= 100
      ? shortParagraph.slice(0, 100).join(" ") + "... "
      : content;

  return (
    <div>
      <h1 className="text-center display-5 mt-4">{title}</h1>
      <div className="subTitle d-flex justify-content-between">
        <div>
          <p>Author: {owner}</p>
          <p>
            Created at: {moment(created_at).format("ll")}
          </p>
        </div>
        <div className="row mx-0 flex-wrap boxWrap">
          <Box text="magenta" bgColor="#fcc6ff" />
          <Box text="red" bgColor="#ffbdc3" />
          <Box text="volcano" bgColor="#ffc5b6" color="#ec7751" />
          <Box text="orange" bgColor="#ffc797" />
          <Box text="gold" bgColor="#fff5b9" />
          <Box text="lime" bgColor="#c9ffc5" />
          <Box text="green" bgColor="#afd5af" />
          <Box text="cyan" bgColor="#cff6fc" />
          <Box text="blue" bgColor="#c2e3fe" />
          <Box text="geekblue" bgColor="#b6bef9" color="blue" />
          <Box text="purple" bgColor="#dfccff" />
        </div>
      </div>
      <div className="mt-3">{postContent}</div>
    </div>
  );
};

export default PostContent;
