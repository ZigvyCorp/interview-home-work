import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination, Flex } from 'antd'
import Post from '../components/Post'
import { getPosts } from '../redux/features/post/postSlice'
import { AppState } from '../redux/store'
import Loading from '../components/Loading'

const Home: React.FC = () => {
  const dispatch = useDispatch()
  const { posts, isLoading, pagination } = useSelector(
    (state: AppState) => state.post
  )

  useEffect(() => {
    dispatch(getPosts({}))
  }, [dispatch])

  const handleChangePage = (page: number, limit: number) => {
    dispatch(getPosts({ page, limit }))
  }

  return (
    <>
      {posts.length > 0 && !isLoading ? (
        posts.map(post => (
          <Post
            key={post._id}
            {...post}
            content={post.content.slice(0, 100) + '...'}
          />
        ))
      ) : (
        <Loading />
      )}

      {posts.length > 0 && pagination && !isLoading && (
        <Flex justify='center' style={{ padding: '30px 0' }}>
          <Pagination
            showSizeChanger
            current={pagination.currentPage}
            defaultPageSize={3}
            pageSize={pagination.limit}
            pageSizeOptions={[3, 10, 20, 50]}
            total={pagination.totalPosts}
            onChange={(page, pageSize) => handleChangePage(page, pageSize)}
          />
        </Flex>
      )}
    </>
  )
}
export default Home
