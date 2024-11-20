import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../store/actions/post";
import Pagination from "../components/Pagination";
import PostItem from "../components/PostItem";
import SearchBar from "../components/SearchBar";

const PostsPage = () => {
  const posts = useSelector((state) => state.post.data);
  const loading = useSelector((state) => state.post.loading);
  const pagination = useSelector((state) => state.post.pagination);
  const dispatch = useDispatch();

  const onChangePage = (page) => {
    dispatch(getPosts({ page, limit: process.env.REACT_APP_POSTS_LIMIT }));
  };

  useEffect(() => {
    dispatch(getPosts({ page: 1 }));
  }, [dispatch]);

  return (
    <Fragment>
      <div>
        <SearchBar />
        {loading && <p className="text-center">Loading...</p>}
        {!loading &&
          posts.map((p, index) => (
            <PostItem
              comments={p.comments}
              userName={p.user.name}
              id={p.id}
              title={p.title}
              body={p.body}
              key={`post-${index}`}
            />
          ))}
        <Pagination data={pagination} onChangePage={onChangePage} />
      </div>
    </Fragment>
  );
};

export default PostsPage;
