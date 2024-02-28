import { IComment, IPost, IUser } from "@/common/@types/types";
import { ROUTES_PATH } from "@/common/enum/routes.enum";
import commentApi from "@/features/comment/comment.service";
import postApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const [post, setPost] = useState<IPost>();
  const [author, setAuthor] = useState<IUser>();
  const [comments, setComments] = useState<IComment[]>([]);
  const [iSloading, setIsLoading] = useState<boolean>(true);

  const { blogId } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!blogId) navigate(ROUTES_PATH.PAGE_NOT_FOUND);
    else {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const [postsRes, commentsRes] = await Promise.all([
            postApi.getPostById(blogId),
            commentApi.getCommentsByPostId(blogId),
          ]);
          const authorRes = await userApi.getUserById(postsRes.userId);

          setAuthor(authorRes);
          setPost(postsRes);
          setComments(commentsRes);
        } catch (error) {
          navigate(ROUTES_PATH.PAGE_NOT_FOUND);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-vh-100">
      <div className=" container">
        {iSloading ? (
          <div className="loading d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" role="status" />
          </div>
        ) : (
          <>
            <h1 className="text-center mt-5 fw-bold">{post?.title}</h1>
            <div>
              <p className="fs-2 fw-bolder mb-0">{author?.name}</p>
              <p className="fw-bolder fst-italic">Created at: Sep 20, 2024</p>
            </div>
            <p className="fs-2 mt-5">{post?.body}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
