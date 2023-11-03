import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { Pagination } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  postActions,
  selectPostFilter,
  selectPostList,
  selectPostLoading,
  selectPostPagination,
} from "../postSlice";
import { userActions } from "../../user/userSlice";
import PostItem from "../components/PostItem";
import { SubmitHandler, useForm } from "react-hook-form";
import { ListParams, PaginationParams } from "../../../models/common";

interface IFormInput {
  keyword: string;
}

function ListPost() {
  const [keyword, setKeyword] = React.useState("");
  const postList = useAppSelector(selectPostList);
  const pagination = useAppSelector(selectPostPagination);
  const filter = useAppSelector(selectPostFilter);
  const loading = useAppSelector(selectPostLoading);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(postActions.fetchPostList(filter));
    dispatch(userActions.fetchUserList());
  }, [dispatch, filter]);

  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const newFilter: ListParams = {
      ...filter,
      _keyword: data.keyword,
      _page: 1,
    };
    dispatch(postActions.fetchPostList(newFilter));
    setKeyword(data.keyword);
  };

  const handlePageChange = (page: any) => {
    const newFilter: PaginationParams = {
      ...pagination,
      _page: page,
    };
    dispatch(postActions.setPagination(newFilter));
    dispatch(postActions.fetchPostList(newFilter));
  };

  return (
    <div className="body">
      <div className="container my-5">
        <Form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            {...register("keyword")}
          />
          <Button variant="outline-success" type="submit">
            Search
          </Button>
        </Form>
      </div>
      {loading && <Spinner animation="border" />}
      {postList && postList.length === 0 && (
        <div>
          Not match <strong>{keyword}</strong> in any post
        </div>
      )}
      {postList.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      {postList.length > 0 && (
        <Pagination
          className="mt-5"
          current={pagination._page}
          onChange={handlePageChange}
          total={pagination._totalRows}
          pageSize={pagination._limit}
          showSizeChanger={false}
        />
      )}
    </div>
  );
}

export default ListPost;
