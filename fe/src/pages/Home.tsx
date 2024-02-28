import React, { useEffect } from "react";
import MLayout from "../layout/Index";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  PostState,
  gettingMorePosts,
  gettingPosts,
} from "../redux/reducer/postReducer";
import PostComponent from "../components/PostComponent";
import { gettingComments } from "../redux/reducer/commentReducer";
import { Spin } from "antd";

const Home = () => {
  const postState = useAppSelector(PostState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(gettingPosts({ offset: 0, limit: 2 }));
    dispatch(gettingComments());
  }, [dispatch]);

  useEffect(() => {
    function handleScroll() {
      if (
        postState?.isLoading ||
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        (postState.data?.length || 0) >= (postState.pagination?.total || 0)
      ) {
        return;
      } else {
        dispatch(
          gettingMorePosts({
            offset:
              (postState.pagination?.offset || 0) +
              (postState.pagination?.limit || 0),
            limit: 2,
          })
        );
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, postState.data?.length, postState?.isLoading, postState.pagination?.limit, postState.pagination?.offset, postState.pagination?.total]);

  return (
    <MLayout>
      {postState.data &&
        postState.data?.map((post) => (
          <PostComponent key={post.id} post={post} />
        ))}
      {postState.isLoading && (
        <div className="flex justify-center">
          <Spin />
        </div>
      )}
    </MLayout>
  );
};

export default Home;
