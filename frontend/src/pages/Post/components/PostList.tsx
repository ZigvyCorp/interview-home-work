import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination, Col, Row, PaginationProps, Input, Skeleton } from "antd";
import { get } from "lodash";

import { PostItem } from "./../../../components/PostItem";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { fetchPostAsync } from "../../../redux/saga/postSaga";
const { Search } = Input;

const PostList: React.FC = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data: postsState, loading } = useAppSelector(
    (state) => state.post.posts
  );

  const renderPosts = useCallback(() => {
    return postsState?.items.map((p) => {
      return (
        <PostItem
          key={p.id}
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
  }, [postsState]);

  useEffect(() => {
    handleFetchPost();
  }, [limit, page, keyword]);

  const handleFetchPost = () => {
    dispatch(fetchPostAsync({ limit, page, keyword }));
  };

  const onChange: PaginationProps["onChange"] = (pageNumber) => {
    setPage(pageNumber);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Search
          enterButton="Search"
          placeholder="Search posts by title"
          onSearch={(value) => {
            setKeyword(value);
          }}
        />
      </Col>
      <Col span={24}>
        <Skeleton loading={loading} paragraph={{ rows: 3 }}>
          {renderPosts()}
        </Skeleton>
      </Col>
      <Col span={24}>
        <Pagination
          style={{ float: "right" }}
          size="default"
          current={get(postsState, "meta.currentPage")}
          pageSize={limit}
          total={get(postsState, "meta.totalItems")}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export { PostList };
