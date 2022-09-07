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
          <Box text="magenta" bgColor="#fff" />
          <Box text="red" bgColor="#fff" />
          <Box text="volcano" bgColor="#fff" color="#ec7751" />
          <Box text="orange" bgColor="#fff" />
          <Box text="gold" bgColor="#fff" />
          <Box text="lime" bgColor="#fff" />
          <Box text="green" bgColor="#fff" />
          <Box text="cyan" bgColor="#fff" />
          <Box text="blue" bgColor="#fff" />
          <Box text="geekblue" bgColor="#fff" color="blue" />
          <Box text="purple" bgColor="#fff" />
        </div>
      </div>
      <div className="mt-3">{postContent}</div>
    </div>
  );
};

export default PostContent;
