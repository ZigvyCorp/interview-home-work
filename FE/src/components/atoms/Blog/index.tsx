import { BlogItem } from "@/models";
import { formatDate } from "@/utils";
import { useNavigate } from "react-router-dom";

import { Tag, Text } from "..";
import { ReplyWrapper } from "./components";

import "./styles.css";
import { ViewDetailButton } from "./components/ViewDetail";

export const Blog = ({
  author,
  content,
  createdAt,
  replyList,
  tagList,
  title,
  id,
}: BlogItem) => {
  const navigate = useNavigate();
  return (
    <div className="p-3 border">
      <Text variant="l" style={{ textAlign: "center" }}>
        {title}
      </Text>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <Text variant="m">{`Author: ${author}`}</Text>
          <Text variant="m">{`Created At: ${formatDate(createdAt)}`}</Text>
        </div>
        <div className="w-25">
          {tagList.map((item) => (
            <Tag
              key={item.id}
              id={item.id}
              color={item.color}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <Text variant="m">{content.substring(0, 100)}</Text>
      </div>
      {replyList.length > 0 ? (
        <div className="replyWrapper">
          <ReplyWrapper blogId={`${id}`} items={replyList} />
        </div>
      ) : (
        <ViewDetailButton onClick={() => navigate(`/${id}`)} />
      )}
    </div>
  );
};
