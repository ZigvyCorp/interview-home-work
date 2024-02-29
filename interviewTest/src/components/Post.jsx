import { Collapse, Space, Tag } from "antd";
import { Fragment } from "react";
import CommentItemList from "./Comment";

const Post = ({ author, _id, title, body, createdAt, comments, tags }) => {
  const publish = new Date(createdAt);
  const items = [
    {
      label: `${comments.length} replies`,
      children: <CommentItemList postId={_id} />,
    },
  ];
  return (
    <>
      <div className="py-3">
        <h1 className=" font-bold text-2xl text-center">{title}</h1>
        <div className="flex justify-between items-center">
          <div className=" text-lg">
            <div>Author: {author?.userName}</div>
            <div>
              Created at:{" "}
              {publish.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
          <div>
            <Space size={[0, 8]} wrap>
              {tags.map((el, index) => (
                <Tag key={index} color={el.toLowerCase()}>
                  {el}
                </Tag>
              ))}
            </Space>
          </div>
        </div>
        <div className="text-lg line-clamp-3">{body}</div>

        <div>
          <Collapse
            className=" font-medium"
            expandIcon={({ isActive }) =>
              isActive ? <Fragment /> : <Fragment />
            }
            ghost
            items={items}
          />
        </div>
      </div>
      <div className=" h-[2px] bg-black mt-4"></div>
    </>
  );
};

export default Post;
