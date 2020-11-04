import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const InputSearch = (props) => {
  return <Search placeholder='Search post' enterButton {...props} />;
};

export default InputSearch;
