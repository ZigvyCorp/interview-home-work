import Search from "antd/es/input/Search";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getSearchPost } from "../../redux/postSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import type { SearchProps } from "antd/es/input/Search";
import { useNavigate } from "react-router-dom";

export const SearchBar: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<string, any, any>>();
  let [keyword, setKeyword] = useState<string>("");
  const navigate = useNavigate();

  const handleSearch: SearchProps["onSearch"] = (value) => {
    dispatch(getSearchPost(value));
    setKeyword("");
    navigate("/");
  };

  return (
    <>
      <Search
        size='large'
        value={keyword}
        placeholder='Find something...'
        onSearch={handleSearch}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ width: 500 }}
      />
    </>
  );
};
