import { useState } from 'react'
import { List, Tooltip } from 'antd'
import { Comment } from '@ant-design/compatible'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Comment as CommentProp } from '../redux/features/post/postInterfaces'
dayjs.extend(relativeTime)

const Comments: React.FC<{
  comments: CommentProp[]
}> = ({ comments }) => {
  const [showComments, setShowComments] = useState(false)

  return (
    comments?.length > 0 && (
      <List
        className='comment-list'
        header={
          <Tooltip title={showComments ? 'Hide comments' : 'Show comments'}>
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => setShowComments(!showComments)}
            >{`${comments.length} ${
              comments.length > 1 ? 'replies' : 'reply'
            }`}</span>
          </Tooltip>
        }
        itemLayout='horizontal'
        dataSource={comments}
        renderItem={item =>
          showComments && (
            <li>
              <Comment
                actions={[<span key='comment-list-reply-to-0'>Reply to</span>]}
                author={item.owner?.name}
                avatar={'https://www.w3schools.com/howto/img_avatar.png'}
                content={item.content}
                datetime={dayjs(new Date(item.createdAt)).fromNow()}
              />
            </li>
          )
        }
      />
    )
  )
}
export default Comments
