/* eslint-disable react-hooks/exhaustive-deps */
import { Card, Input, Pagination } from "antd";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "../components/PostItem";
import { fetchPostsRequest } from "../store/actions/postActions";
const { Search } = Input;

const Homepage = () => {
  const { list, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const renderPlaceholder = useCallback(() => {
    return [1, 2, 3, 4, 5, 6].map((e) => <Card key={`card-loading-${e}`} className="w-full mb-5" loading={true} />);
  }, []);

  const onPaginationChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  const onSearch = (value) => {
    console.log(value);
  };

  const renderPostList = useCallback(() => {
    return (
      <div className="p-10 mx-auto max-w-[1100px]">
        {list && list.length ? <Search placeholder="Search post" className="mb-5" onSearch={onSearch} size="large" loading={loading} /> : null}

        {loading ? (
          renderPlaceholder()
        ) : error ? (
          <div className="text-red-500 font-bold text-xl text-center">Oops! Can not load posts.</div>
        ) : (
          <div className=" grid md:grid-cols-2 gap-5">
            {list.map((post) => (
              <PostItem post={post} key={post.id} />
            ))}
          </div>
        )}

        <div className="flex justify-center mt-10">{list && list.length ? <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onPaginationChange} /> : null}</div>
      </div>
    );
  }, [list]);

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
