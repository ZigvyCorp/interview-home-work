/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Input, Pagination } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import { fetchPostsRequest } from "../store/actions/postActions";
const { Search } = Input;

const Homepage = () => {
  const { list, total, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [search, setSearch] = useState("");

  const renderPlaceholder = useCallback(() => {
    return [1, 2, 3, 4, 5, 6].map((e) => <Card key={`card-loading-${e}`} className="w-full mb-5" loading={true} />);
  }, []);

  const onPaginationChange = (pageNumber, pageSizeNumber) => {
    setCurrentPage(Number(pageNumber));
    if (pageSizeNumber) {
      setPageSize(Number(pageSizeNumber));
    }

    dispatch(fetchPostsRequest(pageSizeNumber || pageSize, pageNumber, search));
  };

  const onSearch = (value) => {
    setSearch(value);
    dispatch(fetchPostsRequest(pageSize, currentPage, value));
  };

  const onSearchChange = (e) => {
    if (!e?.target.value) {
      setSearch("");
      dispatch(fetchPostsRequest(pageSize, currentPage, ""));
    }
  };

  const renderPostList = useCallback(() => {
    return (
      <div className="p-10 mx-auto max-w-[1100px]">
        <Search placeholder="Search post" className="mb-5" onChange={onSearchChange} onSearch={onSearch} size="large" loading={loading} />

        {loading ? (
          renderPlaceholder()
        ) : error ? (
          <div className="text-red-500 font-bold text-xl text-center">Oops! Can not load posts.</div>
        ) : (
          <div className=" grid md:grid-cols-2 gap-5">
            {!list.length && <div>No posts found!</div>}
            {list?.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10">{list && list.length ? <Pagination pageSize={pageSize} current={currentPage} showQuickJumper defaultCurrent={1} total={total} onChange={onPaginationChange} /> : null}</div>
      </div>
    );
  }, [list, pageSize, currentPage]);

  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, []);

  return (
    <>
      <div className="mt-10 font-bold text-[30px] text-center">Posts</div>
      {renderPostList()}
    </>
  );
};

export default Homepage;
