import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

import blogsApi from '~/api/blogs.api'
import BlogItem from '~/components/BlogItem'
import { Blog } from '~/types/blogs.types'

const Home = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])

  const getBlogsQuery = useInfiniteQuery({
    queryKey: ['getBlogs'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => blogsApi.getBlogs({ page: pageParam }),
    getNextPageParam: (lastPage) =>
      lastPage.data.data.pagination.page < lastPage.data.data.pagination.total_pages
        ? lastPage.data.data.pagination.page + 1
        : undefined
  })

  // Tải blogs
  useEffect(() => {
    if (!getBlogsQuery.data) return
    const blogs = getBlogsQuery.data.pages.map((page) => page.data.data.blogs).flat()
    console.log('>>> blog', blogs)

    setBlogs(blogs)
  }, [getBlogsQuery.data])

  return (
    <div>
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} />
      ))}
    </div>
  )
}

export default Home
