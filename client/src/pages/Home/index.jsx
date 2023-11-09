import './styles.css'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Post from '../../components/Post'
import BlogPagination from '../../components/Pagination'
// import posts from '../../data/posts.json'
import comments from '../../data/comments.json'
import users from '../../data/users.json'
import SearchBar from '../../components/SearchBar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts } from '../../redux/slice/post.slice'

const Home = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const posts = useSelector((state) => state.post.posts)

  const [current, setCurrent] = useState(1)
  const [textSearch, setTextSearch] = useState('')
  const [filteredPosts, setFilteredPosts] = useState([])
  const [postInPage, setPostInPage] = useState([])

  const onPageChange = (page) => {
    // pagination trigger
    setCurrent(page)
    navigate(`/home/?page=${page}${textSearch ? `&search=${textSearch}` : ''}`)
  }

  useEffect(() => {
    const query = new URLSearchParams(location.search)
    const pageParam = parseInt(query.get('page'))
    const searchParam = query.get('search')

    if (pageParam) {
      setCurrent(pageParam)
    } else {
      navigate(`/home/?page=${current}${textSearch ? `&search=${textSearch}` : ''}`)
    }

    if (searchParam) {
      setTextSearch(searchParam)
    }

  }, [location, current, navigate, textSearch])

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  useEffect(() => {
    setFilteredPosts(
      posts?.filter((post) => {
        if (textSearch) {
          return post.title.toLocaleLowerCase().includes(textSearch.toLowerCase())
        }
        return post
      })
    )
  }, [posts, textSearch])

  useEffect(() => {
    setPostInPage(
      filteredPosts.slice(
        (current - 1) * 3,
        current * 3 > filteredPosts.length ? filteredPosts.length : current * 3
      )
    )
  }, [current, filteredPosts])

  return (
    <div className='home'>
      <h1>Home Page</h1>

      <div className='searchBar'>
        <SearchBar setTextSearch={setTextSearch} />
      </div>

      {postInPage.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          content={post.content}
          user={users.find((user) => user.id === post.owner)}
          comments={comments.filter((comment) => comment.post === post.id)}
          createdAt={post.created_at}
        />
      ))}

      <BlogPagination
        currentPage={current}
        onPageChange={onPageChange}
        total={filteredPosts.length}
      />
    </div>
  )
}

export default Home
