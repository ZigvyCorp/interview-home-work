import { Spin } from "antd";
import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/Post/Post";
import useOnScreen from "../../hooks/useOnScreen";
import { getPosts } from "../../store/actions/post.action";
import { RootState } from "../../store/reducers";
import { PostType } from "../../types";
import "./Home.scss";

const Home = () => {
  const [page, setPage] = useState(1);
  const posts: PostType[] = useSelector((state: RootState) => state.post.posts);
  const total: number = useSelector((state: RootState) => state.post.total);
  const loading: boolean = useSelector((state: RootState) => state.post.loading);
  const [ref, visible]: any = useOnScreen({ threshold: 0.5 });
  const dispatch = useDispatch();
  useEffect(() => {
    if (total > page * 3 || page === 1) {
      dispatch(getPosts(page));
    } else if (page > 1) {
      alert("No more posts to display");
    }
  }, [page, total]);
  useEffect(() => {
    if (visible && total > page * 3) {
      setPage((prev) => prev + 1);
    }
  }, [visible]);
  console.log({ visible, ref, total });

  return (
    <div className="home">
      <Suspense fallback={<Spin />}>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </Suspense>
      {posts.length && (
        <div className="bottom" ref={ref}>
          {loading && <Spin />}
        </div>
      )}
    </div>
  );
};

export default Home;
