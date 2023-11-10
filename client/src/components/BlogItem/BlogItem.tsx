import { HistoryOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import PATH from '~/constants/path'
import { Blog } from '~/types/blogs.types'
import styles from './BlogItem.module.scss'
import { generateNameId } from '~/utils/utils'

interface BlogItemProps {
  blog: Blog
  showModal: () => void
  changeCurrentBlog: (blog: Blog) => void
}

const BlogItem = ({ blog, showModal, changeCurrentBlog }: BlogItemProps) => {
  const handlechangeCurrentBlog = () => {
    showModal()
    changeCurrentBlog(blog)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.author}>
        <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} className={styles.avatar}>
          T
        </Avatar>
        <span className={styles['author-name']}>{blog.author.email}</span>
      </div>
      <Link to={`${PATH.BLOG_DETAIL_WITHOUT_PARAM}/${generateNameId({ name: blog.title, id: blog._id })}`}>
        <h3 className={styles.title}>{blog.title}</h3>
      </Link>
      <p className={styles.desc}>{blog.content.slice(0, 100)}...</p>
      <div className={styles.config}>
        <div className={styles['published-at']}>
          <HistoryOutlined />
          <span>28 phút trước</span>
        </div>
        <div className={styles.count}>
          <div
            className={`${styles['count-item']} ${styles['active']}`}
            aria-hidden='true'
            tabIndex={0}
            role='button'
            onClick={() => {}}
          >
            <LikeOutlined />
            <span>{blog.like_count} lượt thích</span>
          </div>
          <div className={styles['count-item']} onClick={handlechangeCurrentBlog}>
            <MessageOutlined />
            <span>{blog.comment_count} bình luận</span>
          </div>
        </div>
      </div>
    </div>
  )
}

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired
}

export default BlogItem
