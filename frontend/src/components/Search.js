import { Button, Form, FormControl, InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { GET_ALL_POSTS, SEARCH_POSTS } from '../state/types'

const Search = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch({ type: GET_ALL_POSTS, payload: 1 })
    // dispatch({type: SEARCH_POSTS, payload: term})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by title"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <InputGroup.Append>
          <Button onClick={handleSubmit}>Search</Button>
        </InputGroup.Append>
      </InputGroup>
    </Form>
  )
}

export default Search
