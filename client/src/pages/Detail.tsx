import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Typography } from 'antd'
import { AppState } from '../redux/store'
import { getPostById } from '../redux/features/post/postSlice'
import Loading from '../components/Loading'
import Post from '../components/Post'

const { Paragraph } = Typography

const Detail: React.FC = () => {
  const { postId } = useParams()

  const dispatch = useDispatch()
  const { currentPost, isLoading, error } = useSelector(
    (state: AppState) => state.post
  )

  useEffect(() => {
    dispatch(getPostById(postId || ''))
  }, [dispatch, postId])
  return (
    <>
      {isLoading && <Loading />}
      {error && (
        <Paragraph type='danger' style={{ textAlign: 'center', marginTop: 40 }}>
          {error}
        </Paragraph>
      )}
      {currentPost && <Post {...currentPost} />}
    </>
  )
}
export default Detail
