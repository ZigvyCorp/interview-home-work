import React from 'react'
import { Input } from 'antd';
const { Search } = Input;
const SearchTitle = ({onSearch}) => {
  return (
    <div>
    <Search
    placeholder="input search text"
    allowClear
    onSearch={onSearch}
    style={{
      width: 200,
      border: '2px solid ', 
      borderRadius: '4px', 
      marginBottom:'20px',
    }}
  />
    </div>
  )
}

export default SearchTitle