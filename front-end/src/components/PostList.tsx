import { Pagination } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../libs/redux/hook';
import {
  postActions,
  selectPostFilter,
  selectPostList,
  selectPostPagination,
} from '../libs/redux/reducers/posts/postsReducer';
import PostItem from './PostItem';

export default function PostList() {
  const posts = useAppSelector(selectPostList);
  const filter = useAppSelector(selectPostFilter);
  const pagination = useAppSelector(selectPostPagination);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(postActions.fetchPostList(filter));
  }, [filter, dispatch]);

  const handleChange = (page: number) => {
    dispatch(postActions.setFilter({ ...filter, page }));
  };

  return (
    <>
      <section>
        {posts?.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </section>
      <div className='grid place-content-center mt-10'>
        <Pagination
          onChange={handleChange}
          defaultCurrent={pagination.page}
          defaultPageSize={pagination.limit}
          total={pagination.totalRows}
        />
      </div>
    </>
  );
}
