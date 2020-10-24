import { compose, hoc } from '../../../@';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectedPosts,
  selectedLoading,
  selectedError,
  selectedKeyword,
  selectedHasMore,
} from '../../selector';
import {useCallback, useEffect, useRef} from 'react';
import { nextPage, setHasMore, setKeyword, setPage } from '../../actions';
import { notification } from 'antd';

const container = compose(
  hoc((props) => {
    const dispatch = useDispatch();
    const posts = useSelector(selectedPosts);
    const loading = useSelector(selectedLoading);
    const error = useSelector(selectedError);
    const keyword = useSelector(selectedKeyword);
    const hasMore = useSelector(selectedHasMore)

    useEffect(()=>{
        if(!error) return
        notification.error({
            message: 'Error',
            description: error,
        });

    },[error])

    const observer = useRef();
    const lastPostElementRef = useCallback(
      (node) => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting && hasMore) {
            dispatch(nextPage());
          }
        });
        if (node) observer.current.observe(node);
      },
      [loading, dispatch, hasMore]
    );

    const handleSearch = useCallback(
      (value) => {
        dispatch(setKeyword(value));
        dispatch(setPage(1));
        dispatch(setHasMore(true));
      },
      [dispatch]
    );

    return {
      ...props,
      posts,
      lastPostElementRef,
      error,
      loading,
      handleSearch,
      keyword,
    };
  })
);

export default container;
