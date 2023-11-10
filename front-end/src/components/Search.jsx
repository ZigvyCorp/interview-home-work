import React from "react";
import { Input } from "antd";
import { useSearchParams } from "react-router-dom";
const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const onSearchText = (text) => {
    if (text) {
      setSearchParams(`?page=1&limit=10&search=${text.split(" ").join("")}`);
    } else {
      setSearchParams(`?page=1&limit=10`);
    }
  };

  return (
    <Input.Search
      placeholder="Search by title..."
      style={{ width: 250, margin: "15px 0" }}
      onSearch={(value) => onSearchText(value)}
    />
  );
};

export default Search;
