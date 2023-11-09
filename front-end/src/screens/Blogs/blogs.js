import React, { useEffect, useState } from "react"
import PostHeader from "../../components/PostsHeader/postHeader"
import PostDesription from "../../components/PostDescription/postDescription"
import Comments from "../../components/Comments/comments"
import { Divider, Input, Slider } from "antd"
import { useNavigate } from "react-router-dom"
import { store } from "../../redux/store"
import { fetchPosts } from "../../redux/actions"
import { getAllPosts } from "../../services/post.services"
import { Pagination } from "antd"

const Blogs = () => {
  const navigate = useNavigate()

  const [posts, setPosts] = useState()
  const [postsPagination, setPostsPagination] = useState()

  const fetchDataBlogs = async () => {
    const postsRes = await getAllPosts()
    store.dispatch(fetchPosts(postsRes))
    setPosts(store.getState().post.posts)
    const startIndex = 0
    const endIndex = startIndex + 2
    setPostsPagination(store.getState().post.posts.slice(startIndex, endIndex))
  }

  useEffect(() => {
    fetchDataBlogs()
  }, [])

  const viewPost = (id) => {
    navigate("/posts/" + id)
  }

  const handlePaginationClick = (pageNumber) => {
    const startIndex = (pageNumber - 1) * 2
    const endIndex = startIndex + 2
    setPostsPagination(posts.slice(startIndex, endIndex))
  }

  const handleSearch = (value) => {
    if (value === "") {
      setPostsPagination(store.getState().post.posts.slice(0, 2))
    } else {
      const postsFilter = posts.filter((item) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
      })
      setPostsPagination(postsFilter)
    }
  }

  return (
    <div className="p-[10px]">
      <div>
        <Input.Search placeholder="Search..." onSearch={handleSearch} />
      </div>

      {postsPagination &&
        postsPagination.map((item, index) => (
          <div className="mx-5" key={index}>
            <div onClick={() => viewPost(item._id)}>
              <PostHeader
                author={item.owner.name}
                created={item.created_at}
                title={item.title}
                tags={item.tags}
              />
              <PostDesription description={item.content} />
            </div>
            <Comments idPost={item._id} />
            <Divider />
          </div>
        ))}
      {posts && (
        <Pagination
          defaultCurrent={1}
          total={posts.length}
          onChange={handlePaginationClick}
          pageSize={2}
        />
      )}
    </div>
  )
}

export default Blogs
