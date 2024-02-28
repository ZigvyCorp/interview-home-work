import { useEffect } from "react";
import { PostList } from "../components/Post/PostList";
import { useDispatch } from "react-redux";
import { fetchBlog, fetchComment } from "../redux/actions";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog());
    dispatch(fetchComment());
  }, []);
  return (
    <div className="flex w-11/12  h-full flex-row ">
      <div className="flex w-full justify-center">
        <PostList />
      </div>
    </div>
  );
};
