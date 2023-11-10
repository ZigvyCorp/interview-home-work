import { Avatar } from 'antd'
import PropTypes from 'prop-types'

import styles from './CommentItem.module.scss'
import { Comment } from '~/types/blogs.types'

interface CommentItemProps {
  comment: Comment
}

const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <div className={styles.wrapper}>
      <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }} className={styles.avatar}>
        T
      </Avatar>
      <div className={styles.content}>
        <h4>{comment.author.email}</h4>
        <div>{comment.content}</div>
      </div>
    </div>
  )
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired
}

export default CommentItem
