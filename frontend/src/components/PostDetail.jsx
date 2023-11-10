import { useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Comment from './Comment'
import Stack from 'react-bootstrap/esm/Stack'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../redux/store'
import { getPostsFetch } from '../redux/actions'

const PostDetail = connect((state) => state)((props) => {
  let { postId } = useParams()
  let post
  if (props.posts.data) {
    post = props.posts.data.find((post) => post._id === postId)
    if (!post) {
      throw new Error('Post not found')
    }
  }

  useEffect(() => {
    if (!props.posts.data) {
      console.log('first fetch')
      store.dispatch(getPostsFetch())
    }
  }, [props.posts.data])

  if (!post) {
    return <></>
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          <span className="text-underline-hover">{post.title}</span>
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

        <Card.Text>{post.content}</Card.Text>
        <div
          className="small"
          role={post.comments.length !== 0 ? 'button' : 'none'}
          // onClick={() => setCommentExpanded((pre) => !pre)}
        >
          {post.comments.length} comments
        </div>
        <>
          <hr />
          <Stack gap={3}>
            {post.comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </Stack>
        </>
      </Card.Body>
    </Card>
  )
})

export default PostDetail
