import React from "react";
import { upperCaseFirstChar } from "../../utils/processDescriptionTextOfPost";
import { useHistory } from "react-router-dom";

const SearchItem = ({ title, userName, id }) => {
  const history = useHistory();

  const onSeeDetail = () => {
    history.push(`/posts/${id}`);
  };
  return (
    <div onClick={onSeeDetail} role="button" class="d-flex flex-column p-2 border rounded mb-2 border-dark">
      <span className="border-bottom mb-2 pb-2">{upperCaseFirstChar(title)}</span>
      <div>
        <small className="text-secondary">Created By </small>
        <small className="fw-bold">{userName}</small>
      </div>
    </div>
  );
};

export default SearchItem;
