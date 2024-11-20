import { isEmpty, isNil } from 'lodash'
import React from 'react'

import PaginationBar from './PaginationBar'

const Pagination = ({ data, onChangePage }) => {
  if (isEmpty(data) || isNil(data)) {
    return null
  }

  if (data.totalRecords === 0) {
    return null
  }

  if (data.lastPage === 1) {
    return null
  }

  return (
    <div className="my-5 d-flex justify-content-center">
      <PaginationBar data={data} onChangePage={onChangePage} />
    </div>
  )
}

export default Pagination
