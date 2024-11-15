import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getData } from "../../../apis/callApi";
import { Flex, Tag } from "antd";
import { formatTime } from "../../../utils/format-time";
import Comments from "../comments/comments";

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", postId], // Sử dụng queryKey dạng mảng để phân biệt từng bài viết
    queryFn: () => getData(`/posts/${postId}`),
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
  return (
    <div className="mx-4 pt-8 border-x-2 px-4">
      <div className="border-b-2 border-black pb-8">
        {/* title */}
        <h1 className=" pt-8 text-center cursor-pointer">
          {post?.data?.title}
        </h1>
        {/* author & tag */}
        <Flex className="justify-between items-center pb-4">
          <div>
            <p>Author : {post?.data?.owner?.username}</p>
            <p>
              Created at :&nbsp;
              {post?.data?.created_at && formatTime(post?.data?.created_at)}
            </p>
          </div>
          <Flex gap="8px 4px" wrap>
            {post?.data?.tags &&
              post?.data?.tags?.map((val: string, index: number) => (
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
        <p>{post?.data?.content ? post?.data?.content : "No content"}</p>
        {/* comment */}
        <Comments postIdProp={postId} />
        <hr />
      </div>
    </div>
  );
};
export default PostDetail;
