import { Container, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GET_ALL_POSTS } from '../state/types'
import Post from '../components/Post'
import Pager from '../components/Pagination'
import Search from '../components/Search'

const HomePage = () => {
  const { posts, loading } = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: GET_ALL_POSTS, payload: 1 })
  }, [dispatch])

  return (
    <Container>
      <Search/>
      {loading && <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}

      {posts &&
      <>
        <div style={{ height: 'calc(100vh - 230px)', overflowY: 'scroll' }}>
          {posts?.allPosts.map(post => (
            <Post post={post}/>
          ))}
        </div>
        <Pager totalPage={Math.ceil(posts.amountData / posts.pageSize)}/>
      </>
      }
    </Container>
  )
}

export default HomePage
