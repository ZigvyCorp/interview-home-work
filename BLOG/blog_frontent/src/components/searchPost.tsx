import React, { FC, RefObject } from "react";
import { Button } from "react-bootstrap";

const SearchPost: FC<{ inputSearchRef: RefObject<HTMLInputElement>; handleSearchPost: () => void }> = ({
  inputSearchRef,
  handleSearchPost,
}) => (
  <div className="input-group" style={{ width: "90vw" }}>
    <input
      type="text"
      className="form-control border-1 border-black"
      placeholder="Search"
      ref={inputSearchRef}
    />
    <Button variant="dark" onClick={handleSearchPost}>
      Search
    </Button>
  </div>
);

export default SearchPost;
