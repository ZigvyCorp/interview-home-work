"use client";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComments,
  fetchPost,
  fetchUsers,
  savePostId,
} from "@/app/server-action/store/actions";
import Post from "@/app/components/Post";
import { randomDate } from "@/constants/helper";

const DetailPost = ({ params }) => {
  const dispatch = useDispatch();
  const [isClient, setIsClient] = useState(false);
  const { slug } = params;
  const randomDay = useMemo(
    () => randomDate(new Date(2000, 0, 1), new Date(2024, 11, 31)),
    [slug]
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPost(slug));
      dispatch(fetchUsers());
      dispatch(fetchComments());
      setIsClient(true);
    };

    fetchData();
  }, [dispatch, slug]);

  useEffect(() => {
    if (isClient) {
      dispatch(savePostId(slug)); // Lưu postId vào localstorge (có thể lưu bất cứ thứ gì)
    }
  }, [dispatch, isClient, slug]);

  const loading = useSelector((state) => state.loading) ?? true;
  const selectedPost = useSelector((state) => state.selectedPost) ?? {};
  const users = useSelector((state) => state.users) ?? [];
  const comments = useSelector((state) => state.comments) ?? [];

  const post = useMemo(() => {
    const user = users.find((user) => user.id === selectedPost.userId);
    const userComments = comments.filter((comment) => comment.postId == slug);
    return {
      ...selectedPost,
      user,
      comments: userComments,
      updateAt: randomDay,
    };
  }, [selectedPost, users, comments, slug, randomDay]);

  if (isClient) {
    if (loading) {
      return (
        <main
          className={` d-flex justify-content-center align-items-center`}
          style={{ minHeight: "100vh" }}
        >
          <div>Loading...</div>
        </main>
      );
    } else {
      return (
        <div>
          <div
            className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1000,
            }}
          >
            <a rel="stylesheet" href="/posts">
              Trang chủ
            </a>
            {/* <SearchBar /> */}
          </div>
          <div style={{ paddingTop: "70px" }}>
            <Post post={post} isDetail={true} />
          </div>
        </div>
      );
    }
  }
};

export default DetailPost;