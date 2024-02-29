import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItems from "../PostItems/PostItems";
import { Card, Space } from "antd";
import {
  fetchPostsStart,
  fetchFilterPostsStart,
} from "../../redux/post/postSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading, totalData, filterData, inputTitle } = useSelector(
    (state) => state.posts
  );
  // console.log({ totalData });
  useEffect(() => {
    dispatch(fetchPostsStart({ page: 1, limit: 5 })); // Dispatch action để fetch posts từ API khi component được mount
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchPostsStart({ limit: 5 })); // Dispatch action để fetch posts từ API khi component được mount
  // }, []);
  // console.log(totalData.length);
  const fetchMoreData = () => {
    let currentPage;
    if (totalData.length > 0) {
      // console.log(totalData.length)
      currentPage = Math.floor(totalData.length / 5) + 1;
    } else {
      currentPage = 1;
    }

    dispatch(fetchPostsStart({ page: currentPage, limit: 5 })); // Dispatch action để fetch posts từ API khi component được mount
  };
  const fetchMoreFilterData = () => {
    let currentPage;
    if (filterData.length > 0) {
      // console.log(totalData.length)
      currentPage = Math.floor(filterData.length / 5) + 1;
      // console.log(currentPage);
    } else {
      currentPage = 1;
    }

    dispatch(
      fetchFilterPostsStart({ title: inputTitle, page: currentPage, limit: 5 })
    ); // Dispatch action để fetch posts từ API khi component được mount
  };
  return (
    <div className="flex justify-center items-center mt-16 py-4">
      {!inputTitle && filterData.length == 0 ? (
        <InfiniteScroll
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          dataLength={totalData.length}
          // dataLength={1000}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Space direction="vertical" size={16}>
            {totalData?.map((post) => {
              return (
                <Card key={post._id} style={{ width: 800 }}>
                  <PostItems post={post} />
                </Card>
              );
            })}
          </Space>
        </InfiniteScroll>
      ) : (
        <InfiniteScroll
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          dataLength={filterData.length}
          // dataLength={1000}
          next={fetchMoreFilterData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Space direction="vertical" size={16}>
            {filterData?.map((post) => {
              return (
                <Card key={post._id} style={{ width: 800 }}>
                  <PostItems post={post} />
                </Card>
              );
            })}
          </Space>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Posts;
