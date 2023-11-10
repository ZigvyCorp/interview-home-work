import { Pagination, PaginationProps } from "antd";
import { useDispatch } from "react-redux";
import { pagination } from "../../redux/postAction";

interface Props {
  total: number;
}

const PaginationItem = (props: Props) => {
  const dispatch = useDispatch();
  const onChange: PaginationProps["onChange"] = (current, pageSize) => {
    dispatch(pagination({ page: current, perPage: pageSize }));
  };
  return (
    <div className="container">
      <Pagination
        showSizeChanger
        onChange={onChange}
        defaultCurrent={1}
        total={props.total}
      />
    </div>
  );
};

export default PaginationItem;
