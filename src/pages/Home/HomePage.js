import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";
import Posts from "../../Components/Posts/Posts";
import { getPostFetch } from "../../redux/actions/postAction";

function HomePage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer.posts);
  const loading = useSelector((state) => state.postReducer.loading);
  const error = useSelector((state) => state.postReducer.error);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(getPostFetch(posts));
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container py-5">
      <Posts data={currentPosts} loading={loading} error={error} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default HomePage;
