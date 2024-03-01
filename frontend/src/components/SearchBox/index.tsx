'use client';

import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import type { SearchProps } from 'antd/es/input/Search';
import styled from 'styled-components';
import { useAppDispatch } from '@/redux/hook';
import {
  getAllBlogs,
  setBlogs,
  setBlogsNull,
} from '@/redux/features/blog-slice';

const { Search } = Input;

const SearchStyled = styled(Search)`
  max-width: 50%;
`;

const SearchBox = () => {
  const dispatch = useAppDispatch();

  const onSearch: SearchProps['onSearch'] = (value, _e, info) => {
    dispatch(setBlogsNull());
    dispatch(getAllBlogs({ page: 1, q: value }));
  };

  return (
    <SearchStyled
      placeholder='input search text'
      allowClear
      enterButton='Search'
      size='large'
      onSearch={onSearch}
    />
  );
};

export default SearchBox;
