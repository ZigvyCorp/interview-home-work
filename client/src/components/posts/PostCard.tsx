import { Tag } from "antd";
import { map } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/date.utils";
import { IPosts } from "../../types/posts";

const tagColors = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

const getRandomTagColor = () => {
  const randomIndex = Math.floor(Math.random() * tagColors.length);
  return tagColors[randomIndex];
};

interface PostsCardProps {
  post: IPosts;
}

const PostsCard: React.FC<PostsCardProps> = (props) => {
  const { id, content, owner, tags, title, createdAt } = props.post;
  const navigate = useNavigate();
  return (
    <div key={id}>
      <div className="flex justify-center">
        <h3
          className="font-semibold text-2xl cursor-pointer mb-4"
          onClick={() => {
            navigate(`/posts/${id}`);
          }}
        >
          {title}
        </h3>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/2">
          <span>Author: {owner?.name}</span>
          <span>Created at: {formatDate(createdAt)}</span>
        </div>
        <div className="w-1/2 flex items-center flex-wrap justify-end">
          {map(tags, (tag, index) => (
            <Tag key={index} color={getRandomTagColor()} className="mb-2">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <div className="py-4">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default PostsCard;
