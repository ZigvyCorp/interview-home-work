import { IComment, IPost, IUser } from "@/common/@types/types";
import Comment from "@/components/Comment/Comment";
import commentApi from "@/features/comment/comment.service";
import postApi from "@/features/post/post.service";
import userApi from "@/features/user/user.service";
import { Tooltip } from "antd";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<IComment[] | undefined>();
  const [author, setAuthor] = useState<IUser | null>();
  const [isOpenComment, setIsOpenComment] = useState<boolean>(false);

  useLayoutEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const post = await postApi.getPostById(postId ?? "");
        const user = await userApi.getUserById(post?.userId ?? "");
        if (!post) return setIsError(true);
        setAuthor(user);
        setPost(post);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await commentApi.getCommentsByPostId(postId ?? "");
        setComments(comments);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [postId]);

  return isError ? (
    <p className="fs-1 fw-bold text-center mt-5">Không tìm thấy bài viết!</p>
  ) : (
    <div className="min-vh-100">
      <div className="container">
        {isLoading ? (
          <div className="loading d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" role="output" />
          </div>
        ) : (
          <>
            <h1 className="text-center mt-5 fw-bold">{post?.title}</h1>
            <div className="mt-5">
              <p className="fs-2 fw-bolder mb-0">{author?.name ?? "Unknows"}</p>
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
