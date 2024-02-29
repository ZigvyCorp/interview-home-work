import { IPost, IUser } from "@/common/@types/types";
import { useDebouncedState } from "@/common/hooks/useDebounce";
import paginate from "@/common/utils/paginate";
import Post from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import userApi from "@/features/user/user.service";
import { getPosts } from "@/store/features/posts/postsSelector";
import { useAppSelector } from "@/store/hooks";
import { Pagination, PaginationProps } from "antd";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const DEBOUNCE_DELAY = 500;
const POST_PER_PAGE = 9;

const paginationConfig: PaginationProps = {
  defaultCurrent: 1,
  pageSize: POST_PER_PAGE,
  showSizeChanger: false,
};

const HomePage = () => {
  const posts = useAppSelector(getPosts);

  const [{ value: page }, { debouncedSetValue: debouncedSetPage }] =
    useDebouncedState<number>(1, DEBOUNCE_DELAY);
  const [{ value: search }, { debouncedSetValue: debouncedSetSearch }] =
    useDebouncedState<string>("", DEBOUNCE_DELAY);

  const [users, setUsers] = React.useState<IUser[] | undefined>();
  const [postsFilter, setPostsFilter] = React.useState<IPost[] | undefined>();
  const [totalPosts, setTotalPosts] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const users = await userApi.getUsers();
      setUsers(users);
      setTotalPosts(posts.length);
      setIsLoading(false);
    };
    fetchData();
  }, [posts]);

  React.useEffect(() => {
    if (!posts) return;
    const paginationResult = paginate(
      posts.filter((post) => post.title.includes(search)),
      page,
      POST_PER_PAGE
    );
    setTotalPosts(paginationResult.totalItems);
    setPostsFilter(paginationResult.items);
  }, [page, search, posts]);

  React.useEffect(() => {
    debouncedSetPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-5 mb-4">
        <Pagination
          {...paginationConfig}
          total={totalPosts}
          onChange={(page) => debouncedSetPage(page)}
        />
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={(e) => debouncedSetSearch(e.target.value)}
            />
          </Col>
        </Row>
      </div>

      <div className="row">
        {!postsFilter || isLoading
          ? Array.from({ length: POST_PER_PAGE }).map((_, i) => (
              <div className="col-4" key={i}>
                <PostSkeleton />
              </div>
            ))
          : postsFilter.map((post) => {
              const author =
                users?.find((u) => u.id === post.userId)?.name ?? "Unknows";
              return (
                <div className="col-4" key={post.id}>
                  <Post
                    author={author}
                    body={post.body}
                    id={post.id}
                    title={post.title}
                    createdAt="Created at: Sep 20, 2024"
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default HomePage;
