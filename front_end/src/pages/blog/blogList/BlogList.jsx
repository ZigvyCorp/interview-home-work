import { useEffect, useState } from "react";
import { Pagination, AutoComplete, Input, Spin } from "antd";
import { Col, Row } from "antd";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";

import styles from "./BlogList.module.scss";
import { SearchOutlined } from "@ant-design/icons";
import {
  getPostsRequest,
  searchPostsRequest,
} from "~/redux/actions/postActions";
import {
  selectLoading,
  selectPosts,
  selectSearchResults,
} from "~/redux/reducers/postReducer";
import Post from "./Post";
import useDebounce from "~/hooks/useDebounce";

const cx = classNames.bind(styles);
const PAGE_SIZE = 2;

function BlogList() {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectLoading);
  const searchResult = useSelector(selectSearchResults);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(encodeURIComponent(searchText), 500);
  useEffect(() => {
    if (searchText) {
      dispatch(searchPostsRequest(debouncedValue, currentPage, PAGE_SIZE));
    } else {
      dispatch(getPostsRequest(currentPage, PAGE_SIZE));
    }
  }, [dispatch, currentPage, debouncedValue]);

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
            dataSource={searchResult?.posts?.map((item) => ({
              value: item.title,
            }))}
            onSelect={handleAutoCompleteSelect}
            onSearch={handleChangeSearch}
            placeholder="Search post by title content"
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
          posts={searchText.length > 0 ? searchResult?.posts : posts?.posts}
        />
      )}

      {!isLoading && (
        <Pagination
          current={currentPage}
          total={
            searchText.length > 0 && searchResult?.totalPosts
              ? searchResult?.totalPosts
              : posts.totalPosts
          }
          pageSize={PAGE_SIZE}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default BlogList;
