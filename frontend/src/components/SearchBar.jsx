import { useState } from 'react'
import { store } from '../redux/store'
import { onTypingSearch } from '../redux/actions'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <input
        className="rounded border"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.currentTarget.value)
          store.dispatch(onTypingSearch({ title: search }))
        }}
      />
    </div>
  )
}

export default SearchBar
