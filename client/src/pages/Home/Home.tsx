import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { Input, Modal } from 'antd'
import { FormEvent, useContext, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import blogsApi from '~/api/blogs.api'
import BlogItem from '~/components/BlogItem'
import CommentItem from '~/components/CommentItem'
import { AppContext } from '~/providers/AppProvider/AppProvider'
import { Blog, Comment } from '~/types/blogs.types'
import styles from './Home.module.scss'

const Home = () => {
  const { isAuthenticated } = useContext(AppContext)

  const [blogs, setBlogs] = useState<Blog[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentBlog, setCurrentBlog] = useState<Blog | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [comment, setComment] = useState<string>('')

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const changeCurrentBlog = (blog: Blog) => {
    setCurrentBlog(blog)
  }

  // Query: Get blogs
  const getBlogsQuery = useInfiniteQuery({
    queryKey: ['getBlogs'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => blogsApi.getBlogs({ page: pageParam, limit: 5 }),
    getNextPageParam: (lastPage) =>
      lastPage.data.data.pagination.page < lastPage.data.data.pagination.total_pages
        ? lastPage.data.data.pagination.page + 1
        : undefined
  })

  // Query: Get comments
  const getCommentsQuery = useInfiniteQuery({
    queryKey: ['getComments', currentBlog?._id],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      blogsApi.getComments({ blog_id: currentBlog?._id as string, query: { page: pageParam } }),
    getNextPageParam: (lastPage) =>
      lastPage.data.data.pagination.page < lastPage.data.data.pagination.total_pages
        ? lastPage.data.data.pagination.page + 1
        : undefined,
    enabled: !!currentBlog
  })

  // Mutation: Tạo comment
  const createCommentMutation = useMutation({
    mutationFn: blogsApi.createComment,
    onSuccess: (data) => {
      const newComment = data.data.data.comment
      setComments((prevComments) => [newComment, ...prevComments])
      currentBlog && setCurrentBlog({ ...currentBlog, comment_count: currentBlog.comment_count + 1 })
      setBlogs(
        blogs.map((blog) => {
          if (blog._id === currentBlog?._id) {
            return { ...blog, comment_count: blog.comment_count + 1 }
          }
          return blog
        })
      )
    }
  })

  // Tải blogs
  useEffect(() => {
    if (!getBlogsQuery.data) return
    const blogs = getBlogsQuery.data.pages.map((page) => page.data.data.blogs).flat()
    setBlogs(blogs)
  }, [getBlogsQuery.data])

  // Tải comments
  useEffect(() => {
    if (!getCommentsQuery.data) return
    const comments = getCommentsQuery.data.pages.map((page) => page.data.data.comments).flat()
    setComments(comments)
  }, [getCommentsQuery.data])

  // Bình luận
  const handleComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!comment.trim() || !currentBlog) return
    createCommentMutation.mutate({ blog_id: currentBlog?._id as string, content: comment })
    setComment('')
  }

  return (
    <div>
      <InfiniteScroll
        dataLength={comments.length} //This is important field to render the next data
        next={getBlogsQuery.fetchNextPage}
        hasMore={getBlogsQuery.hasNextPage}
        loader={<h4 style={{ textAlign: 'center', padding: '24px 0' }}>Loading...</h4>}
        scrollThreshold={0.9}
      >
        {blogs.map((blog) => (
          <BlogItem key={blog._id} blog={blog} showModal={showModal} changeCurrentBlog={changeCurrentBlog} />
        ))}
      </InfiniteScroll>

      <Modal title={currentBlog?.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered>
        <div>Bình luận ({currentBlog?.comment_count})</div>
        {comments.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
        {isAuthenticated && (
          <form onSubmit={handleComment}>
            <Input
              placeholder='Nhập bình luận của bạn'
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className={styles['comment-input']}
            />
          </form>
        )}
      </Modal>
    </div>
  )
}

export default Home
