import { useEffect, useState, useMemo } from "react";
import { Pagination, AutoComplete, Input, Spin } from "antd";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BlogList.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import {
  getPostsRequest,
} from "~/redux/actions/postActions";
import {
  selectPostsLoading,
  selectPosts,
} from "~/redux/reducers/postReducer";

import Post from "./Post";
import useDebounce from "~/hooks/useDebounce";

const cx = classNames.bind(styles);
const PAGE_SIZE = 3;

function BlogList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectPostsLoading);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(encodeURIComponent(searchText), 500);
  const filters = useMemo(() => ({
    page: currentPage,
    perPage: PAGE_SIZE,
    title: debouncedValue,
  }), [currentPage, debouncedValue]);
  
  useEffect(() => {
    dispatch(getPostsRequest(filters));
  }, [dispatch, filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleChangeSearch = (value) => {
    setCurrentPage(1);
    setSearchText(value);
  };

  const handleAutoCompleteSelect = (value) => {
    setSearchText(value);
    setCurrentPage(1);
  };

  return (
    <div className={cx("wrapper")}>
      <Row justify="center">
        <Col xs={24} lg={12} className={cx("search")}>
          <AutoComplete
            style={{ width: "100%" }}
            value={searchText}
            onSelect={handleAutoCompleteSelect}
            onSearch={handleChangeSearch}
            placeholder="Search post by title"
          >
            <Input suffix={<SearchOutlined />} />
          </AutoComplete>
        </Col>
      </Row>
      {isLoading ? (
        <div className="fix-center">
          <Spin justify="center" size="large" />
        </div>
      ) : (
        <Post
          posts={posts.data || []}
        />
      )}

      {!isLoading && (
        <Pagination
          className="center"
          current={currentPage}
          total={
            posts.total || 0
          }
          pageSize={PAGE_SIZE}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default BlogList;
