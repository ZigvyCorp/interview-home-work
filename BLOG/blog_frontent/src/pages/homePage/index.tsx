import { FC, useCallback, useEffect, useRef } from "react";
import {
  getPosts,
  loadMorePostsList,
} from "../../redux/actions/postListActions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPage,
  selectPostList,
  selectPostListLoading,
  selectTotalPages,
} from "../../redux/reducers/postListReducer";
import { SearchPost, PostCard } from "components";

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const inputSearchRef = useRef<HTMLInputElement | null>(null);
  var valueSearch = inputSearchRef.current ? inputSearchRef.current.value : "";
  const postsListItem = useSelector(selectPostList);
  const loading = useSelector(selectPostListLoading);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const callGetPost = () => {
    valueSearch = inputSearchRef.current ? inputSearchRef.current.value : "";
    dispatch(getPosts({ page: 1, search: valueSearch }));
  };

  const callGetPostFilter = () => {
    valueSearch = inputSearchRef.current ? inputSearchRef.current.value : "";
    dispatch(getPosts({ page: 1, search: valueSearch }));
  };

  const hasMore = totalPages < totalPages;
  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;
    const clientHeight = window.innerHeight;
    if (scrollTop + clientHeight >= offsetHeight - 100 && !loading) {
      dispatch(loadMorePostsList());
      dispatch(getPosts({ page: currentPage + 1, search: valueSearch }));
    }
  }, [dispatch, currentPage, loading, hasMore, valueSearch]);

  const handleSearchPost = () => {
    if (inputSearchRef.current !== null) {
      callGetPostFilter();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    callGetPost();
  }, [dispatch]);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center gap-5">
      <div className="d-flex flex-column align-items-center gap-5   justify-content-center">
        <SearchPost
          inputSearchRef={inputSearchRef}
          handleSearchPost={handleSearchPost}
        />
      </div>
      {postsListItem &&
        postsListItem.map((postItem, indexItem) => {
          return <PostCard key={indexItem} postItem={postItem} />;
        })}
    </div>
  );
};

export default HomePage;
