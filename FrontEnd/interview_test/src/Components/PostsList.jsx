import { Flex, Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../features/dataSlice.js";

import Post from "./Post";

const PostsList = () => {
  const dispatch = useDispatch();
  const postsState = useSelector((state) => state.dataSlice);
  const { isLoading, posts, totalDocuments } = postsState;

  const [pageIndex, setPageIndex] = useState(1);

  useEffect(() => {
    dispatch(fetchDataRequest(pageIndex));
  }, [pageIndex, dispatch]);

  const handleOnChangePageIndex = (index) => {
    setPageIndex(index);
  };

  const renderPosts = posts.map((post) => {
    return (
      <React.Fragment key={post._id}>
        <Post post={post} />
        <div className="h-[3px] bg-black"></div>
      </React.Fragment>
    );
  });

  return (
    <Flex vertical gap={30}>
      {isLoading ? (
        <p className="text-[20px]">Loading.....</p>
      ) : (
        <>
          {renderPosts}
          <Pagination
            align="end"
            defaultCurrent={pageIndex}
            total={totalDocuments}
            pageSize={3}
            onChange={handleOnChangePageIndex}
          />
        </>
      )}
    </Flex>
  );
};

export default PostsList;
