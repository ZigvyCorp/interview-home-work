import React, { useState } from 'react'
import { Typography, Row, Col, Tag, Dropdown, MenuProps } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Post } from '../../../types/Post/types';
import CommentBlock from '../../Comment';
import { formatDate } from '../../../utils/formatDate';

const { Title } = Typography;


const items: MenuProps['items'] = [
    {
        key: '2',
        label: (
            <p >
                Delete post
            </p>
        ),
    },
    {
        key: '3',
        label: (
            <p>
                Edit post
            </p>
        ),
    },
];

const PostContent: React.FC<Post> = ({ User, content, title, createdAt, tags, commentCount, isMyPost, postId }) => {
    const [showMore, setShowMore] = useState<boolean>(content.length > 100 ? false : true)

    return (
        <div className='shadow-lg border border-gray-400 p-4 w-[320px] lg:w-[700px] mb-4 mx-auto rounded-lg bg-white'>
            <Row
                justify='space-between'
                align='middle'
            >
                <Title className='text-center' level={4}>{title}</Title>
                {isMyPost &&
                    <Dropdown menu={{ items }}>
                        <EllipsisOutlined className='text-lg cursor-pointer' key="edit" />
                    </Dropdown>
                }
            </Row>
            <Row
                justify='space-between'
                align='middle'
            >
                <Col>
                    <p>Author: {User.name}</p>
                    <p>Created at: {formatDate(createdAt)}</p>
                </Col>

                <Col className='mt-1 lg:mt-0 flex lg:justify-end flex-wrap gap-y-1' lg={{ span: 8 }} xs={{ span: 24 }}>
                    {tags.map(tag => <Tag className='text-center' color='cyan' key={tag}>{tag}</Tag>)}
                </Col>
            </Row>
            <Row className='mt-4'>
                {content.length < 100 ?
                    <p>{content}</p>
                    : showMore ?
                        <p>{content} <span className="cursor-pointer font-bold" onClick={() => setShowMore(!showMore)}>Hide</span></p>
                        :
                        <p>{content.substring(0, 100)}...<span className="cursor-pointer font-bold" onClick={() => setShowMore(!showMore)}>More</span></p>
                }
            </Row>
            <CommentBlock postId={postId} commentCount={commentCount} />
        </div>
    )
}

export default PostContent
