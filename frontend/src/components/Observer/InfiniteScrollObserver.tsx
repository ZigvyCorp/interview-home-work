import { setPage } from '@/redux/features/blog-slice';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import React, { useEffect, useRef } from 'react';

const InfiniteScrollObserver = ({
  callback,
  hasMore,
}: {
  callback: () => void;
  hasMore: boolean;
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const page = useAppSelector((state) => state.blog.page);
  const dispatch = useAppDispatch();

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].isIntersecting);
        console.log(hasMore);
        if (entries[0].isIntersecting && hasMore) {
          console.log('first');
          loadMore();
        }
      },
      { threshold: 1 }
    );

    if (observerRef.current) {
      observerRef.current.observe(document.getElementById('bottom')!);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback]);

  return <div id='bottom' style={{ height: '10px' }} />;
};

export default InfiniteScrollObserver;
