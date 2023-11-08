import { Pagination as AntPagination } from "antd";

export interface IPagination {
  className?: string;
  pageSize: number;
  total: number;
  onChange: (page: number, pageSize: number) => void;
}

const Pagination = ({ className = "", pageSize, total, onChange }: IPagination) => {
  return (
    <AntPagination
      className={`${className}`}
      defaultCurrent={1}
      pageSize={pageSize}
      total={total}
      onChange={onChange}
    />
  );
};

export default Pagination;
