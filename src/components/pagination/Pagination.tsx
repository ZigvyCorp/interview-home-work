import { Pagination as AntPagination } from "antd";

export interface IPagination {
  className?: string;
}

const Pagination = ({ className = "" }: IPagination) => {
  return <AntPagination className={`${className}`} />;
};

export default Pagination;
