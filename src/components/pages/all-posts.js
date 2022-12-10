import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { addNextPosts, getPosts } from '../store/actions';
import Post from '../post/post-summary';
import scss from './all-posts.module.scss';
import { Spinner } from 'react-bootstrap';

function AllPosts() {
  const { items, nextItems, isFetching, hasError, hasNextPage } =
    useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [ref, isInView] = useInView();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (isInView) {
      if (nextItems.length) {
        dispatch(addNextPosts());
      } else {
        dispatch(getPosts());
      }
    }
  }, [isInView, nextItems, dispatch]);

  return (
    <Fragment>
      <div className={scss.posts}>
        {items.map((post) => (
          <Fragment key={post.id}>
            <Post {...post} />
          </Fragment>
        ))}
        <div className={scss.observer} ref={ref} />
      </div>
      {!items.length && !isFetching ? (
        <p className={scss['status-text']}>
          Couldn't find any posts.
        </p>
      ) : !hasNextPage ? (
        <p className={scss['status-text']}>End of posts.</p>
      ) : isFetching ? (
        <div className={scss['spinner-wrapper']}>
          <Spinner
            variant='primary'
            style={{
              width: '4rem',
              height: '4rem'
            }}
          />
        </div>
      ) : hasError ? (
        <p className={scss['status-text']}>
          There was an error while fetching posts data.
        </p>
      ) : null}
    </Fragment>
  );
}
export default AllPosts;
