import { Tag } from "antd";
import React from "react";
import { generateColor } from "../../../utils/generateColor";

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Tag color={generateColor(tag)} key={index}>
          {tag}
        </Tag>
      ))}
    </>
  );
};

export default Tags;
