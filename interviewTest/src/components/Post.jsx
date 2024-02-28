import { Collapse, Space, Tag } from "antd";
import { Fragment, useEffect, useState } from "react";
import CommentItemList from "./Comment";
import { getCommentsApi, getUserByIdAPI } from "../api/api";
import { useDispatch } from "react-redux";

const Post = ({ userId, id, title, body }) => {
  const [user, setUser] = useState();
  const tags = ["Red", "Green", "Blue", "Yellow", "Pink", "Orange", "Purple"];
  const dispatch = useDispatch();
  const [commentLength, setCommentLength] = useState();
  useEffect(() => {
    const getUserById = async (id) => {
      try {
        const data = await getUserByIdAPI(id);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    const getCommentLength = async (id) => {
      try {
        const data = await getCommentsApi(id);
        setCommentLength(data.length);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId) {
      getUserById(userId);
    }
    getCommentLength(id);
  }, [userId, id]);
  const createdAt = new Date("2024-02-28T08:00:00");
  const items = [
    {
      label: `${commentLength} replies`,
      children: <CommentItemList postId={id} />,
    },
  ];
  return (
    <>
      <div className="py-3">
        <h1 className=" font-bold text-2xl text-center">{title}</h1>
        <div className="flex justify-between items-center">
          <div className=" text-lg">
            <div>Author: {user?.name}</div>
            <div>
              Created at:{" "}
              {createdAt.toLocaleDateString("en-US", {
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
