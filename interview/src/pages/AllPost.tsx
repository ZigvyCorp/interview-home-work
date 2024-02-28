import { useState, useEffect, useCallback, useRef } from "react";
import Post from "../components/Post/Post";
import { tags } from "../ultis/tagData";
import Header from "../layouts/component/header";
import { useDispatch, useSelector } from "react-redux";
import { actiongetAllPosts, getSinglePost } from "../common/actions/post";
import { useNavigate } from "react-router-dom";
import { Post as PostModel } from "../common/models/post";

const AllPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((value: any) => value.post.allPosts);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const loader = useRef(null);

  useEffect(() => {
    dispatch(actiongetAllPosts());
  }, []);

  useEffect(() => {
    if (posts.length) {
      setIsLoading(false);
    }
  }, [posts]);

  const handleObserver = useCallback((entries: any[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    const LIMIT = 3;
    const newVisiblePosts = posts.slice(0, page * LIMIT);
    setVisiblePosts(newVisiblePosts);
  }, [page, posts]);

  const navigate = useNavigate();

  const handleRouteToSinglePage = (postId: number) => {
    dispatch(getSinglePost(postId));
    navigate(`/posts/${postId}`);
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center">
          Loading...
        </div>
      ) : (
        visiblePosts.map((post: PostModel) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            authorId={post.userId}
            content={post.body}
            comments={post.comments}
            tags={tags}
            user={post.user}
            onClick={() => {
              handleRouteToSinglePage(post.id);
            }}
          />
        ))
      )}
      <div ref={loader} />
    </div>
  );
};

export default AllPost;
