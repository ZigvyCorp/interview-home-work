/* eslint-disable react-hooks/exhaustive-deps */
import { IUser } from "@/common/@types/types";
import { useDebouncedState } from "@/common/hooks/useDebounce";
import Post, { IPostProps } from "@/components/Post/Post";
import PostSkeleton from "@/components/PostSkeleton/PostSkeleton";
import userApi from "@/features/user/user.service";
import { postsSelector } from "@/store/features/posts/postsSelector";
import { getPostsThunk } from "@/store/features/posts/postsThunkAction";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const POST_PER_PAGE = 9;
const DEBOUNCE_TIME = 500;

const HomePage = () => {
  const { posts } = useAppSelector(postsSelector);
  const [search, setSearch] = React.useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [filteredPosts, setFilteredPosts] = useState<IPostProps[]>([]);

  const [{ value: currentPage }, { debouncedSetValue: setCurrentPage }] =
    useDebouncedState<number>(1, DEBOUNCE_TIME);

  const dispatch = useAppDispatch();

  const handleSearchFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        dispatch(getPostsThunk());
        const usersRes = await userApi.getUsers();
        setUsers(usersRes);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const start = (currentPage - 1) * POST_PER_PAGE;
    const end = currentPage * POST_PER_PAGE;
    const newPosts = posts.slice(start, end);
    setFilteredPosts(
      newPosts
        .map((post) => {
          return {
            id: post.id,
            title: post.title,
            body: post.body,
            createdAt: "thg 2 10, 12:00 SA",
            author: users.find((user) => user.id === post.userId)?.name,
          };
        })
        .filter((post) => post.title.includes(search))
    );
  }, [currentPage, users, search]);

  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-lg-between mt-3 mb-3">
        <Pagination
          showLessItems={true}
          showSizeChanger={false}
          defaultCurrent={1}
          total={posts.length}
          current={currentPage}
          pageSize={POST_PER_PAGE}
          onChange={(page) => setCurrentPage(page)}
        />
        <Row>
          <Col xs="auto">
            <Form.Control
              value={search}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={handleSearchFilterChange}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="me-3">
              Tìm kiếm
            </Button>
          </Col>
        </Row>
      </div>
      <div className="row">
        {isLoading || isError
          ? Array.from({ length: POST_PER_PAGE }).map((_, index) => (
              <div className="col-4" key={index}>
                <PostSkeleton />
              </div>
            ))
          : filteredPosts.map((post) => (
              <div className="col-4" key={post.id}>
                <Post
                  id={post.id}
                  author={post.author}
                  body={post.body}
                  createdAt="thg 2 10, 12:00 SA"
                  title={post.title}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default HomePage;
