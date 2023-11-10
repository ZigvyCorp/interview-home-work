import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { Input, Modal } from 'antd'
import { FormEvent, useContext, useEffect, useMemo, useState } from 'react'

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
    queryFn: ({ pageParam }) => blogsApi.getBlogs({ page: pageParam }),
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

  // Tổng bình luận
  const totalComments = useMemo(
    () => getCommentsQuery.data?.pages[0].data.data.pagination.total_rows || 0,
    [getCommentsQuery.data?.pages]
  )

  // Bình luận
  const handleComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!comment.trim() || !currentBlog) return
    createCommentMutation.mutate({ blog_id: currentBlog?._id as string, content: comment })
    setComment('')
  }

  return (
    <div>
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} showModal={showModal} changeCurrentBlog={changeCurrentBlog} />
      ))}

      <Modal title={currentBlog?.title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered>
        <div>Bình luận ({totalComments})</div>
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
