import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
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
  const [searchContent, setSearchContent] = useState("");
  const searchedPosts = posts.filter((item) =>
    item?.title
      .trim()
      .toLowerCase()
      .includes(searchContent.trim().toLowerCase())
  );
  const currentPosts = searchedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    dispatch(getPostFetch(posts));
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOnChange = (e) => {
    setSearchContent(e.target.value);
  };

  return (
    <div className="container py-5">
      <div className={`${isMobile ? "w-75" : "w-25"} input-group mb-3 mx-auto`}>
        <input
          type="text"
          className="form-control"
          placeholder="find posts..."
          onChange={(e) => {
            handleOnChange(e);
          }}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
      <Posts data={currentPosts} loading={loading} error={error} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={searchedPosts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default HomePage;
