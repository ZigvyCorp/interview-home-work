import React from "react";
import { Link } from "react-router-dom";
import BasicForm from "./formComponents/BasicForm";
import Input from "./formComponents/Input";
import Button from "./formComponents/button";

const SearchBar = ({ onSearchBarInput, className }) => {
  return (
    <div className={`${className}d-inline-block mx-auto`}>
      <Input
        type="text"
        name="search_post"
        className="p-2 rounded border border-primary"
        placeholder="Search By Tags Or Title"
        onChange={onSearchBarInput || null}
      ></Input>
    </div>
  );
};

export default SearchBar;
