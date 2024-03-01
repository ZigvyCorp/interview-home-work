'use client';

import React, { useEffect, useState } from 'react';
import Blog from '../Blog';
import { IBlog } from '@/types/blog';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { getAllBlogs, setPage } from '@/redux/features/blog-slice';
import InfiniteScrollObserver from '../Observer/InfiniteScrollObserver';
import styled from 'styled-components';

const limit = 10;

const BlogContainerStyled = styled.div`
  padding: 0 20px;
  margin-top: 100px;
`;

const Blogs = () => {
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.blog.blogs);
  const total = useAppSelector((state) => state.blog.total);
  const page = useAppSelector((state) => state.blog.page);
  const q = useAppSelector((state) => state.blog.q);

  useEffect(() => {
    dispatch(getAllBlogs({ page, limit, q }));
  }, [page]);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  console.log(page * limit - total);

  return (
    <BlogContainerStyled>
      {blogs?.map((blog: IBlog, index: number) => (
        <>
          <Blog blog={blog} key={index} />
          {index === blogs.length - 1 && (
            <InfiniteScrollObserver
              callback={loadMore}
              hasMore={page * limit <= total || page * limit - total <= limit}
            />
          )}
        </>
      ))}
    </BlogContainerStyled>
  );
};

export default Blogs;
