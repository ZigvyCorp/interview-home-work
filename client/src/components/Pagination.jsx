import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

const PostPagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <Pagination className="d-flex justify-content-center">
      {pageNumbers.map((number) => (
        <Pagination.Item
          linkStyle={{
            backgroundColor: number === activePage ? "#2b2b2b" : "",
            border: number === activePage ? "none" : "border-1",
            color: number === activePage ? "#fff" : "#000",
          }}
          key={number}
          active={number === activePage}
          onClick={() => handlePageChange(number)}
          className="m-1"
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default PostPagination;
