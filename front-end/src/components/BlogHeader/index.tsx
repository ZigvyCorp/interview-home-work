import React from "react";

import { Header } from "antd/es/layout/layout";

import { Flex, Input, Typography, theme } from "antd";

import { HighlightOutlined } from "@ant-design/icons";
import { debounce } from "lodash";
import { useDispatch } from "react-redux";
import { searchPostsRequest } from "../../actions/posts";

const { Search } = Input;

function BlogHeader({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { token } = theme.useToken();
  const dispatch = useDispatch();

  const debounceSearchRequest = React.useCallback(
    (search: string) => {
      const request = debounce(async (search: string) => {
        dispatch(searchPostsRequest(0, search));
      }, 500);

      request(search);
    },
    [dispatch]
  );

  return (
    <Header
      style={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        minWidth: token.screenLG,
        padding: 0,
      }}
    >
      <Flex
        style={{
          border: "1px solid #f0f0f0",
          padding: "8px 12px",
          borderRadius: "6px",
        }}
        justify="space-between"
        align="center"
      >
        <Flex gap={"middle"} align="center">
          <Typography.Title
            level={3}
            style={{
              margin: 0,
            }}
          >
            <HighlightOutlined />
          </Typography.Title>
          <Typography.Title
            level={5}
            style={{
              margin: 0,
              flexShrink: 0,
            }}
          >
            Blogs
          </Typography.Title>

          <Search
            placeholder="Search by title"
            allowClear
            enterButton="Search"
            size="middle"
            onChange={(e) => {
              setSearch(e.target.value);
              debounceSearchRequest(e.target.value);
            }}
          />
        </Flex>

        <Typography.Title
          level={5}
          style={{
            margin: 0,
          }}
        >
          Huu Phuong
        </Typography.Title>
      </Flex>
    </Header>
  );
}

export default BlogHeader;
