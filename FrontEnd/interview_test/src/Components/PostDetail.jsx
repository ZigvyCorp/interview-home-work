import { ArrowLeftOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Divider, Flex, Typography } from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

const { Title, Paragraph } = Typography;

import { useNavigate, useParams } from "react-router";
import { getPostById } from "../services/post.service";
import CommentsCollapse from "./CommentsCollapse";

const PostDetail = () => {
  const navigate = useNavigate();
  const urlParam = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPostById = async () => {
      try {
        const response = await getPostById(urlParam.postId);
        setPost(response.data.post);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostById();
  }, [urlParam.postId]);

  const { title, body, author, createdAt } = post;

  return (
    <div className="px-[100px] mt-[20px]">
      <button
        onClick={() => navigate(`/`)}
        className="flex items-center mb-[20px] gap-2 hover:underline"
      >
        <ArrowLeftOutlined />
        Back
      </button>
      <Flex justify="space-between" align="center">
        <div className="flex items-center gap-3 text-base">
          <Avatar icon={<UserOutlined />} src={author?.avatar} size={40} />
          <span className="hover:opacity-70 cursor-pointer text-[20px] font-bold">
            {author?.fullName}
          </span>
        </div>
        <p>{dayjs(createdAt).format("MMMM-DD-YYYY")}</p>
      </Flex>
      <Divider className="bg-[lightgray] h-[2px]" />
      <Title>{title}</Title>
      <Paragraph className="text-[25px]">{body}</Paragraph>
      <CommentsCollapse postId={urlParam.postId} />
    </div>
  );
};

export default PostDetail;
