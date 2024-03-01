import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsRequest, selectPosts } from "../redux/posts.reducer";
import PostItem from "../components/PostItem";
import { Empty, Flex, Pagination } from "antd";
import styled from "styled-components";
import { defaultQuery } from "constant";

export const PostContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .ant-divider {
    border-color: #333;
  }
`;

const PostPage = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState(defaultQuery);
  const { posts = {} } = useSelector(selectPosts);

  const { items = [], page = 1, totalItems = 0 } = posts;

  useEffect(() => {
    dispatch(fetchPostsRequest(query));
  }, [dispatch, query]);

  return (
    <PostContainerStyled>
      <Flex vertical="vertical">
        {items?.map((post) => (
          <PostItem key={post.id} post={post}></PostItem>
        ))}
        {!items?.length && <Empty />}
      </Flex>
      <Flex justify="center">
        {!!items?.length && (
          <Pagination
            onChange={(page, limit) => {
              setQuery((prev) => ({ ...prev, page, limit }));
            }}
            current={page}
            total={totalItems}
          />
        )}
      </Flex>
    </PostContainerStyled>
  );
};

export default PostPage;
