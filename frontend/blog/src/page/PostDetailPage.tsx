import { useParams } from "react-router-dom";
import { PostDetail } from "../components/Post/PostDetail";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogDetailRequest, fetchComment } from "../redux/actions";

export const PostDetailPage = () => {
  const blog = useSelector((state: RootState) => state.blogs.data);
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlogDetailRequest(params.id));
    dispatch(fetchComment());
  }, [params]);
  return (
    <div className="flex w-11/12  h-full flex-row">
      <div className="flex w-full justify-center">
        <PostDetail
          id={`${blog.id}`}
          content={`${blog.content}`}
          created_at={`${blog.created_at}`}
          owner={`${blog.owner}`}
          tags={blog.tags}
        />
      </div>
    </div>
  );
};
