import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ActionApp } from '../../../../stores/redux/app.action';
import { SelectorApp } from '../../../../stores/redux/app.selector';

type Props = {};

const ListPagination = (props?: Props) => {
  const paging = useSelector(SelectorApp.paging);
  const { page, totalResults } = paging;

  const dispatch = useDispatch();

  const onChangePagination = (page: number, pageSize: number) => {
    dispatch(ActionApp.RequestGetPosts({ page, limit: pageSize }));
  };

  const showTotal = (total: number, range: [number, number]) => {
    return <>Total: {total}</>;
  };

  return (
    <Pagination
      className='text-right p-4'
      onChange={onChangePagination}
      current={page}
      showTotal={showTotal}
      total={totalResults}
      showSizeChanger={true}
      pageSizeOptions={[3, 5, 10, 25, 50, 100]}
    />
  );
};

export default ListPagination;
