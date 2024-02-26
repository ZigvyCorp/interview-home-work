import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ActionTypes from "../store/actionTypes";
import { Input, Pagination, Spin } from "antd";
import PostItem from "./PostItem";

const { Search } = Input;

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.PostReducer.posts);
  const loading = useSelector((state) => state.PostReducer.loading);
  const total = useSelector((state) => state.PostReducer.total);
  const [query, setQuery] = useState({
    page: 1,
  });

  useEffect(() => {
    dispatch({
      type: ActionTypes.GET_TOTAL_POSTS,
    });
  }, []);

  useEffect(() => {
    dispatch({
      type: ActionTypes.UPDATE_LOADING,
      data: {
        loading: true,
      },
    });
    dispatch({
      type: ActionTypes.GET_ALL_POSTS,
      data: query,
    });
  }, [query]);

  const onChange = (page) => {
    setQuery({
      ...query,
      page: page,
    });
  };

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-5">
        <p>Logo</p>
        <p>Blogs</p>
        <p>Le Anh tuan</p>
      </div>
      <Search
        className="w-[200px]"
        onSearch={(title) =>
          setQuery({
            ...query,
            title: title,
          })
        }
        allowClear
        placeholder="Input title..."
      />
      <div>
        {loading ? (
          <Spin />
        ) : (
          <div className="flex flex-col items-center mb-5">
            {posts?.map((post) => {
              return <PostItem key={post.id} post={post} />;
            })}
            <Pagination
              current={query.page}
              onChange={onChange}
              total={total}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
