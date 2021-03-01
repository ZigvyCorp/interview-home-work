import { PageItem, Pagination } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_POSTS } from '../state/types'

const Pager = () => {
  const { posts } = useSelector(state => state.post)
  const dispatch = useDispatch()

  const clickHandler = e => dispatchGetAllPost(+e.target.innerText)
  const firstHandler = () => dispatchGetAllPost(1)
  const prevHandler = () => dispatchGetAllPost(posts?.pageIndex - 1 || 1)
  const nextHandler = () => dispatchGetAllPost(posts?.pageIndex + 1 || 1)
  const lastHandler = () => dispatchGetAllPost(Math.ceil(posts.amountData / posts.pageSize) || 1)

  const dispatchGetAllPost = (pageIndex) => dispatch({ type: GET_ALL_POSTS, payload: pageIndex })

  let items = []
  for (let number = 1; number <= Math.ceil(posts.amountData / posts.pageSize); number++) {
    items.push(
      <PageItem key={number} active={number === posts.pageIndex} onClick={clickHandler}>
        {number}
      </PageItem>,
    )
  }

  return (
    <Pagination className="mt-3 mb-0">
      <Pagination.First onClick={firstHandler}/>
      <Pagination.Prev onClick={prevHandler}/>
      {items}
      <Pagination.Next onClick={nextHandler}/>
      <Pagination.Last onClick={lastHandler}/>
    </Pagination>
  )
}

export default Pager
