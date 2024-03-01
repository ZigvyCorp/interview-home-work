import { Typography, Divider, Flex, Tag } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { capitalizeFirstLetter, getFirstWords } from "utils/string.utils";
import PostComment from "./PostComment";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const PostStyled = styled.div`
  padding: 0 10px;

  .post-info {
    font-size: 1.2rem;
    font-weight: 600;
    &:not(:last-child) {
      margin-bottom: 6px;
    }
  }
  .tags-wrapper {
    max-width: 30%;
  }
  .ant-tag {
    margin-right: 0;
  }
  .post-content {
    font-size: 1.1rem;
    margin-top: 12px;
    font-weight: 400;
    line-height: 1.2;
  }
  .post-title {
    cursor: pointer;
  }
`;

const ReplyStyled = styled(Flex)`
  margin-top: 10px;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const CommentsStyled = styled(Flex)`
  margin: 10px 0 0 10px;
`;

const PostItem = ({ post, viewDetail }) => {
  const [showComment, setShowComment] = useState(viewDetail);
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <PostStyled>
        <Title
          className="text-center post-title"
          level={3}
          onClick={() => {
            !viewDetail && navigate(`/posts/${post.id}`);
          }}>
          {capitalizeFirstLetter(post.title)}
        </Title>
        <Flex justify="space-between">
          <div>
            <p className="post-info">Author: {post.author}</p>
            <p className="post-info">Created at: {post.createdAt}</p>
          </div>
          <Flex wrap="wrap" gap="small" className="tags-wrapper" align="start">
            {post.tags?.map((tag, index) => (
              <Tag key={index} color={tag.color}>
                {tag.tag}
              </Tag>
            ))}
          </Flex>
        </Flex>
        <p className="post-content">{capitalizeFirstLetter(getFirstWords(post.body))}</p>
        {/* 100 first characters are too short -> 100 first words  */}
        <div>
          <ReplyStyled
            align="start"
            justify="center"
            className="w-full"
            vertical
            onClick={() => setShowComment((prev) => !prev)}>
            <p style={{ userSelect: "none" }}>{post.commentCount} replies</p>
          </ReplyStyled>
          {showComment && (
            <CommentsStyled gap="small" vertical>
              {post?.comments?.map((comment) => (
                <PostComment key={comment.id} comment={comment} />
              ))}
            </CommentsStyled>
          )}
        </div>
      </PostStyled>
      {!viewDetail && <Divider />}
    </React.Fragment>
  );
};

export default PostItem;
