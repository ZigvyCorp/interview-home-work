import Header from "src/components/Header";
import Stack from "react-bootstrap/Stack";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import debounce from "lodash/debounce";
import { getValidArray } from "src/utils/common";
import PostItem, { IPostItemProps } from "src/components/PostItem";
import PostListPagination from "src/components/PostListPagination";
import { postSelector, paginatePostStart } from "src/store/reducers/post";
import { getPostsProps } from "../utils";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { DEFAULT_PAGE_SIZE } from "src/constants/common";
import { DEFAULT_DEBOUNCE_TIME } from "./constants";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const { posts, isLoading } = useSelector(postSelector);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const [titleSearch, setTitleSearch] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const debouncedSearch = useCallback(
    debounce((event: { target: { value: string } }) => {
      setTitleSearch(event?.target?.value ?? "");
    }, DEFAULT_DEBOUNCE_TIME),
    []
  );

  function gotoCreatePostForm(): void {
    navigate("/posts/new");
  }

  useEffect(() => {
    dispatch(
      paginatePostStart({
        titleSearch,
        start: (pageIndex - 1) * DEFAULT_PAGE_SIZE,
        limit: DEFAULT_PAGE_SIZE,
      })
    );
  }, [pageIndex, titleSearch]);

  return (
    <>
      <Header />
      <Stack className="mx-4 my-2" gap={2}>
        <Stack direction="horizontal" gap={2}>
          <Form.Control
            type="text"
            placeholder="Search by title"
            className="w-25"
            onChange={debouncedSearch}
          />
          <Button variant="primary" onClick={gotoCreatePostForm}>
            Post new blog
          </Button>
        </Stack>
        <Stack direction="vertical">
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" />
            </div>
          ) : (
            <Stack direction="vertical" gap={3}>
              {getValidArray(getPostsProps(posts, false)).map(
                (postProps: IPostItemProps) => {
                  return <PostItem {...postProps} />;
                }
              )}
            </Stack>
          )}
          <PostListPagination
            total={100}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default PostList;
