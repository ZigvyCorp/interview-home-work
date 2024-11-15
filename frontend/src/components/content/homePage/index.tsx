import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query";
import { Flex, Tag } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../../../apis/callApi";
import { IPost } from "../../../types/post.type";
import { formatTime } from "../../../utils/format-time";
import Comments from "../comments/comments";

const Posts = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);
  const { data, isLoading, error } = useQuery<any, Error>({
    queryKey: ["posts"], // Đưa queryKey vào đối tượng options
    queryFn: () => getData("/posts"), // Đặt hàm fetch vào queryFn
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const tagColor = [
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

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };
  const navigatePostDetail = (postId?: string) => {
    if (postId) {
      navigate(`/post/${postId}`);
    }
  };
  return (
    <div className="mx-4 pt-8 border-x-2 px-4">
      {data?.data?.map((post: IPost, index: number) => {
        return (
          <div className="border-b-2 border-black pb-8">
            {/* title */}
            <h1
              className=" pt-8 text-center cursor-pointer"
              onClick={() => navigatePostDetail(post?._id)}
            >
              {post?.title}
            </h1>
            {/* author & tag */}
            <Flex className="justify-between items-center pb-4">
              <div>
                <p>Author : {post?.owner?.username}</p>
                <p>
                  Created at :&nbsp;
                  {post?.created_at && formatTime(post.created_at)}
                </p>
              </div>
              <Flex gap="8px 4px" wrap>
                {post?.tags &&
                  post?.tags.map((val, index) => (
                    <Tag
                      color={tagColor[index % tagColor.length]}
                      className="text-base"
                    >
                      {val}
                    </Tag>
                  ))}
              </Flex>
            </Flex>
            {/* content */}
            <p>
              {post?.content
                ? expanded
                  ? post?.content
                  : post?.content?.substring(0, 100) + "..."
                : "No content"}
              {post?.content && (
                <>
                  {expanded && <span>&nbsp;&nbsp;&nbsp;</span>}
                  <span
                    className="cursor-pointer underline text-[#606060]"
                    onClick={toggleExpand}
                  >
                    {expanded ? "Hide" : "See more"}
                  </span>
                </>
              )}
            </p>
            {/* comment */}
            <Comments postIdProp={post?._id} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
