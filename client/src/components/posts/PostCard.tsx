import { Tag } from "antd";
import { map } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/date.utils";

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
  post: {
    id: number;
    title: string;
    owner: { name: string };
    createdAt: string;
    content: string;
    tags: string[];
  };
}

const PostsCard: React.FC<PostsCardProps> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <div key={post.id}>
      <div className="flex justify-center">
        <h3
          className="font-semibold text-2xl cursor-pointer"
          onClick={() => {
            navigate(`/posts/${post.id}`);
          }}
        >
          {post.title}
        </h3>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>Author: {post.owner.name}</span>
          <span>Created at: {formatDate(post.createdAt)}</span>
        </div>
        <div>
          {map(post.tags, (tag) => (
            <Tag key={tag} color={getRandomTagColor()}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      <div className="py-4">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default PostsCard;
