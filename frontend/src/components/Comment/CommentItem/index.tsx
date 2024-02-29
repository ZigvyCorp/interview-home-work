import { Avatar, Col, Dropdown, MenuProps, Row } from 'antd'
import React from 'react'
import { EllipsisOutlined } from '@ant-design/icons';
import avatar from '../../../assets/images/1.jpg'
import { Comment } from '../../../types/Comment/types';
import { calculateDateDiff } from '../../../utils/formatDate';

const items: MenuProps['items'] = [
  {
    key: '2',
    label: (
      <p >
        Delete comment
      </p>
    ),
  },
  {
    key: '3',
    label: (
      <p>
        Edit comment
      </p>
    ),
  },
];

const CommentItem: React.FC<Comment> = ({ content, createdAt, name, isMyComment }) => {
  return (
    <div className='my-2'>
      <Row justify={'space-between'}>
        <Col xs={{ span: 4 }} lg={{ span: 2 }}>
          <Avatar src={avatar} />
        </Col>
        <Col xs={{ span: 20 }} lg={{ span: 22 }}>
          <Row justify={'space-between'}>
            <Col>
              <p>{name} <span>{calculateDateDiff(createdAt)}</span></p>
            </Col>
            <Col className='mr-2'>
              {isMyComment && <Dropdown menu={{ items }}>
                <EllipsisOutlined className='text-lg cursor-pointer' key="edit" />
              </Dropdown>}
            </Col>
          </Row>
          <Row>
            <Col span={20}>
              <p>{content}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default CommentItem