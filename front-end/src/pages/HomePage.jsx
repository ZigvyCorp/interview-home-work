import React from "react";
import Posts from "../components/Posts";
import Paging from "../components/Paging";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCommentsFetch, getPostsFetch, getUsersFetch } from "../actions";
import Search from "../components/Search";
const HomePage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const paramPage = searchParams.get("page");
    const paramLimit = searchParams.get("limit");
    const paramSearch = searchParams.get("search");
    const data = {
      page: paramPage ? paramPage : 1,
      limit: paramLimit ? paramLimit : 10,
      search: paramSearch ? paramSearch : "",
    };

    dispatch(getPostsFetch(data));
  }, [searchParams, dispatch]);

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getCommentsFetch());
  }, [dispatch]);

  return (
    <div>
      <Search />
      <Posts />
      <Paging />
    </div>
  );
};

export default HomePage;
