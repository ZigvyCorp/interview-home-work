import { Pagination as AntPagination } from "antd";

export interface IPagination {
  className?: string;
  pageSize: number;
  page: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
}

const Pagination = ({ className = "", page, pageSize, total, onChange }: IPagination) => {
  return (
    <AntPagination
      className={`${className}`}
      defaultCurrent={1}
      current={page}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
      showSizeChanger={false}
    />
  );
};

export default Pagination;
