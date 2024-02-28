import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostItems from "../PostItems/PostItems";
import { Card, Space } from "antd";
import { fetchPostsStart } from "../../redux/post/postSlice";
import { getAllPosts } from "../../api/postsApi";
import InfiniteScroll from "react-infinite-scroll-component";

const Posts = () => {
  const dispatch = useDispatch();
  const { data, loading, totalData } = useSelector((state) => state.posts);
  const [test, setTest] = useState([]);

  useEffect(() => {
    dispatch(fetchPostsStart({ page: 1, limit: 10 })); // Dispatch action để fetch posts từ API khi component được mount
    // console.log("totalData", totalData);
    // setTest(totalData);
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchPostsStart()); // Dispatch action để fetch posts từ API khi component được mount
  // }, [dispatch]);

  const fetchMoreData = () => {
    let currentPage;
    if (totalData.length > 0) {
      currentPage = Math.floor(totalData.length / 10) + 1;
    } else {
      currentPage = 1;
    }
    dispatch(fetchPostsStart({ page: currentPage, limit: 10 })); // Dispatch action để fetch posts từ API khi component được mount
  };
  // console.log({ data });
  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };
  return (
    <>
      <InfiniteScroll
        // dataLength={totalData?.length} //This is important field to render the next data
        // next={fetchMoreData}
        // style={{ display: "flex", flexDirection: "column-reverse" }} //To put endMessage and loader to the top.
        // // inverse={false} //
        // hasMore={true}
        // loader={<h4>Loading...</h4>}
        // scrollableTarget="scrollableDiv"
        // hasMore={true}
        // loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>Yay! You have seen it all</b>
        //   </p>
        // }
        // below props only if you need pull down functionality
        // refreshFunction={fetchMoreData}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>
        //     &#8595; Pull down to refresh
        //   </h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>
        //     &#8593; Release to refresh
        //   </h3>
        // }
        dataLength={totalData.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <Space direction="vertical" size={16}>
            {totalData?.map((post) => {
              return (
                <Card key={post.id} style={{ width: 800 }}>
                  <PostItems post={post} />
                </Card>
              );
            })}
          </Space>
 
      </InfiniteScroll>
    </>
  );
};

export default Posts;
