import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  selectAuthor,
  selectAuthorErrorMessage,
  selectAuthorIsLoading,
} from "@/store/features/author/selector";
import { getAuthor } from "@/store/features/author/slice";
import {
  selectBlog,
  selectErrorMessage,
  selectIsLoading,
  selectReplies,
} from "@/store/features/blog/selector";
import { getBlog, getReply } from "@/store/features/blog/slice";
import { Blog, ErrorText, Spinner } from "@/components/atoms";

export const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog(id));
    dispatch(getReply(id));
    dispatch(getAuthor(id));
  }, [dispatch, id]);

  const blog = useSelector(selectBlog);
  const replies = useSelector(selectReplies);
  const author = useSelector(selectAuthor);
  const blogIsLoading = useSelector(selectIsLoading);
  const blogError = useSelector(selectErrorMessage);
  const authorIsLoading = useSelector(selectAuthorIsLoading);
  const authorError = useSelector(selectAuthorErrorMessage);

  return (
    <div className="p-2">
      <a className="btn btn-light my-1" onClick={() => navigate(-1)}>
        Go Back
      </a>
      <Spinner isLoading={blogIsLoading || authorIsLoading} />
      <ErrorText text={blogError || authorError} />
      <Blog
        author={author?.name || ""}
        content={blog?.content || ""}
        createdAt={blog?.createdAt || ""}
        id={blog?.id || 0}
        replyList={replies || []}
        tagList={blog?.tagList || []}
        title={blog?.title || ""}
      />
    </div>
  );
};
