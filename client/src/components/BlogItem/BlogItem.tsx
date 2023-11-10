import { HistoryOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import PATH from '~/constants/path'
import styles from './BlogItem.module.scss'
import { Blog } from '~/types/blogs.types'

interface BlogItemProps {
  blog: Blog
}

const BlogItem = ({ blog }: BlogItemProps) => (
  <div className={styles.wrapper}>
    <div className={styles.author}>
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} className={styles.avatar}>
        T
      </Avatar>
      <span className={styles['author-name']}>{blog.author.email}</span>
    </div>
    <Link to={PATH.HOME}>
      <h3 className={styles.title}>{blog.title}</h3>
    </Link>
    <p className={styles.desc}>{blog.content}</p>
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
        <div className={styles['count-item']}>
          <MessageOutlined />
          <span>28 bình luận</span>
        </div>
      </div>
    </div>
  </div>
)

BlogItem.propTypes = {
  blog: PropTypes.object.isRequired
}

export default BlogItem
