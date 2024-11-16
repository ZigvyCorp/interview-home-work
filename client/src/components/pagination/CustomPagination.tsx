import React from "react";
import { Pagination } from "antd";

interface CustomPaginationProps {
  currentPage: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number, size: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  pageSize,
  total,
  onPageChange,
}) => {
  return (
    <Pagination
      current={currentPage}
      pageSize={pageSize}
      total={total}
      onChange={onPageChange}
    />
  );
};

export default CustomPagination;
