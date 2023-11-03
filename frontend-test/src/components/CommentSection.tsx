import { Avatar, List } from 'antd';

interface CommentSectionProps {
  comments: any[]
}

export default function CommentSection(props: CommentSectionProps): JSX.Element {
  const { comments } = props

  return (
    <List
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
            title={<p>{item.email}</p>}
            description={item.body}
          />
        </List.Item>
      )}
    />
  )
}
