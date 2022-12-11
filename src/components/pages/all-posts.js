import { Fragment, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNextPosts,
  getMatchingPosts,
  getPosts
} from '../store/actions/post-actions';
import PostSummary from '../post/post-summary';
import scss from './all-posts.module.scss';
import { Form, InputGroup, Spinner } from 'react-bootstrap';

function StatusText({ message }) {
  if (message === 'spinner')
    return (
      <div className={scss['spinner-wrapper']}>
        <Spinner
          variant='primary'
          style={{
            width: '4rem',
            height: '4rem'
          }}
        />
      </div>
    );
  return <p className={scss['status-text']}>{message}</p>;
}

function AllPosts() {
  const {
    items,
    nextItems,
    matchingItems,
    isFetching,
    hasError,
    hasNextPage
  } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const [lazyLoadingObserver, isInView] = useInView();
  const [searchValue, setSearchValue] = useState('');
  const isSearching = searchValue.length > 0;

  function onSearchChangeHandler(event) {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect(() => {
    if (isInView && !isSearching && hasNextPage) {
      if (nextItems.length) {
        dispatch(addNextPosts());
      } else {
        dispatch(getPosts());
      }
    }
  }, [isInView, nextItems, dispatch, isSearching, hasNextPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSearching > 0) {
        dispatch(getMatchingPosts(searchValue));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [isSearching, dispatch, searchValue]);

  let message;

  if (
    (!items.length && !isFetching) ||
    (isSearching && !matchingItems.length && !isFetching)
  ) {
    message = "Couldn't find any posts.";
  } else if (hasError) {
    message = 'There was an error while fetching posts data';
  } else if (isFetching) {
    message = 'spinner';
  } else if (!hasNextPage || isSearching) {
    message = 'End of posts';
  }

  const finalPosts = isSearching ? matchingItems : items;
  return (
    <Fragment>
      <InputGroup className='mb-5' size='lg'>
        <Form.Control
          onChange={onSearchChangeHandler}
          value={searchValue}
          placeholder='Search blogs'
          aria-label='Search blogs'
        />
      </InputGroup>
      <div className={scss.posts}>
        {finalPosts.map((post) => (
          <Fragment key={post.id}>
            <PostSummary {...post} />
          </Fragment>
        ))}
        <div className={scss.observer} ref={lazyLoadingObserver} />
      </div>
      <StatusText message={message} />
    </Fragment>
  );
}
export default AllPosts;
