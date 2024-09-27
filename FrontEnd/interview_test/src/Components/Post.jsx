/* eslint-disable react/prop-types */
import { Col, Flex, Row, Space, Tag, Typography } from "antd";
import dayjs from "dayjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommentsCollapse from "./CommentsCollapse.jsx";

const { Title, Paragraph } = Typography;

const Post = ({ post }) => {
  const { postId, title, author, body, createdAt, tag } = post;
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate()

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderTag = tag?.map((item, index) => {
    const colors = ["magenta", "red", "volcano", "orange", "blue", "gold"];
    const tagColor = index > colors.length ? colors[index % colors.length] : colors[index]
    return (
      <Col key={index} span={6}>
        <Tag className="px-[15px]" color={tagColor}>
          {item}
        </Tag>
      </Col>
    );
  });

  return (
    <Space className="px-[50px]" direction="vertical">
      <div onClick={() => navigate(`/blog/${postId}`)}>
        <Title className="text-center hover:opacity-80 cursor-pointer">{title}</Title>
      </div>
      <Flex justify="space-between">
        <div className="text-[20px] font-normal">
          <p>Author : {author?.fullName}</p>
          <p>Created At : {dayjs(createdAt).format("MMMM-DD-YYYY")}</p>
        </div>

        <div className="w-[20%]">
          <Row gutter={[0, 5]} justify="end" wrap>
            {renderTag}
          </Row>
        </div>
      </Flex>
      <Paragraph className="text-[25px] font-semibold">
        {body.length < 100 ? (
          body
        ) : (
          <>
            {isExpanded ? body : `${body.substring(0, 100)}...`}
            <span onClick={toggleExpand} className="cursor-pointer text-[blue] text-[16px]">
              {isExpanded ? "See less" : "See more"}
            </span>
          </>
        )}
      </Paragraph>
      <CommentsCollapse postId={postId} />
    </Space>
  );
};

export default Post;
