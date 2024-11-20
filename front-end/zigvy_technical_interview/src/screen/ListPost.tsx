import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/actions/post/postsActions";
import { RootState } from "../redux/store";
import { Pagination } from "react-bootstrap";
import { numberOfPage, paginationLibs } from "../libs/pagination";

import ErrorScreen from "./Error";
import LoadingScreen from "./LoadingScreen";
import BlogCard from "../component/BlogCard";
import { searchPost } from "../libs/filterPost";

const ListPost = ({ searchValue }: { searchValue: string }) => {
  const disPatch = useDispatch();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  const { loading, posts, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    disPatch(fetchPostRequest());
  }, [disPatch]);

  const currentPosts = paginationLibs({
    currentPage: currentPage,
    itemsPerPage: postsPerPage,
    posts: posts,
  });

  const pageNumber = numberOfPage({ posts: posts, itemperPage: postsPerPage });
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const filterPost = searchPost({
    posts: currentPosts,
    searchValue: searchValue,
  });

  const Loading = () => {
    return <>{loading ? <LoadingScreen /> : ""}</>;
  };

  const Error = () => {
    return <>{error ? <ErrorScreen /> : ""}</>;
  };

  return (
    <Fragment>
      <Loading />
      <Error />
      {filterPost?.map((value, index) => (
        <div key={index}>
          <BlogCard
            content={value.body}
            title={value.title}
            postId={value.id}
          />
        </div>
      ))}
      <Pagination>
        {pageNumber.map((number) => (
          <Pagination.Item
            key={number}
            active={number === currentPage}
            onClick={() => paginate(number)}
          >
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </Fragment>
  );
};

export default ListPost;
