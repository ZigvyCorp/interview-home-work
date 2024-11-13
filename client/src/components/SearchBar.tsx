import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "../redux/action/postAction";

type Props = {};

const SearchBar = (props: Props) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState<string>("");

  return (
    <div className="input-group rounded m-4 w-25">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(event) => {
            setKeyword(event.target.value);
        }}
      />
      <button
        className="input-group-text border-0"
        id="search-addon"
        onClick={() => dispatch(fetchPost(1, keyword))}
      >
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
