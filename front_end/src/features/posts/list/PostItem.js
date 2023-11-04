import { useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { Row, Col, Space, Typography, Tag, Divider, Collapse } from "antd";
import { useToggle } from '../../../hooks';
import { FormatType, formatDate } from "../../../utils/datetime/formatDate";
import Comment from "../Comment";
import { selectPostComments } from "../../../app/redux/comments/commentsSlice";
import { useSelector } from "../../../app/store";
import { selectUsers } from "../../../app/redux/users/usersSlice";

const { Title, Paragraph, Text, Link } = Typography;

export default function PostItem({ data }) {
  const navigate = useNavigate();

  const { _id, owner, title, content, createdAt, tags } = data ?? {};

  const users = useSelector(selectUsers);
  const comments = useSelector(selectPostComments(_id));

  const { toggle: isExpand, onToggle: onToggleExpand } = useToggle();

  const fmtCreatedDate = useMemo(() => {
    return formatDate(new Date(createdAt), FormatType.longDateAbbreviated);
  }, [createdAt]);

  const user = useMemo(() => {
    return users?.find(u => u._id === owner);
  }, [owner, users]);

  const commentItems = [
    {
      key: _id,
      label: `${comments?.length} ${comments?.length < 2 ? 'reply' : 'replies'}`,
      children: <Space direction="vertical" size={'large'}>
        {comments?.map(comment => <Comment key={comment._id} comment={comment} />)}
      </Space>
    }
  ]

  return (
    <>
      <Space size='large' direction="vertical" style={{ width: '100%' }}>
        <Title style={{ textAlign: 'center' }}>{title}</Title>

        <Row>
          <Col span={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Space direction="vertical">
              <Text>Author: {user?.name}</Text>
              <Text>Created at: {fmtCreatedDate}</Text>
            </Space>
          </Col>
          <Col span={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div>
              {tags?.map(tag => <Tag key={tag} color="blue">{tag}</Tag>)}
            </div>
          </Col>
        </Row>

        <Paragraph style={{ textAlign: 'justify' }}>{content?.slice(0, 99)}</Paragraph>

        <Link onClick={() => navigate(`/posts/${_id}`)}>
          View details
        </Link>

        <Collapse
          items={commentItems}
          onChange={onToggleExpand}
          activeKey={isExpand ? _id : -1}
        />
      </Space>
      <Divider />
    </>
  )
}
