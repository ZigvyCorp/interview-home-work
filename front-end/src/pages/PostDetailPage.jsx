import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../redux/actions";

export default function PostDetailPage() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostById(2));
  }, [dispatch]);
  return (
    <>
      <p>This is post id {post?.id || ""}</p>
      <p>The second post's title is {post?.title || ""}</p>
    </>
  );
}
