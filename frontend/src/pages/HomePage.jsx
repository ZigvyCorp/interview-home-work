import { useEffect } from 'react'
import Post from '../components/Post'
import { store } from '../redux/store'
import { getPostsFetch } from '../redux/actions'
import { connect } from 'react-redux'
import Stack from 'react-bootstrap/Stack'

const HomePage = connect((state) => state)((props) => {
  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight
  }

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('home-page')
      console.log(props.posts)
      if (
        isBottom(el) &&
        !props.posts.isLoading &&
        props.posts.currentPage < props.posts.totalPages
      ) {
        store.dispatch(getPostsFetch({ page: props.posts.currentPage + 1 }))
      }
    }

    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [props.posts])

  useEffect(() => {
    if (!props.posts.data) {
      console.log('first fetch')
      store.dispatch(getPostsFetch())
    }
  }, [props.posts.data])

  return (
    <div id="home-page">
      <div
        className="pt-3 pb-5 mx-auto w-50"
        onScroll={() => console.log('object')}
      >
        <Stack gap={3}>
          {props.posts.data &&
            props.posts.data.map((post) => <Post key={post._id} post={post} />)}
          {props.posts.isLoading && 'Loading...'}
        </Stack>
      </div>
    </div>
  )
})

export default HomePage
