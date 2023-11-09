import { HistoryOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import { Link } from 'react-router-dom'

import PATH from '~/constants/path'
import styles from './BlogItem.module.scss'

const BlogItem = () => (
  <div className={styles.wrapper}>
    <div className={styles.author}>
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} className={styles.avatar}>
        T
      </Avatar>
      <span className={styles['author-name']}>haitrieu2524@gmail.com</span>
    </div>
    <Link to={PATH.HOME}>
      <h3 className={styles.title}>Matthew Perry Wanted To Help People Get Sober, Even When He Couldn’t.</h3>
    </Link>
    <p className={styles.desc}>
      Consistency is helpful as a tool for designing user-friendly experiences. Until it isn’t.
    </p>
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
          <span>25 lượt thích</span>
        </div>
        <div className={styles['count-item']}>
          <MessageOutlined />
          <span>28 bình luận</span>
        </div>
      </div>
    </div>
  </div>
)

export default BlogItem
