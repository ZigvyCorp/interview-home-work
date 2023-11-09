import { Fragment, useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequest } from "../redux/actions/post/postsActions";
import { RootState } from "../redux/store";
import { Pagination } from "react-bootstrap";

const ListPost = ({ searchValue }: { searchValue: string }) => {
  const disPatch = useDispatch();
  const { loading, posts, error } = useSelector(
    (state: RootState) => state.posts
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts?.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    disPatch(fetchPostRequest());
    console.log(posts);
  }, []);
  const filterPost = currentPosts?.filter((post) => {
    if (searchValue === "") {
      return post;
    }
    return post.title.includes(searchValue);
  });

  return (
    <Fragment>
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
        {pageNumbers.map((number) => (
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
