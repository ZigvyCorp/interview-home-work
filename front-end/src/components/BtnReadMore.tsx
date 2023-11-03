import { useAppDispatch, useAppSelector } from '../libs/redux/hook';
import {
  postActions,
  selectPostFilter,
  selectPostPagination,
} from '../libs/redux/reducers/posts/postsReducer';

export default function BtnReadMore() {
  const filter = useAppSelector(selectPostFilter);
  const pagination = useAppSelector(selectPostPagination);
  const dispatch = useAppDispatch();

  const readMore = () => {
    dispatch(postActions.setFilter({ ...filter, page: pagination.page + 1 }));
  };

  if (pagination.page >= pagination.totalPages) return null;

  return (
    <button
      onClick={readMore}
      className='px-4 py-2 text-base font-medium leading-6  whitespace-no-wrap bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'
    >
      Read More
    </button>
  );
}
