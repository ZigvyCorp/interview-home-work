import { useState, useEffect, useRef } from "react";
import MainLayout from "../../layouts/MainLayout";
import PostComment from "./components/PostComment";
import PostContent from "./components/PostContent";
import PostHeader from "./components/PostHeader";
import { usePost } from "./hooks/usePost";
import { PostDataType } from "./model";
import PostModal from "./components/PostModal";
import Loading from "../../components/Loading";
import Search from "../../components/Search";

export default function PostPage() {
  const { postData, fetchMorePosts } = usePost();
  const [showComment, setShowComment] = useState<boolean>(false);
  const [postId, setPostId] = useState<string>();
  // const observer = useRef<IntersectionObserver | null>(null);
  console.log("postData", postData);
  const lastPostRef = useRef<HTMLDivElement | null>(null);

  const showCommentModal = () => {
    setShowComment(!showComment);
  };

  const getPostId = (postId: string) => {
    setPostId(postId);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      fetchMorePosts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MainLayout>
      <Search />
      {!postData ? (
        <Loading />
      ) : postData && postData.length > 0 ? (
        <>
          {postData.map((post: PostDataType, index: number) => (
            <div
              key={index}
              ref={index === postData.length - 1 ? lastPostRef : null}
              className="p-3 border-bottom"
            >
              <PostHeader title={post.title} user={post.title} _id={post._id} />
              <PostContent body={post.body} />
              <PostComment
                countComment={post.countComment}
                handleShow={showCommentModal}
                getPostId={getPostId}
                postId={post._id}
              />
            </div>
          ))}
        </>
      ) : (
        <p>No posts available.</p>
      )}
      <PostModal
        handleClose={showCommentModal}
        postId={postId}
        show={showComment}
      />
    </MainLayout>
  );
}
