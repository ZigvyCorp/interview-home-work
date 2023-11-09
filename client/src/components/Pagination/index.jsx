import React, { useState } from 'react'
import { Pagination } from 'antd'

const BlogPagination = ({ currentPage, onPageChange, total }) => {
  return <Pagination defaultCurrent={1} current={currentPage} onChange={onPageChange} total={total} defaultPageSize={3} />
}

export default BlogPagination
