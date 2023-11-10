// Utilities
import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

// Interface
interface Pagination {
  totalPage: number;
  pageNumber: number;
  pageChange: (pageNumber: number) => void;
}

export default function PaginationBasic({ totalPage, pageNumber, pageChange }: Pagination) {
  const items: React.ReactElement[] = [];

  const handlePageChange = async (pageNumber: number) => {
    await pageChange(pageNumber);
  }


  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === pageNumber} onClick={() => handlePageChange(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return <Pagination>{items}</Pagination>
}