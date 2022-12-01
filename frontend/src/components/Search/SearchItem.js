import React from "react";
import { Link } from "react-router-dom";

const SearchItem = (props) => {
  const { result, setSearchValue } = props;

  return (
    <Link
      to={`/posts/${result._id}`}
      className="d-flex list-group-item list-group-item-action p-0"
      onClick={() => setSearchValue("")}
    >
      {/* <a
        className="d-flex list-group-item list-group-item-action p-0"
        onClick={() => setSearchValue("")}
      > */}
      <div className="d-flex p-3 align-items-center justify-content-between flex-fill">
        <h6 className="text-capitalize">{result.title}</h6>
        <span className="text-danger">{result.owner?.name}</span>
      </div>
    </Link>
  );
};

export default SearchItem;
