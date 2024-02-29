import { IComment, IPost, IUser } from "@/common/@types/types";
import { ROUTES_PATH } from "@/common/enum/routes.enum";
import Comment from "@/components/Comment/Comment";
import commentApi from "@/features/comment/comment.service";
import postApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import { Tooltip } from "antd";
import React, { useLayoutEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const [post, setPost] = useState<IPost>();
  const [author, setAuthor] = useState<IUser>();
  const [comments, setComments] = useState<IComment[] | undefined>();
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);
  const [iSloading, setISloading] = useState<boolean>(true);

  const { postId } = useParams();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!postId) navigate(ROUTES_PATH.PAGE_NOT_FOUND);
    else {
      const fetchData = async () => {
        setISloading(true);
        try {
          const [postsRes, commentsRes] = await Promise.all([
            postApi.getPostById(postId),
            commentApi.getCommentsByPostId(postId),
          ]);
          const authorRes = await userApi.getUserById(postsRes.userId);

          setAuthor(authorRes);
          setPost(postsRes);
          setComments(commentsRes);
        } catch (error) {
          navigate(ROUTES_PATH.PAGE_NOT_FOUND);
        } finally {
          setISloading(false);
        }
      };
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-vh-100">
      <div className="container">
        {iSloading ? (
          <div className="loading d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" role="output" />
          </div>
        ) : (
          <>
            <h1 className="text-center mt-5 fw-bold">{post?.title}</h1>
            <div className="mt-5">
              <p className="fs-2 fw-bolder mb-0">{author?.name}</p>
              <p className="fw-bolder fst-italic">Created at: Sep 20, 2024</p>
            </div>
            <p className="fs-2 mt-5">{post?.body}</p>

            {/* comments render */}
            {comments && (
              <div className="comments mt-5">
                <div className="border-bottom">
                  <Tooltip title="Đóng/Mở danh sách bình luận!">
                    <button
                      className="border-0 bg-white w-vw-100"
                      onClick={() => setIsOpenComment((prev) => !prev)}
                    >
                      {comments.length} replies
                    </button>
                  </Tooltip>
                </div>

                {isOpenComment && (
                  <div className="mt-3">
                    {comments.map((cmt) => (
                      <Comment key={cmt.id} comment={cmt} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
