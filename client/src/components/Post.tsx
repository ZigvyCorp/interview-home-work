import { NavLink } from 'react-router-dom'
import { Typography, Flex, Tag, Space } from 'antd'
import Comments from './Comments'
import { Post as PostProps } from '../redux/features/post/postInterfaces'

const { Title, Paragraph } = Typography

const Post: React.FC<PostProps> = props => {
  return (
    <div style={{ padding: 20, borderBottom: '3px solid #333' }}>
      <NavLink to={`/${props._id}`} className='nav-link'>
        <Title style={{ textAlign: 'center' }} className='link-text'>
          {props.title}
        </Title>
      </NavLink>
      <Flex>
        <div>
          <Paragraph strong>Author: {props.ownerName}</Paragraph>
          <Paragraph strong>
            Created at: {new Date(props.createdAt).toDateString()}
          </Paragraph>
        </div>
        <Space size={[0, 8]} wrap style={{ width: 300, marginLeft: 'auto' }}>
          {props.tags.length > 0 &&
            props.tags.map((tag, index) => (
              <Tag key={index} color='blue'>
                {tag}
              </Tag>
            ))}
        </Space>
      </Flex>
      <Paragraph style={{ marginTop: 20 }}>{props.content}</Paragraph>

      <Comments comments={props.comments} />
    </div>
  )
}
export default Post
