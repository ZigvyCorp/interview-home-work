import { setSearchTerm } from "@/app/server-action/store/actions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let timeout = null;
    timeout = setTimeout(() => {
      if (text.length > 10) {
        dispatch(setSearchTerm(text));
      }
    }, [1500]);
    return () => {
      clearTimeout(timeout);
      timeout = null;
    };
  }, [text]);

  const handleSearch = ({ target }) => {
    setText(target.value);
  };

  return (
    <div className="d-flex justify-content-center mt-1">
      <input
        type="text"
        className="form-control w-100"
        placeholder="Search from 10 symbol..."
        value={text}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
