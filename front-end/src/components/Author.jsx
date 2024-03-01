import React from "react";
import { formatDate } from "../utils/formateDate";

function Author({ author, created }) {
  return (
    <div>
      <p className="fw-medium">Author: {author}</p>
      <p className="fw-medium">Created at: {formatDate(created)}</p>
    </div>
  );
}

export default Author;
