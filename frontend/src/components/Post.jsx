import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Comment from './Comment'
import Stack from 'react-bootstrap/esm/Stack'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  const [commentExpanded, setCommentExpanded] = useState(false)
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          <Link to={'posts/' + post._id}>
            <span className="text-underline-hover">{post.title}</span>
          </Link>
        </Card.Title>
        <Card.Text>
          <div className="d-flex justify-content-between">
            <div>
              <strong>
                <div className="small">Author: {post.owner.name}</div>
              </strong>
              <div className="small">
                Created at: {new Date(post.createdAt).toDateString()}
              </div>
            </div>
            <div
              style={{ width: '150px' }}
              className="d-flex flex-wrap align-items-start"
            >
              {post.tags.map((tag) => (
                <div
                  style={{ fontSize: '13px' }}
                  className="px-1 ms-1 mb-1 rounded border"
                  key={tag}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </Card.Text>

        <Card.Text>
          {post.content.substring(1, 100) +
            (post.content.length > 100 ? '...' : '')}
        </Card.Text>
        <div
          className="small"
          role={post.comments.length !== 0 ? 'button' : 'none'}
          onClick={() => setCommentExpanded((pre) => !pre)}
        >
          {post.comments.length} comments
        </div>
        {commentExpanded && (
          <>
            <hr />
            <Stack gap={3}>
              {post.comments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
              ))}
            </Stack>
          </>
        )}
      </Card.Body>
    </Card>
  )
}

export default Post
