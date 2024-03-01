import { useState, type FC } from 'react'
import { List } from 'antd'
import { Comment } from '@ant-design/compatible'
import { Container, Loading, Text } from 'components'
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { getCommentsStart } from 'store/comments/slice'
import { TComments } from 'types/comments'
import styles from './index.module.scss'

const { Item } = List

interface IProps {
  postId: number
}

const Comments: FC<IProps> = ({
  postId
}) => {
  const dispatch = useAppDispatch()
  const { comments, isLoading } = useAppSelector(state => state.comment)
  const dataSource = comments[postId] || [{}]
  const [open, setOpen] = useState<boolean>(false)

  const handleGetComments = () => {
    if (!comments[postId]) {
      dispatch(getCommentsStart({
        postId
      }))
    }
    setOpen(true)
  }

  const CommentHeader = (
    <Container flex justify='between'>
      <Text>5 replies</Text>
      {
        open ? <CaretUpOutlined
          className='text-lg cursor-pointer'
          onClick={() => setOpen(false)}
        /> : <CaretDownOutlined
          className='text-lg cursor-pointer'
          onClick={handleGetComments}
        />
      }
    </Container>
  )

  const renderItem = open && !isLoading ?
    (comment: TComments, index: number) => (
      <Item key={index}>
        <Comment
          actions={[<Text>Reply to</Text>]}
          author={comment.email}
          avatar='/user.png'
          content={comment.body}
          datetime={<Text>8 hours ago</Text>}
        />
      </Item>
    ) : open && isLoading ? () => <Loading size='large' /> : () => null

  return (
    <List
      className={styles.root}
      header={CommentHeader}
      itemLayout="horizontal"
      dataSource={dataSource}
      renderItem={renderItem}
    />
  )
}

export default Comments
