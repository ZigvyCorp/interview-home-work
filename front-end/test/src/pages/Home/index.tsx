import { Affix, Button, Skeleton, Space } from 'antd'
import Post from './Post'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SkeletonHome from './Skeleton'
import ModalPost from './ModalPost'
import { PostsType } from 'src/types'
import { selectPosts, selectSearchText } from 'src/store/slices/postsSlice'
import { loadingPostsSelector } from 'src/store/slices/blacklistSlice'
import { showModal } from 'src/store/slices/modalSlice'
import { getPosts } from 'src/store/actions/postAction'

function Home() {
  const dispatch = useDispatch()
  const posts: PostsType[] = useSelector(selectPosts)
  const searchText = useSelector(selectSearchText)

  const postsSearch = posts.filter((post) => {
    return post?.title.toLowerCase().includes(searchText.toLowerCase())
  })
  const loading: boolean = useSelector(loadingPostsSelector)
  const showModalHandler = () => {
    dispatch(showModal())
  }
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  return (
    <div>
      <Space direction='vertical' size={[0, 16]} style={{ display: 'flex' }}>
        <ModalPost />
        {loading ? <SkeletonHome /> : postsSearch?.map((item, i: number) => <Post key={i} post={item} />)}
        <Affix style={{ position: 'absolute', right: 60 }} offsetBottom={60}>
          <Button type='primary' onClick={showModalHandler}>
            Add post
          </Button>
        </Affix>
      </Space>
    </div>
  )
}

export default Home
