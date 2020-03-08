import { useState } from 'react'

export default initialValues => {
  initialValues = typeof initialValues === 'object' ? initialValues : {}

  const [page, setPage] = useState(initialValues.page || 0)
  const [amountPerPage, setAmountPerPage] = useState(initialValues.amountPerPage || 10)
  const [search, setSearch] = useState(initialValues.search || '')

  return [
    {
      page,
      amountPerPage,
      search,
    },
  ]
}
