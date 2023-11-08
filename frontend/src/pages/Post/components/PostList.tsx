import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, Col, Row, PaginationProps } from "antd";

import { IPost } from "../../../types";
import { PostItem } from "./../../../components/PostItem";

const PostList: React.FC<{ posts: IPost[] }> = (props) => {
  const { posts } = props;
  const navigate = useNavigate();
  const renderPosts = useCallback(() => {
    return posts.map((p) => {
      return (
        <PostItem
          post={p}
          extra={
            <a
              onClick={() => {
                navigate(`/post/${p.id}`);
              }}
            >
              Detail
            </a>
          }
        />
      );
    });
  }, [props.posts]);

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <Row>
      <Col span={24}>{renderPosts()}</Col>
      <Col span={24}>
        <Pagination style={{ float: "right" }} size="default" />
      </Col>
    </Row>
  );
};

export { PostList };
