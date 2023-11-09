import { AudioOutlined } from '@ant-design/icons'
import React from 'react'
import { Input, Space } from 'antd'
const { Search } = Input

const SearchBar = ({ setTextSearch }) => {
  const onSearch = (value, _e, info) => {
    setTextSearch(value)
  }

  return (
    <Search
      placeholder='searching for posts?'
      allowClear
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
  )
}

export default SearchBar
