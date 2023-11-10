import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import blogsApi from '~/api/blogs.api'
import { getIdFromNameId } from '~/utils/utils'
import styles from './BlogDetail.module.scss'

const BlogDetail = () => {
  const { name_id } = useParams()
  const blogId = getIdFromNameId(name_id as string)

  const getBlogQuery = useQuery({
    queryKey: ['getBlog', name_id],
    queryFn: () => blogsApi.getBlog(blogId),
    enabled: !!name_id
  })

  const blog = useMemo(() => getBlogQuery.data?.data.data.blog, [getBlogQuery.data?.data.data.blog])

  return (
    <div>
      <h1 className={styles.title}>{blog?.title}</h1>
      <div className={styles.content}>{blog?.content}</div>
    </div>
  )
}

export default BlogDetail
